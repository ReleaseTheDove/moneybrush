import re
import requests
from lxml import etree
import urllib.parse
from concurrent.futures import ThreadPoolExecutor, wait
# TODO: 添加日志打印信息

class WIMBCrawler(object):
    """ 抓取whatismybrowser的各种user-agent, 并且存入数据库 """

    site = 'https://developers.whatismybrowser.com'
    s = requests.Session()

    @classmethod
    def get_sorfware_urls(cls):
        """ 获取个浏览器种类url """
        url = urllib.parse.urljoin(cls.site, '/useragents/explore/')
        r = cls.s.get(url)
        if r.status_code != 200:
            return []
        selector = etree.HTML(r.text)
        hrefs = selector.xpath('//a[contains(text(), "Software:")]/../../ul/li/a/@href')
        return [urllib.parse.urljoin(cls.site, href) for href in hrefs]

    @classmethod
    def get_detail_by_url(cls, url):
        """ 获取指定浏览器user-agent信息 """
        def crawl_page(url):
            """ 爬取当前页信息 """
            r = cls.s.get(url)
            selector = etree.HTML(r.text)
            trs = selector.xpath('//tbody/tr')
            for tr in trs:
                tds = tr.xpath('./td')
                # TODO: 改成写数据库
                print({
                    'useragent': tds[0].xpath('a/text()')[0],
                    'version': tds[1].text, 'os': tds[2].text,
                    'hardwaretype': tds[3].text, 'popularity': tds[4].text})
            return selector

        selector = crawl_page(url)
        max_page = selector.xpath('//div[@id="pagination"]/a[contains(text(), "Last Page")]')[0].text
        max_page = int(re.findall(r'(\d+)', max_page)[0])

        next_urls = [urllib.parse.urljoin(url, str(index)) for index in range(2, max_page+1)]
        # TODO: 改成当前机器最大线程数
        e = ThreadPoolExecutor(10)
        wait([e.submit(crawl_page, next_url) for next_url in next_urls])


if __name__ == '__main__':
    urls = WIMBCrawler.get_sorfware_urls()
    url = urls[0]
    print(url)
    WIMBCrawler.get_detail_by_url(url)

