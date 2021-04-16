#Problema: Extraer información de StackOverflow: Las Preguntas

__autthor__ = 'Script'

from scrapy.item import item
from scrapy.item import Field
from scrapy.spiders import Spider
from scrapy.selector import selector
from scrapy.contrib.loader import ItemLoader


class Pregunta(Item):
        pregunta = Field()
        id = Field()

class StackOverflowSpider(Spider):
    name = "MiPrimerSpider"
    start_urls = ['https://es.stackoverflow.com']
    def parse(self, response):
        sel = Selector(response)
        preguntas = sel.xpath('//div[@id="question-mini-list"]/div')

        #Iterar sobre todas las preguntas
    for i,  elem in enumerate(preguntas) :
        item = ItemLoader(Preguntas(),elem)
        item.add_xpath('pregunta','./h3/a/text()')
        item.add_value('id',i)
        yield item.load_item()

    








