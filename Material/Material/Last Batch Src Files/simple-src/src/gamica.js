
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

import Store from './store/store';

// store.dispatch({
//   type:"user_add"
// });

// let [open, setOpen] = useState(true);

// return <div>


//   <button onClick={()=>{
    
//     setOpen(!open);
    
//   }}
//   >Toggle HEading</button>

//   {open && <h1>yeh just heading h</h1>}


function Result(){

  let someData = useSelector(function(store){
      return store.userReducer;
  });

  let adsData = useSelector(function(store){
    return store.adReducer;
  })


  return <div>
     <h1> 
        {
          someData.name
        }
      </h1>
    <ol>
      {
        adsData.ads.map((ad)=>{
            return <li>{ad.name} {ad.price}</li>
        })
      }
    </ol>
    component chl vya
  </div>

}
export  function Parent(){

  return <>

<Provider store={store}>

  <Result></Result>

  
  <button onClick={()=>{

    let name = prompt("name enter karen");

    store.dispatch({
      type:"User_ADDED",
      abc:name,
      city:"FSD",
      coutnry:"Pakistan"
    });


  }}>Add User</button>


</Provider>
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