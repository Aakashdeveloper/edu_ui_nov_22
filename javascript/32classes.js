class language1{
    constructor(name,country){
        this.name = name;
        this.country = country;
    }

    greet = () => {
        return `Say Hi to ${this.name}`
    }
}

let French = new language('French','France')
