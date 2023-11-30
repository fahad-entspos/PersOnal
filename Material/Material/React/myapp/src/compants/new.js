 function Manage(props){
   return <div>
     <h1>{props.name}</h1>
     <h2>{props.n.city}</h2>
     <ol>
       {
         props.a1.map((fadi)=>{
           return <li>{fadi}</li>
         })
       }
     </ol>
   </div>
   
 }







export function Cities(){
  
    let cities = ["FSD", "LHR", "MUL","isb"];
  
    return <div>
      <Manage a1={cities} name="fahad" n={{city:"Fsd"}}></Manage>
    </div>;
  
  }