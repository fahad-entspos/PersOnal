import logo from "./logo.svg";
import "./App.css";
import Header from "./Component/Header/Header";
import About from "./Component/About/About";
import Myskils from "./Component/Myskils/Myskils";
import Award from "./Component/Award/Award";
import Navbar from "./Component/Navbar/Navbar";
import Client from "./Component/Client/Client";
import Footer from "./Component/Footer.js/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Header />
        <Myskils />
        <About />
        <Routes>
          <Route path="/Header" element={<Header />} />
          <Route path="/Myskils" element={<Myskils />} />
          <Route path="/About" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
