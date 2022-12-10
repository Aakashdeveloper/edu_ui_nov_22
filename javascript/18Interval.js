// interval > run after certain interval of time
// timeout > run only after specific time and only once

setInterval(function() {},time)

let myInterval = setInterval(function() {
    console.log(Math.random())
},3000)
0.8639355158040658
0.8087610242430587
0.957986820078988
0.45071259575628697
0.03474516362295388
clearInterval(myInterval)


setTimeout(function() {
    console.log(Math.random())
},3000)
0.27700462205961274