import { useParams } from "react-router-dom"
import Shoes from './../shoes.json'
export default(()=>{
     let {id}= useParams();
     const shoe = Shoes[id];
     if(!shoe){
        return <h1>Product Not Found</h1>
     }
     console.log(shoe);
    return <>
   {/* <h1>This is Product Items </h1> */}
   <div  className="productItem" >
               <h4>{shoe.name}</h4>
               <img src={shoe.img} height={450} />
           </div>
    </>
})