regex> regular expressions
(pattern matching)

^$

// if pattern match it will return array else null

var a = "hi"
a.match("^([a-z])$")
null

var a = "hi"
a.match("^([a-z]{2})$")
(2) ['hi', 'hi', index: 0, input: 'hi', groups: undefined]

var a = "h"
a.match("^([a-z]{2})$")
null

var a = "h"
a.match("^([a-z])$")
(2) ['h', 'h', index: 0, input: 'h', groups: undefined]

a.match("^([A-Z]{2})$")
null

//range 2 to 5
var a = "Hi"
a.match("^([a-zA-Z]{2,5})$")
(2) ['Hi', 'Hi', index: 0, input: 'Hi', groups: undefined]
var a = "Hii"
a.match("^([a-zA-Z]{2,5})$")
(2) ['Hii', 'Hii', index: 0, input: 'Hii', groups: undefined]

// any length
var a = "Hii"
a.match("^([a-zA-Z]+)$")
(2) ['Hii', 'Hii', index: 0, input: 'Hii', groups: undefined]
var a = "Hii"
a.match("^([a-zA-Z0-9$]+)$")
(2) ['Hii', 'Hii', index: 0, input: 'Hii', groups: undefined]

var b = 9876543210
b.match("^([0-9]{10})$")
VM181:2 Uncaught TypeError: b.match is not a function
    at <anonymous>:2:3
(anonymous) @ VM181:2

var b = 9876543210
b.toString().match("^([0-9]{10})$")
(2) ['9876543210', '9876543210', index: 0, input: '9876543210', groups: undefined]


var email = "a@a.com";
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")


var email = "a@a.com";
email.match("^([a-zA-Z0-9]+)@(gmail|yahoo)\.([a-zA-Z]{2,5})$")