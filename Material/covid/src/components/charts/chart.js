// import { useEffect,useState } from "react";
// import axios from 'axios';
// import {Line, Bar} from 'react-chartjs-2'
// // import {Line, Bar} from 'chart.js'
// import{fetchDailyData} from '../api/index'
// import styles from './chart.css'

// export function  Chart(){  

//     let [dailyData, setDailyData] = useState([]);

   

//     useEffect(() => {
//      const getDailyData =async() => {
//             setDailyData( await fetchDailyData());
            
//         }
//         console.log(dailyData);
//         getDailyData();
       
//     }, [])

//     // const lineChart = (
//     //     dailyData[0] ? (
//     //         <Line
//     //             data={{
//     //                 labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString()),
                    
//     //                 datasets: [{
//     //                     data: dailyData.map(({ confirmed }) => confirmed),
//     //                     label: 'Infected',
//     //                     borderColor: '#333ff',
//     //                     fill: true,
//     //                 },
//     //                  {
//     //                     data: dailyData.map(({ deaths }) => deaths),
//     //                     label: 'Deaths',
//     //                     borderColor: 'red',
//     //                     backgroundColor: 'rgba(255, 0, 0, 0.5)',
//     //                     fill: true,
//     //                 }
//     //                     , {
//     //                     data: dailyData.map(({ recovered }) => recovered),
//     //                     label: 'Recovered',
//     //                     borderColor: 'green',
//     //                     backgroundColor: 'rgba(0, 255, 0, 0.5)',
//     //                     fill: true,
//     //                 },
//     //                 ],
//     //             }}
//     //         />
//     //     ) : null


//     // )
//         // dailyData.length 
//         //  ? (<Line
//         // data ={{
//         //     labels:dailyData.map(({date})=> date),
//         //     datasets:[{ 
//         //        data:dailyData.map(({confirmed})=> confirmed),
//         //        label:'Infected',
//         //        borderColor:'#3333ff',
//         //        fill:true

//         //     },
                
//         //         {
//         //             data:dailyData.map(({deaths})=> deaths),
//         //             label:'Deaths',
//         //             borderColor:'red',
//         //             backgroundColor:'red',
//         //             fill:true   

//         //         }],
//         // }}/>): null


//     // )
//     let lineChart = (
//         dailyData.length != 0 ?(<Line 
//         data ={{
//             labels: dailyData.map(({date}) => date),
//             datasets: [{
//                 data: dailyData.map(({confirmed}) => confirmed),
//                 label: 'Infected', 
//                 borderColor: '#3333ff',
//                 fill:true,
//             },{
//                 data: dailyData.map(({deaths}) => deaths),
//                 label: 'Deaths', 
//                 borderColor: 'red',
//                 backgroundColor: 'rgba(255, 0, 0, 0.5)',
//                 fill:true,
//             }]
//         }}
//         />):null
//     )
//     return <div className = {styles.container}>
//         {lineChart}

    
//     </div>

// }
import React, { useEffect, useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';
import { fetchDailyData } from '../api/index';

 export const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
//  export const Chart = () => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        fetchAPI();

    }, [])

    const lineChart = (
        dailyData[0] ? (
            <Line
                data={{
                    labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString()),
                    datasets: [{
                        data: dailyData.map(({ confirmed }) => confirmed),
                        label: 'Infected',
                        borderColor: '#333ff',
                        fill: true,
                    }, {
                        data: dailyData.map(({ deaths }) => deaths),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        fill: true,
                    }
                        , {
                        data: dailyData.map(({ recovered }) => recovered),
                        label: 'Recovered',
                        borderColor: 'green',
                        backgroundColor: 'rgba(0, 255, 0, 0.5)',
                        fill: true,
                    },
                    ],
                }}
            />
        ) : null


    )
    console.log(confirmed, recovered, deaths)
    // const barChart = (
    //     confirmed
    //         ? (
    //             <Bar
    //                 data={{
    //                     labels: ['Infected', 'Recovered', 'Deaths'],
    //                     datasets: [
    //                         {
    //                             label: "People",
    //                             backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
    //                             data: [confirmed.value, recovered.value, deaths.value],
    //                         }
    //                     ],
    //                 }}
    //                 options={{
    //                     legend: { display: false },
    //                     title: { display: true, text: `Current state in ${country}` },
    //                 }}
    //             />
    //         ) : null
    // );

    return (
        <div className={styles.container}>
            {/* {country ? barChart : lineChart} */}
            {lineChart}
        </div>
    )
}

// export default Chart;