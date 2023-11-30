
import './App.css';


import { Card1} from './components/cards/card';
import { Chart } from './components/charts/chart';
import { CountryPicker } from './components/countryPicker/countryPicker';
import {useState ,useEffect} from 'react'
import { fetchData } from './components/api'
// import ResponsiveGrid from './components/cards/card'


function App() {
  const [country, setCountry] = useState([]);

  const [data, setData] = useState([])

//   useEffect(() => {
//     const fetchAPI = async () => {
//         setData(await fetchData());
//     }
//     fetchAPI();

//  }, [])

  const  handleCountryChange = async (country)=> {
    // const fetchedData = await fetchData(country);        
    //   setCountry(country)
    //   setData(fetchedData)
    console.log(country);

  }

  return (
    <div className="container">
      {/* <ResponsiveGrid></ResponsiveGrid> */}
      <Card1/>
      {/* <CountryPicker handleCountryChange ={handleCountryChange}/> */}
      <Chart></Chart>
    </div>
  );
}

export default App;

