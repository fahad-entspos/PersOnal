
import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom';
import './App.css';
import Header from './components/header/header';

import Dashboard from './components/dashboard/dashboard';
import Signup from './components/signup/signup';
import Login from './components/login/login';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Edit from './components/edit/edit'

import Player from './components/player/player';
import Video from './components/videoTile/videoTile';
import { refType } from '@mui/utils';
import { Provider, useSelector } from 'react-redux';

import store from './store/store';

// let [open, setOpen] = useState(true);

// return <div>


//   <button onClick={()=>{
    
//     setOpen(!open);
    
//   }}
//   >Toggle HEading</button>

//   {open && <h1>yeh just heading h</h1>}


function Result(){

  let some = useSelector(function(myStore){
      return myStore.userSection;
  });


  return <div>
    <ol>
      {
        some.map((item)=>{
          return <li>{item}</li>
        })
      }
    </ol>
    component chl vya
  </div>

}

export  function Parent(){

  let videos = [
    {id:"9wBhTaJLxM4", title:"Disney Palak Pe Jhalak | Episode 2 | Mother Dearest | Disney Channel"},
    {id:"LDMfA7oJpqE", title:"Disney Palak Pe Jhalak | Episode 16 | Disney Channel | Teacher Class"},
    {id:"zc5W9qS4eMA", title:"Disney Palak Pe Jhalak | Episode 3 | Nysha's Love is so Low Class | Disney Channel"},
    {id:"d43hAb8yrI0", title:"Cheb Khaled Didi Original"},
    {id:"Stkx7UrtiBs", title:"Girlfriend : Jass Manak (Official Video) Satti Dhillon | Snappy | GK DIGITAL | Geet MP3"},
  ];

  let [search, setSearch] = useState('');

  let [loginHogya, setLoginHogya] = useState(false);
  let [users, setUsers] = useState([]);

  return <>


  <Provider store={store}></Provider>

   {/* <BrowserRouter>
     <Header setLoginHogya={setLoginHogya} loginHogya={loginHogya}></Header>

     <Routes>

       <Route path="/:user" element={<Dashboard users={users} />} />
      
       <Route path="/dashboard" element={<Dashboard users={users} />} />
       <Route path="/login" element={<Login setLoginHogya={setLoginHogya} users={users} />} />
       <Route path="/signup" element={<Signup setUsers={setUsers} users={users} />} />
       <Route path="/edit/:userKaName" element={<Edit setUsers={setUsers} myUsers={users} />} />
      
    
      
     </Routes>
  
   </BrowserRouter> */}

{/* 
  <BrowserRouter>

  <input onChange={(myEvent)=>{

    setSearch(myEvent.target.value);

  }} />

  <Routes>
    <Route path='/play/:playID' element={<Player />}></Route>
   
    <Route path='/' element={ 
          <div className='flex'>
                {
                  videos.filter((video)=>{

                    if(video.title.toLowerCase().includes(search.toLowerCase())){
                      return true;
                    }

                  }).map((video)=>{
                    return <Video {...video}></Video>
                  })
                }
          </div>} />

          </Routes>
  </BrowserRouter>*/}
  </> 

  // <div>
  //   <BrowserRouter>

  //     <Header setLoginHogya={setLoginHogya} loginHogya={loginHogya}></Header>

  //     <Routes>

  //       <Route path="/:user" element={<Dashboard users={users} />} />
        
  //       <Route path="/dashboard" element={<Dashboard users={users} />} />
  //       <Route path="/login" element={<Login setLoginHogya={setLoginHogya} users={users} />} />
  //       <Route path="/signup" element={<Signup setUsers={setUsers} users={users} />} />
  //       <Route path="/edit/:userKaName" element={<Edit setUsers={setUsers} myUsers={users} />} />
        
  //       {/* <Route path="/result/:province/:city/:uni" element={<Result />} /> */}
      
        
  //     </Routes>
    
  //   </BrowserRouter>
  //   <ToastContainer />
  // </div>

}