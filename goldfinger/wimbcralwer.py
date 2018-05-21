import re
from concurrent.futures import ThreadPoolExecutor, wait
import multiprocessing
import urllib.parse

import requests
from lxml import etree

from log import logger
from models import UserAgent, connectdb

class WIMBCrawler(object):
    """Crawl UA info on web-site: whatismybrowser, and save into mongodb."""
    site = 'https://developers.whatismybrowser.com'
    s = requests.Session()

    @classmethod
    def get_sorfware_urls(cls):
        """Return detail page urls."""
        url = urllib.parse.urljoin(cls.site, '/useragents/explore/')
        r = cls.s.get(url)
        if r.status_code != 200:
            logger.error('Request homepage failed.')
            return []
        selector = etree.HTML(r.text)
        hrefs = selector.xpath('//a[contains(text(), "Software:")]/../../ul/li/a/@href')
        return [urllib.parse.urljoin(cls.site, href) for href in hrefs]

    @classmethod
    def get_detail_by_url(cls, url):
        connectdb()
        """Save UA info from specific url."""
        def crawl_page(url):
            r = cls.s.get(url)
            selector = etree.HTML(r.text)
            trs = selector.xpath('//tbody/tr')
            for tr in trs:
                tds = tr.xpath('./td')
                try:
                    user_agent = UserAgent({
                        'name': tds[0].xpath('a/text()')[0],
                        'version': tds[1].text, 'os': tds[2].text,
                        'hardwaretype': tds[3].text, 'popularity': tds[4].text})
                    user_agent.upsert()
                except Exception as e:
                    logger.error(str(e))
            logger.info(f'Crawled page: {url}, number of record: {len(trs)}.')
            return selector

        selector = crawl_page(url)
        max_page = selector.xpath('//div[@id="pagination"]/a[contains(text(), "Last Page")]')[0].text
        max_page = int(re.findall(r'(\d+)', max_page)[0])

        next_urls = [urllib.parse.urljoin(url, str(index)) for index in range(2, max_page+1)]
        e = ThreadPoolExecutor(100)
        wait([e.submit(crawl_page, next_url) for next_url in next_urls])


if __name__ == '__main__':
    urls = WIMBCrawler.get_sorfware_urls()
    logger.info('Got all detail page url.')
    ps = []
    for url in urls:
        p = multiprocessing.Process(target=WIMBCrawler.get_detail_by_url, args=(url, ))
        p.start()
        ps.append(p)
        logger.info(f'Start crawling detail page: {url}.')
    [p.join() for p in ps]
    logger.info('its ok.')