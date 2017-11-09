webpackJsonp([33],{158:function(n,e){n.exports='# Base\r\nsnippet em.base.boolean\r\n\t@boolean\r\nsnippet em.base.natural\r\n\t@natural(${1:60}, ${2:100})\r\nsnippet em.base.integer\r\n\t@integer(${1:60}, ${2:100})\r\nsnippet em.base.float\r\n\t@float(${1:60}, ${2:100})\r\nsnippet em.base.character\r\n\t@character(${1:\'abcde\'})\r\nsnippet em.base.string\r\n\t@string(${1:7}, ${2:20})\r\nsnippet em.base.range\r\n\t@range(${1:3}, ${2:7})\r\n# Date\r\nsnippet em.date.date\r\n\t@date\r\nsnippet em.date.time\r\n\t@time\r\nsnippet em.date.datetime\r\n\t@datetime\r\nsnippet em.date.now\r\n\t@now\r\n# Image\r\nsnippet em.image.image\r\n\t@image(${1:\'200x100\'}, ${2:\'#50B347\'}, ${3:\'#FFF\'}, ${4:\'EasyMock\'})\r\nsnippet em.image.dataImage\r\n\t@dataImage(${1:\'200x100\'}, ${2:\'EasyMock\'})\r\n# Color\r\nsnippet em.color.color\r\n\t@color\r\nsnippet em.color.hex\r\n\t@hex\r\nsnippet em.color.rgb\r\n\t@rgb\r\nsnippet em.color.rgba\r\n\t@rgba\r\nsnippet em.color.hsl\r\n\t@hsl\r\n# Text\r\nsnippet em.text.paragraph\r\n\t@paragraph(${1:1}, ${2:3})\r\nsnippet em.text.sentence\r\n\t@sentence(${1:3}, ${2:5})\r\nsnippet em.text.word\r\n\t@word(${1:3}, ${2:5})\r\nsnippet em.text.title\r\n\t@title(${1:3}, ${2:5})\r\nsnippet em.text.cparagraph\r\n\t@cparagraph(${1:1}, ${2:3})\r\nsnippet em.text.csentence\r\n\t@csentence(${1:3}, ${2:5})\r\nsnippet em.text.cword\r\n\t@cword(${1:\'零一二三四五六七八九十\'}, ${2:5}, ${3:7})\r\nsnippet em.text.ctitle\r\n\t@ctitle(${1:3}, ${2:5})\r\n# Name\r\nsnippet em.name.first\r\n\t@first\r\nsnippet em.name.last\r\n\t@last\r\nsnippet em.name.name\r\n\t@name\r\nsnippet em.name.cfirst\r\n\t@cfirst\r\nsnippet em.name.clast\r\n\t@clast\r\nsnippet em.name.cname\r\n\t@cname\r\n# Web\r\nsnippet em.web.url\r\n\t@url\r\nsnippet em.web.domain\r\n\t@domain\r\nsnippet em.web.protocol\r\n\t@protocol\r\nsnippet em.web.tld\r\n\t@tld\r\nsnippet em.web.email\r\n\t@email\r\nsnippet em.web.ip\r\n\t@ip\r\n# Address\r\nsnippet em.address.region\r\n\t@region\r\nsnippet em.address.province\r\n\t@province\r\nsnippet em.address.city\r\n\t@city(${1:true})\r\nsnippet em.address.county\r\n\t@county(${1:true})\r\nsnippet em.address.zip\r\n\t@zip\r\n# Helper\r\nsnippet em.helper.capitalize\r\n\t@capitalize(${1:\'hello\'})\r\nsnippet em.helper.upper\r\n\t@upper(${1:\'hello\'})\r\nsnippet em.helper.lower\r\n\t@lower(${1:\'HELLO\'})\r\nsnippet em.helper.pick\r\n\t@pick([\'a\', \'e\', \'i\', \'o\', \'u\'])\r\nsnippet em.helper.shuffle\r\n\t@shuffle([\'a\', \'e\', \'i\', \'o\', \'u\'])\r\n# Miscellaneous\r\nsnippet em.miscellaneous.guid\r\n\t@guid\r\nsnippet em.miscellaneous.id\r\n\t@id\r\nsnippet em.miscellaneous.increment\r\n\t@increment(${1:1000})\r\nsnippet em.demo.all\r\n\t{\r\n\t  "base": {\r\n\t    "range": "@range(3, 7)",\r\n\t    "string": "@string(7, 20)",\r\n\t    "character": "@character(\'abcde\')",\r\n\t    "float": "@float(60, 100)",\r\n\t    "integer": "@integer(60, 100)",\r\n\t    "natural": "@natural(60, 100)",\r\n\t    "boolean": "@boolean"\r\n\t  },\r\n\t  "date": {\r\n\t    "date": "@date",\r\n\t    "time": "@time",\r\n\t    "datetime": "@datetime",\r\n\t    "now": "@now"\r\n\t  },\r\n\t  "image": {\r\n\t    "image": "@image(\'200x100\', \'#50B347\', \'#FFF\', \'EasyMock\')"\r\n\t  },\r\n\t  "color": {\r\n\t    "color": "@color",\r\n\t    "hex": "@hex",\r\n\t    "rgb": "@rgb",\r\n\t    "rgba": "@rgba",\r\n\t    "hsl": "@hsl"\r\n\t  },\r\n\t  "text": {\r\n\t    "paragraph": "@paragraph(1, 3)",\r\n\t    "sentence": "@sentence(3, 5)",\r\n\t    "word": "@word(3, 5)",\r\n\t    "title": "@title(3, 5)",\r\n\t    "cparagraph": "@cparagraph(1, 3)",\r\n\t    "csentence": "@csentence(3, 5)",\r\n\t    "cword": "@cword(\'零一二三四五六七八九十\', 5, 7)",\r\n\t    "ctitle": "@ctitle(3, 5)"\r\n\t  },\r\n\t  "name": {\r\n\t    "first": "@first",\r\n\t    "last": "@last",\r\n\t    "name": "@name",\r\n\t    "cfirst": "@cfirst",\r\n\t    "clast": "@clast",\r\n\t    "cname": "@cname"\r\n\t  },\r\n\t  "web": {\r\n\t    "url": "@url",\r\n\t    "domain": "@domain",\r\n\t    "protocol": "@protocol",\r\n\t    "tld": "@tld",\r\n\t    "email": "@email",\r\n\t    "ip": "@ip"\r\n\t  },\r\n\t  "address": {\r\n\t    "region": "@region",\r\n\t    "province": "@province",\r\n\t    "city": "@city(true)",\r\n\t    "county": "@county(true)",\r\n\t    "zip": "@zip"\r\n\t  },\r\n\t  "helper": {\r\n\t    "capitalize": "@capitalize(\'hello\')",\r\n\t    "upper": "@upper(\'hello\')",\r\n\t    "lower": "@lower(\'HELLO\')",\r\n\t    "pick": "@pick([\'a\', \'e\', \'i\', \'o\', \'u\'])",\r\n\t    "shuffle": "@shuffle([\'a\', \'e\', \'i\', \'o\', \'u\'])"\r\n\t  },\r\n\t  "miscellaneous": {\r\n\t    "id": "@id",\r\n\t    "guid": "@guid",\r\n\t    "increment": "@increment(1000)"\r\n\t  }\r\n\t}\r\n'}});