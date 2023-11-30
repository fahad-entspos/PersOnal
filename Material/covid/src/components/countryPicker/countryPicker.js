import {useState,useEffect} from 'react'
import {NativeSelect,FormControl} from "@material-ui/core"
import styles from './countryPicker.css'
import {fetchCountries} from '../api/index'

export function CountryPicker( {handleCountryChange}){
    const [countries ,setCountries] = useState([])

    useEffect(()=>{
        const fetchApi = async() =>{

            setCountries( await fetchCountries())

        }
        fetchApi();
    },[setCountries])
    return <div>
       <FormControl className= {styles.formControl}>
           <NativeSelect defaultValue="" onChange ={(event)=>{handleCountryChange(event.target.value)}}>
               <option value ='global'>Global</option>
               {countries.map((country,i)=> 
               <option key ={i} value ={country}>{country}</option>)}
               


           </NativeSelect>
       </FormControl>
    </div> 
    }
