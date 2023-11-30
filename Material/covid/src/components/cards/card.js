// import axios from "axios"
import axios from "axios";
import { useEffect, useState } from "react"
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
import {Card,CardContent,Typography,Grid} from '@material-ui/core'
import styles from './Cards.module.css'
import CountUp from 'react-countup'
// import cx from 'classnames'
import cx from 'classnames'
import {fetchData} from '../api/index'


export function Card1() {
   
    let [data, setData] = useState([])
    


    const url = ' https://covid19.mathdro.id/api'


    useEffect(() => {
        //  const fetchApi = async()=>{
        //       setData (await fetchData())
        //  }
        //  fetchApi()


       async function getData() {
            // let ChangedURL = url;

            // // if (country) {
            // //     ChangedURL = `${url}/countries/${country}`
            // // }

            try {
                const response = await axios.get('https://covid19.mathdro.id/api')
                // const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get('https://covid19.mathdro.id/api')
                // let data = await response.json();
                // console.log({ confirmed, recovered, deaths, lastUpdate });
                console.log(response.data);
                // setData({ confirmed, recovered, deaths, lastUpdate })
                setData(response.data)
                // setConfrimed(response.data.confirmed)


            } catch (error) {
                console.log(error);

            }

        }
        getData();
       
    }, [])
    if(!data.confirmed){
        return 'loading...';
    }
    return <div className={styles.container}>
        
        
        <Grid container spacing ={3} justify ='center'>
            {/* <Grid item component ={Card} xs={12} md={3} className='infected'> */}
            <Grid item component ={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>;
                <CardContent>
                    <Typography color = 'textSecondary' gutterBottom> INFECTED</Typography>
                    <Typography variant ='h5'> 
                    <CountUp 
                    start ={0}
                    end ={data.confirmed.value}
                    duration ={2.5}
                    separator=","
                    />
                    </Typography>
                    <Typography color ='textSecondary'>{ new Date(data.lastUpdate).toDateString() }</Typography>
                    <Typography variant="body2"> Number of active cases of COVID-19</Typography>
                </CardContent>
            </Grid>
            <Grid item component ={Card}  xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                <CardContent>
                    {/* typography use for heading */}
                    <Typography color = 'textSecondary' gutterBottom> RECOVERD</Typography>
                    <Typography variant ='h5'>
                    <CountUp 
                    start ={0}
                    end ={data.recovered.value}
                    duration ={2.5}
                    separator=","
                    />
                    </Typography>
                    <Typography color ='textSecondary'>{ new Date(data.lastUpdate).toDateString() }</Typography>
                    <Typography variant="body2"> Number of recoveries from COVID-19</Typography>
                </CardContent>
            </Grid>
            <Grid item component ={Card}  xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                <CardContent>
                    <Typography color = 'textSecondary' gutterBottom> DEATHS</Typography>
                    <Typography variant ='h5'> 
                    <CountUp 
                    start ={0}
                    end ={data.deaths.value}
                    duration ={2.5}
                    separator=","
                    /></Typography>
                    <Typography color ='textSecondary'>{ new Date(data.lastUpdate).toDateString() }</Typography>
                    <Typography variant="body2"> Number of deaths caused by COVID-19</Typography>
                </CardContent>
            </Grid>
        </Grid>


    </div>

}
// }
