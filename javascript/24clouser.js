//clouser> enclose something
//local scope
//global scope

// var a = 10
// function add(){
//     var b = 20;
//     return a+b
// }


// console.log("add>>>>",add())
// console.log("a>>>>",a)
// console.log("b>>>>",b)

// add>>>> 30
// a>>>> 10
// /Users/aakash/Desktop/api/Nov/edu_ui_nov_22/javascript/24clouser.js:14
// console.log("b>>>>",b)
// ReferenceError: b is not defined

var a = 10
for(i=0;i<5;i++){
    let b = 20;
    console.log(a+b+i)
}

console.log("a>>>>",a)
console.log("b>>>>",b)

// 30
// 31
// 32
// 33
// 34
// a>>>> 10
// b>>>> 20