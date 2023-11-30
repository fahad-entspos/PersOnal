import Styles from "./Products.module.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector } from "react-redux";
import { Card, Grid, Row, Text , Col ,Button } from "@nextui-org/react";
import { FaGreaterThan } from 'react-icons/fa';
import { FaLessThan } from 'react-icons/fa';
import ReactPaginate from 'react-paginate';
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
export default function Products({itemsPerPage}) {
  let home = useSelector((store) => store.Data)
  let   carddata = home.filter((data) => {
    if (data.page == "product") {
      return true;
    }
  });

  const [data,setData]=useState([])
  useEffect(()=>{

    setData(carddata)
  },[])

  function Items({ currentItems }) {
    return (
      <>


<section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-slate-100">Enjoy Your Shoping
              <br className="hidden lg:inline-block" /> Celebration Now Guys
            </h1>
            <p className="mb-8 leading-relaxed text-slate-100">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant <br/> cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot <br/> chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
            </div>
          </div>
            
          <video width="750" height="500" rounded  autoPlay muted controls src="video1.mp4" />

          
        </div>
      </section>



            <div className={Styles.productcontainer}>
        {currentItems &&
          currentItems.map((item) => (
            <Link to={`/Detailpage/${item.id}`} className={Styles.card}>
            <div className={Styles.imgBox}>
              <img src={item.img} alt="mouse corsair" className={Styles.mouse} />
            </div>
            <div className={Styles.contentBox}>
              <h3>VIRTUOSO RGB WIRELESS</h3>
              <h2 className={Styles.price}>{item.prize}<small>.99</small>$</h2>
              <a href="#" className={Styles.buy}>Buy Now</a>
            </div>
          </Link>
          ))}
          </div>
      </>
    );
  }
 
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = data.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(data.length / itemsPerPage);
  
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % data.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    }
  return (
   <>
<Items currentItems={currentItems} />
<div  className={Styles.main}>    
        <ReactPaginate
          breakLabel="..."
          nextLabel={aitsham()}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel={fahad()}
          renderOnZeroPageCount={null}
          className={`${Styles.one}  `}
              pageLinkClassName={`${Styles.two}`}
              activeLinkClassName={`${Styles.four}`}
        />

      </div>

   </>
  )
}

const aitsham = ()=>{
  return <FaGreaterThan/>
}
const fahad = ()=>{
  return <FaLessThan/>
}