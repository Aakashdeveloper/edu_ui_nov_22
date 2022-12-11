let url = "http://data.fixer.io/api/latest?access_key=10b816fb390183d161cc164e53490b9c";

//es5 call api

// function convert(){
//     let out = document.getElementById('out').value;
//     let amount = document.getElementById('amount').value;
//     //calling api with
//     fetch(url,{method:'GET'})
//     //return promises
//     .then((res)  => res.json())
//     // return data
//     .then((data) => {
//         let price = data.rates[out];
//         let final = (price * Number(amount)).toFixed(3)
//         let result = `Converted price of ${amount} Euro is ${final} ${out}`;
//         document.getElementById('output').innerText = result
//     })
// }

//es6  async await

const convert = async() => {
    let out = document.getElementById('out').value;
    let amount = document.getElementById('amount').value;
    let response = await fetch(url,{method:'GET'})
    let data = await response.json()
    let price = data.rates[out];
    let final = (price * Number(amount)).toFixed(3)
    let result = `Converted price of ${amount} Euro is ${final} ${out}`;
    document.getElementById('output').innerText = result
}
