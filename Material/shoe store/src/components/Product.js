import Shoes from './../shoes.json'
import { Link } from "react-router-dom";

export default(()=>{
    console.log(Shoes);

    return <>
   {/* <h1>This is Product</h1> */}
   <div className='productContainer'>
       {Object.keys(Shoes).map((keyName)=>{
           const shoe = Shoes[keyName];
           return  <Link key={keyName} className="div" to={`/product/${keyName}`}>
               <h5>{shoe.name}</h5>
               <img src={shoe.img} height={250} />
               
           </Link>
            
           
       })}
   </div>

    </>
})