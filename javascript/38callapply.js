let person = {
    fullName: function(city,country){
        return this.firstName + ' ' + this.lastName+" "+city+" "+country
    }
}

let john = {
    firstName:'John',
    lastName:'Dave'
}

erson.fullName.call(john,'Delhi','India')
'John Dave Delhi India'

person.fullName.apply(john,'Delhi','India')
VM79:1 Uncaught TypeError: CreateListFromArrayLike called on non-object
    at <anonymous>:1:17
(anonymous) @ VM79:1

person.fullName.apply(john,['Delhi','India'])
'John Dave Delhi India'

person.fullName.call(john,['Delhi','India'])
'John Dave Delhi,India undefined'