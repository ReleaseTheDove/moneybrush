import os

import requests
from lxml import etree


base_url = 'http://top.17173.com/list-1-10-0-0-0-0-0-0-0-0-1.html'

s = requests.Session()
r = s.get(base_url)

text = r.text.encode('ISO-8859-1').decode()
html = etree.HTML(text)
aa = html.xpath('//dt[contains(text(), "类型")]/../dd/a')

mode_fragments = [(a.text, a.get('href')) for a in aa[1:]]

# TODO: save to database.