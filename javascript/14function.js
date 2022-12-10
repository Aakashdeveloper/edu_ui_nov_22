//es5

var a = 10
var b = 20;
a+b
30

/////////es6
function add(a,b){
    return a+b
}

add(1,2)
3
add(4,8)
12
add("Hii","Javascript")
'HiiJavascript'


function add(a,b,c){
    return a+b+c
}
add(2,3)
NaN


//////es6
const add = (a,b) => {return a+b}
add(1,2)

///rest
function add(...args){
    //console.log(args)
    let out = 0;
    for(data of args){
        out = out+data
    }
    return out
}
add(1)
1
add(1,6,3,56)
66