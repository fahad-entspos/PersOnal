
    async function getWeather(city){

        let resp = await axios.get("http://api.weatherapi.com/v1/current.json?key=6129828d27af415ca8f141622221801&q="+city+"&aqi=no");
        weatherICON.src =  'http:'+resp.data.current.condition.icon
        document.getElementById('demo').innerHTML = "Temperature " + resp.data.current.temp_c + "<sup>o</sup> C"
        
        // axios.get("http://api.weatherapi.com/v1/current.json?key=6129828d27af415ca8f141622221801&q="+city+"&aqi=no").then((resp)=>{            
        //     weatherICON.src =  'http:'+resp.data.current.condition.icon
        //     console.log(resp.data.current.temp_c);            
        // });
        
    }
// 6129828d27af415ca8f141622221801 

// API, application programming interface
// ready made code 