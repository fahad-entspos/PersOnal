import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
export default function Detailpage() {
  let { id } = useParams();
  let allData = useSelector((data) => data.cardData);
  const mainData = allData.filter((total) => {
    if (id == total.id) {
      return true;
    }
  });
  return (
    <>
       <div >
        {mainData.map((girl) => {
          return (
            <div>
              <img src={girl.img} alt="" />
              <h2>{girl.name}</h2>
              <h2>{girl.price}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
}
