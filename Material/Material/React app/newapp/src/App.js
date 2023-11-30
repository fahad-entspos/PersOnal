// import logo from './logo.svg';
import './App.css';
// import Header from "./components/Header/header"
import Navbar from "./components/Navbar/Navbar"
// import Cards from "./components/Cards/card"
// import Footer  from  "./components/Footer/footer"
// import {Callculator} from "./components/Cal/cal"
import Signup from './components/Signup/Signup';
import Admin from './components/Admin/Admin';
import Createjob from './components/CreateJob/createjob';
import {useState} from "react"
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Alljob from './components/Alljob/Alljob';
import Detailjob from './components/Detailjobs/detailjob';

function App() {
  let [student,setStudents] = useState([]);
  let [jobs, setJobs] = useState([]);
  return <div>
      <BrowserRouter>
          <Navbar></Navbar>
         <Routes>
        <Route path='/abc' element={<Signup name={student} nameSetStudent={setStudents}></Signup>}/>
        <Route path='/users' element={<Admin name1={student} nameSetStudent1={setStudents}></Admin>}/>
        <Route path='/cre' element={<Createjob jobs={jobs} ></Createjob>}/>
        <Route path='/all' element={<Alljob jobs={jobs} ></Alljob>}/>
        <Route path='/detail' element={<Detailjob jobs={jobs} ></Detailjob>}/>
        
    
    
    </Routes>
    </BrowserRouter>
     </div>
}

export default App;
