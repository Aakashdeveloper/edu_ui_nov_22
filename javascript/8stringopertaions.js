var city = "loNDoN"
undefined
city.toLowerCase()
'london'
city.toUpperCase()
'LONDON'

city.length
6

city.charAt(0)
'l'
city.charAt(1)
'o'

city.slice(1)
'oNDoN'
city.slice(2)
'NDoN'


var city = "amStErDam"
city.charAt(0).toUpperCase()
'A'
city.slice(1).toLowerCase()
'msterdam'
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
'Amsterdam'

var city = "pARiS"
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
'Paris'