import './App.css';
import Mens from './Component/Mens/Mens';
import Girl from './Component/Girls/Girls';
import Kids from './Component/Kids/Kids';
import Special from './Component/Special/Special';
import Slider from "./Component/Slider/Slider";
import ResponsiveAppBar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import Detailpage from './Component/Detailpage/Detailpage';
import { BrowserRouter , Routes , Route} from 'react-router-dom';
function App() {
  return <>


  <BrowserRouter>
  <ResponsiveAppBar/>
  <Routes>
<Route path='/' element={<>   <Slider/> <Special/>    </>  }/>
<Route path='/Mens' element={  <Mens/>  }/>
<Route path='/Girls' element={  <Girl/>  }/>
<Route path='/Kids' element={  <Kids/>  }/>
<Route path='/Detailpage/:id' element={  <Detailpage/>  }/>
  </Routes>
  <Footer/>
</BrowserRouter>
  </>
}

export default App;
