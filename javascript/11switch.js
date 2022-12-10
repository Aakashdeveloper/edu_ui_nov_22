//ifelse > multiple condition and multiple output
//ternory > only one condition and one output
//switch> single condition and multiple output

let uname = "Aakash"
switch(uname){
    case "Aakash":
        console.log(`Hi 1 ${uname}`)
        break;
    case "Nikita":
        console.log(`Hi 2 ${uname}`)
        break;
    default:
        console.log(`Hi default ${uname}`)
}

switch(new Date().getDay()){
    case 0:
        console.log(`Its Sunday`)
        break;
    case 1:
        console.log(`Its Sunday`)
        break;
    case 6:
        console.log(`Its Saturday`)
        break;
    default:
        console.log(`Hi default`)
}
Its Saturday