import Navbar from './Component/Navbar/Navbar'
import Header from './Component/Header/Header'
import Cards from './Component/Cards/Cards'
import Section from './Component/Section/Section'
import Frame from './Component/Frame/Frame'
import Partners from './Component/Partners/Partners'
import Become from './Component/Slider/Become/Become'
import Footer from './Component/Footer/Footer'
import DrawerAppBar from "./Component/SecoundNavbar/SecoundNavbar"
import Banner from './Component/Footer/Banner/Banner'
import Sidebar from "./Component/SideBar/Sidebar"
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Content from './Component/Content/Content'
import Main from './Component/Main/Main'
import Testimonial from './Component/Testimonial/Testimonial'
import Jobs from './Component/Jobs/Jobs'
import Dropdown from './Component/Dropdown/Dropdown'
import './App.css'
function App() {

  return (
    <>
   <BrowserRouter>
   
       
    
   
    <Routes>

    <Route path='/' element={ <> <Navbar/>   <Header/> <Cards/> <Frame/> <Section/> <Partners/> <Become/> <Footer/><Banner/> </>}/> 
    <Route path='/Signup' element={ <> <DrawerAppBar/>  <Sidebar/> </>}/> 
    <Route path='/AppstOre' element={ <> <DrawerAppBar/>  <Sidebar/>  <Content/>   </>}/> 
    <Route path='/Features' element={ <>  <DrawerAppBar/>  <Sidebar/>  <Testimonial/>   </>}/> 
    <Route path='/Job' element={ <>  <DrawerAppBar/>  <Sidebar/>  <Jobs/>  </>}/> 
    <Route path='/Dropdown' element={ <>  <DrawerAppBar/>  <Sidebar/> <Dropdown/> </>}/> 



    </Routes>
   </BrowserRouter>



   


  
    </>
  )
}

export default App
