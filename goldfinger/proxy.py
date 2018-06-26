import requests
import lxml.etree
import random
import urllib.parse

def get_ips(page=1):
    base_url = 'http://www.xicidaili.com/nn/'
    url = urllib.parse.urljoin(base_url, str(page))
    headers={'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'}
    s = requests.Session()
    r = s.get(url, headers=headers)
    trs = lxml.etree.HTML(r.text).xpath('//table[@id="ip_list"]/tr')
    ips= []
    for tr in trs[1:]:
        ip = tr.xpath('.//td')[1].text
        port = tr.xpath('.//td')[2].text
        ips.append({'http': ':'.join(['http', '//'+ip, port])})
    # return ips
    return random.choice(ips)

print(get_ips())