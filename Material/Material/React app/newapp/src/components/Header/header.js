import './header.css'

export function Header(){
    function alert1(){
alert("Its Alert")}
    return <h1>
    <img  src="pic.jpg" />

      Header Tag
      <br />
      <button onClick={alert1}>Click Me</button>
    </h1>
  }
export default Header;
