const url = "http://3.17.216.66:4000"

const getCity = async() => {
    let response = await fetch(`${url}/location`,{method:'GET'});
    let data = await response.json();
    data.map((item) => {
        let element = document.createElement('option') //<option></option>;
        let data = document.createTextNode(item.state) //delhi
        element.appendChild(data); //<option>Delhi</option>
        element.value = item.state_id //<option value="1">Delhi</option>
        document.getElementById('city').appendChild(element)
        /**
         * <select>
         * <option value="1">Delhi</option>
         * </select>
        */
    })
}

const getRestaurants= async() => {
    let cityId = document.getElementById('city').value;
    let rest =  document.getElementById('restSelect')
    let response = await fetch(`${url}/restaurant?stateId=${cityId}`,{method:'GET'});
    while(rest.length > 0) {
        rest.remove(0)
    }
    let data = await response.json();
    data.map((item) => {
        let element = document.createElement('option')
        let data = document.createTextNode(`${item.restaurant_name}|${item.address}`)
        element.appendChild(data);
        rest.appendChild(element)
    })
}