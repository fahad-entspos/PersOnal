import axios from 'axios'

const url = ' https://covid19.mathdro.id/api'

 export const fetchData = async (country) =>{
    let ChangedURL = url;
    if (country){
         ChangedURL = `${url}/countries/${country}`
    }


    // try {
    //     const response = await axios.get(url)
    //     // let data = await response.json()
    //     console.log(response.data);
    
    //     // return response;
        
    // } catch (error) {
    //     console.log(error);
        
    // }
}

export const fetchData = async (country) => {

    let ChangedURL = url;

    if (country) {
        ChangedURL = `${url}/countries/${country}`
    }
    try {


        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(ChangedURL);

        return  {confirmed, recovered, deaths, lastUpdate}        
    }
    catch (error) {
        console.log(error);
    }
}
export const fetchDailyData =async()=>{
    // debugger;
    try {


        // const {data} = await axios.get(`${url}/daily`) 
         
        const {data} = await axios.get("https://covid19.mathdro.id/api/daily") 
        // console.log(data);


        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
            recovered: dailyData.recovered
        }))

        return modifiedData; 
        console.log(modifiedData)
        
       
    } catch (error) {

        alert(error.message);
        return [];
        
    }
   
}


// export const fetchDailyData = async () => {
//     try {
//         const {data} = await axios.get(`${url}/daily`) 

//         const modifiedData = data.map((dailyData) => ({
//             confirmed: dailyData.confirmed.total,
//             deaths: dailyData.deaths.total,
//             date: dailyData.reportDate,
//             recovered: dailyData.recovered
//         }))

//         return modifiedData; 
//     } catch (error) {
//         console.log(error);
//     }
// }

export const fetchCountries = async() =>{
    try {
         const {data :{countries}} = await axios.get("https://covid19.mathdro.id/api/countries")
        //  console.log(response);
        return countries.map((country)=> country.name)
        
    } catch (error) {
    // console.log(error)
    return []
        
    }
}
