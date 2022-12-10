Collection of homogenious as well as hetrogenious datatype 

var a = [1,5,8,34,23,56]; // array of number

var a = [1,"wefe","gvdf",true,34,"dvdg",false,false]

var city = ["Delhi","Mumbai","London","Pune","Venice"]

city.length
5
city[0]
'Delhi'
city[1]
'Mumbai'
city[4]
'Venice'
city[5]
undefined

var city = ["Delhi","Mumbai","London","Pune","Venice"]
city.push('Helsinki')
6
city
(6) ['Delhi', 'Mumbai', 'London', 'Pune', 'Venice', 'Helsinki']
city.push('Dubai')
7
city
(7) ['Delhi', 'Mumbai', 'London', 'Pune', 'Venice', 'Helsinki', 'Dubai']
city.pop()
'Dubai'
city.pop()
'Helsinki'

push > add value in the end
pop > always remove the last value

var city = ['Delhi', 'Mumbai', 'London', 'Pune', 'Venice', 'Helsinki', 'Dubai']
city.splice(startindex,deletecount,value)

var city = ['Delhi', 'Mumbai', 'London', 'Pune', 'Venice', 'Helsinki', 'Dubai']
city.splice(2,1)

var city = ['Delhi', 'Mumbai', 'London', 'Pune', 'Venice', 'Helsinki', 'Dubai']
city.splice(2,1)
['London']
city
(6) ['Delhi', 'Mumbai', 'Pune', 'Venice', 'Helsinki', 'Dubai']
city.splice(4,0,'Innsburg')
[]
city
(7) ['Delhi', 'Mumbai', 'Pune', 'Venice', 'Innsburg', 'Helsinki', 'Dubai']
city.splice(3,1,'Boston')
['Venice']
city
(7) ['Delhi', 'Mumbai', 'Pune', 'Boston', 'Innsburg', 'Helsinki', 'Dubai']

city.splice(3,1,'Boston','MerryLand')


var city = ['Delhi', 'Mumbai', 'London', 'Pune', 'Venice', 'Helsinki', 'Dubai']

city.indexOf('Delhi')
0
city.indexOf('Venice')
4
city.indexOf('Boston')
-1
city.indexOf('Innsburg')
-1


var a = "hii";
var b = ["hii"];
Array.isArray(a)
false
Array.isArray(b)
true