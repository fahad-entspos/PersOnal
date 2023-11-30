import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Banner from './Component/Banner/Banner';
import Header from './Component/Header/Header';
import Signup from './Component/Signup/Signup';
import Images from './Component/Images/Images';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import BestSelling from './Component/BestSelling/BestSelling';
import Category from './Component/Category/Category';
import About from './Component/About/About';
import Footer from './Component/Footer/Footer';
import Detailpage from './Component/Detailpage/Detailpage';
import Commingproduct from './Component/Commingproduct/Commingproduct';
import Contact from './Component/Contact/Contact';
import Login from './Component/Login/Login';
import Sidebar from './Component/Sidebar/Sidebar';
import Products from './Component/Products/Products';
import Addtocart from './Component/Addtocart/Addtocart';
import Countdown from './Component/Countdown/Countdown';
function App() {
  return (
   <>


   <BrowserRouter> 
    <Banner/>
   <Navbar/>   
    <Routes> 
  <Route path="/" element={<>  <Header/> <Category/>   <BestSelling/>          <Countdown/> <Commingproduct/>      <Images/>    </>}/> 
    <Route path='/Signup' element={ <Signup/>}/> 
   <Route path='/Contact' element={ <Contact/>}/> 
   <Route path='/About' element={  <About/>}/> 
   {/* <Route path='/Login' element={  <Login/>}/>   */}
   <Route path='/Products' element={  <Products itemsPerPage={6}/>}/>  
   <Route path='/Detailpage/:id' element={  <Detailpage/>}/>  
   <Route path='/Addtocart' element={  <Addtocart/>}/>  
   </Routes>
<Footer/>
   </BrowserRouter>
   </>
  );
} 

export default App;
