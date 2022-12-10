Map
> map is use to iterate over the Array
> it always return the same length of output array as input
> it is use to apply logic (add,sub,mul,div)

var a = [4,5,67,43,87,12,34,28,83,49]

a.map((data) => {return data*2})
 [8, 10, 134, 86, 174, 24, 68, 56, 166, 98]

var a = [4,5,67,43]
a.map((data) => {return `<p>${data}</p>`})
['<p>4</p>', '<p>5</p>', '<p>67</p>', '<p>43</p>']


filter
> filter is use to filter out the values
> it may or may not return same length of output as input Array
> it only return those for which condition is true

var a = [4,5,67,43,87,12,34,28,83,49]
a.filter((data) => {return data>30})
[67, 43, 87, 34, 83, 49]

a.map((data) => {return data>30})
[false, false, true, true, true, false, true, false, true, true]