import logo from './logo.svg';
import './App.css';
import Header from './components/header/header'

import 'react-notifications/lib/notifications.css';

import NotificationContainer from 'react-notifications/lib/NotificationContainer';

import Signup from './components/signup/signup';
import Admin from './components/admin/admin';
import { useRef, useState } from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Login from './components/login/login';

import Jobs from './components/jobs/jobs';
import JobDetails from './components/jobDetails/jobDetails';

import PostJob from './components/postJob/postJob';

// component oriented programming

function Dish(props){

  return <tr>
    {/* <td>
      {
        props.fruits.map(function(item){
          return item;
        })
      }
    </td> */}
  <td>{props.data.name}</td>
  <td>{props.data.price}</td>
  <td>
    <input onChange={(evt)=>{

    props.data.orderHogyi = evt.target.checked;

    }} type="checkbox" /> 
  </td>
</tr>

}

function Child(props){

  return <div>
    <button onClick={function(){

    let nums = props.myNum;
    nums++;
    
    props.p1(nums);


    }}>Add Number</button>
  </div>

}


function Result(props){

  let some = useParams();

  console.log(some);

   return <div>
     <h1>{some.province} {some.university} {some.department}</h1>
   </div>

}

function App() {
  
  let [students, setStudents] = useState([]);
  let [jobs, setJobs] = useState([]);
  

  return <>

  <BrowserRouter>

  <Header />


  <Routes>

    <Route path='/abc' element={ <Signup abc={students} setStudents={setStudents} /> } />
    <Route path='/users' element={ <Admin abc1={students} setStudents={setStudents} /> } />
    <Route path='/login' element={ <Login abc1={students} setStudents={setStudents} /> } />
    <Route path='/post-job' element={ <PostJob jobs={jobs} /> } />
    <Route path='/jobs' element={ <Jobs jobs={jobs} /> } />
    <Route path='/job-details/:cid' element={ <JobDetails jobs={jobs} /> } />
    
  <Route path="/result/:province/:university/:department" element={<Result />  } />


    {/* <Route path='/khurram.raheel.37' element={ <Jobs jobs={jobs} /> } />
    <Route path='/husnain4.5' element={ <Jobs jobs={jobs} /> } />
    <Route path='/zeeshan' element={ <Jobs jobs={jobs} /> } /> */}

    
  </Routes>


      <div className="myAppContainer" >


     
       {/* <Signup abc={students} setStudents={setStudents} />
      <Admin  abc1={students} setStudents={setStudents} />  
   
         */}
      </div>
      <NotificationContainer />
      </BrowserRouter>
    </>
  
}


export default App;
