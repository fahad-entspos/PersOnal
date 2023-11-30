import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AiFillDelete } from 'react-icons/ai';

import { useEffect } from "react";
import Style from "./Addtocart.module.css";
import { useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
export default function Addtocart() {
  const [subtotal, setsubtotal] = useState(0);
  let home = useSelector((store) => store.AddtocartData);

  useEffect(() => {
    let total = 0;
    home.forEach((element) => {
      total += element.subtotal;
      console.log(total);
      setsubtotal(total);
    });
  }, [subtotal]);

  let dispatch = useDispatch();

  let deleteData = (item) => {
    dispatch({
      type: "DELETE-DATA",
      payload: item,
    });
  };

  return (
        <div className={Style.full}>
    <>
      {home.map((item, index) => {
        return ( 
          
            <Table>
              <Thead>
                <Tr>
                  <Th>IMAGE</Th>
                  <Th>NAME</Th>
                  <Th>PRICE</Th>
                  <Th>QNTY</Th>
                  <Th>DELETE</Th>
                  <Th>Total</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td className={Style.tab}>
                    {" "}
                    <img className={Style.imggg} style={{ width: "120px",}}
                     src={item.img} />
                  </Td>
                  <Th> {item.name} </Th>
                  <Th>{item.prize} </Th>
                  <Th>{item.qnty} </Th>
                  <Th>
                    {" "}
                    <button
                      onClick={() => {
                        setsubtotal(item.subtotal- item.subtotal);
                        deleteData(item);

                      }}>
                        <AiFillDelete   className={Style.icon}   />
                    </button>
                  </Th>
                  <Th>{item.subtotal} </Th>
                </Tr>
              </Tbody>
            </Table>
        )
      })}
      
      <h2  className={Style.Total} >Total : {subtotal}</h2>
    </>
          </div>

  );
}

