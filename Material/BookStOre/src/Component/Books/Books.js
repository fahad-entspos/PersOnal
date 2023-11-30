import React from 'react'
import { useSelector } from 'react-redux'
import Style from "./Books.module.css"
export default function Books() {
    let book = useSelector(function(item){
        return item.bookData
    })

        let sellingData = book.filter((item)=>{
          if (item.categore == "special"){
            return true
          }
        })
        console.log(sellingData);

  return (
    <>
    <div className={Style.main}>
{
  sellingData.map((item)=>{
    return <>
            <div className={Style.container}>
                       <img className={Style.img} src={item.img}  />
                       <p>{item.dec}</p>
                        <h2>{item.name}</h2>
                        <h4>{item.price}</h4>
            </div>
    </>
  })
}

    </div>
    {/* <div className={Style.btndiv}>

  <button className={Style.btn}>Shop All Books</button>

    </div> */}

   
    </>
  )
}
// .btn{
//   border: 2px solid black;
//   border-radius: 10px;
//   margin-top: 4rem;
//   padding-top: 4rem;

//   margin: auto;   padding: .8%; }


//   .btndiv{
//       margin: auto;
//       display: flex;
//   }