const axios = require("axios")
const api = "https://covid19.mathdro.id/api/countries";

async function detailsCovid(c){
    const response =await axios.get(`${api}/${c}`);
    console.log(response.data.deaths.value)

    return response.data.deaths.value
}

describe ('search for deaths' ,()=>{      //it takes a string which describe the test block and a call back function
    test('should return the total deaths',async ()=>{   //it describes action of specific test, a call backfunction containing expect function and a matcher
        expect(await detailsCovid("india")).toBe( 515102);   //expect function accepts the function invocation tested and to be has the expected result
    })
})