for
while
do while
for of
/////////
for > help to generate series of value as well as help to iterate over the array


for(i=0;i<5;i++){
    console.log(i)
}
0
1
2
3
4


var city = ['Delhi', 'Mumbai', 'London', 'Pune']

for(i=0;i<city.length;i++){
    console.log(city[i])
}
Delhi
Mumbai
London
Pune

//////////////
var i =10
while(i<5){
    console.log(i);
    i++
}

var i = 10;
do{
    console.log(i);
    i++
}
while(i<5)

/////////
var city = ['Delhi', 'Mumbai', 'London', 'Pune']
for(mycity of city){
    console.log(mycity)
}