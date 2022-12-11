//es5
//let myObj = require('./first');
//es6
import myObj from './first'

console.log(myObj.user)
//[ { name: 'Alivn', city: 'Boston' }, { name: 'Nikita', city: 'Pune' } ]

console.log(myObj.dbQuery.find('Students'))
//Select * from Students