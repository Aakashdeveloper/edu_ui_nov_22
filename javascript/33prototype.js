function human(name,city){
    this.name = name;
    this.city = city
}

function robot(name){
    this.name = name;
    this.age = 10;
    this.lang = 3
}

let alvin = new human('Alvin','Amsterdam')

human.prototype = new robot()
robot {name: undefined, age: 10, lang: 3}

let amit = new human('Amit','Mumbai')
undefined
amit
human {name: 'Amit', city: 'Mumbai'}
amit.age
10
amit.lang
3