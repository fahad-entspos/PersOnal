import logo from "./logo.svg";
import "./App.css";

import { Provider } from "react-redux";
import Header from "./Components/header/header"
import Balance from "./Components/balance/balance"
import History from "./Components/History/history"
import Transactionform from "./Components/Transactionform/transactionform"
// import meraStore from "/"
import meraStore from "./store/store";




function App() {
  

  return (
    <div>
      <Provider store={meraStore}>
      <Header />
      <Balance></Balance>
      <History></History>
     
        <Transactionform></Transactionform>
        </Provider> 


    
    </div>
  );
}

export default App;
