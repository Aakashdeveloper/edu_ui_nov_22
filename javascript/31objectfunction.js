function language(name,country){
    this.name = name;
    this.country = country;
    this.greet=() =>{return `Say hi to ${name}`}
}

let Hindi = new language('Hindi','India')
language {name: 'Hindi', country: 'India', greet: ƒ}

let French = new language('French','France')
French
language {name: 'French', country: 'France', greet: ƒ}