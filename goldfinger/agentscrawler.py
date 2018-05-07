import requests
from lxml import etree
import urllib.parse

def get_sorfware_urls():
    site = 'https://developers.whatismybrowser.com'
    url = urllib.parse.urljoin(site, '/useragents/explore/')
    s = requests.Session()
    r = s.get(url)
    if r.status_code != 200:
        return
    selector = etree.HTML(r.text)
    hrefs = selector.xpath('//a[contains(text(), "Software:")]/../../ul/li/a/@href')
    return [urllib.parse.urljoin(site, href) for href in hrefs]

urls = get_sorfware_urls()


url = url[0]


info = []
r = s.get(url)
selector = etree.HTML(r.text)
trs = selector.xpath('//tbody/tr')
for tr in trs:
    tds = tr.xpath('./td')
    useragent = tds[0].xpath('a/text()')[0]
    info.append({'useragent': useragent, 'version': tds[1].text,
                 'os': tds[2].text, 'hardwaretype': tds[3].text,
                 'popularity': tds[4].text})