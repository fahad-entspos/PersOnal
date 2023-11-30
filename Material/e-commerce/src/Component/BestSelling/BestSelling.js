import React from "react";
import Style from "./BestSelling.module.css";
import { Card, Grid, Row, Text , Col ,Button } from "@nextui-org/react";
import { XMarkIcon } from '@heroicons/react/20/solid'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import { wrap } from "framer-motion";
export default function BestSelling() {
  let home = useSelector((store) => store.Data);
  let carddata = home.filter((data)=>{
    if (data.page== "home"){
      return true
    }
  })
  return (
    <>
  <h1 className={Style.Best}>Best Product</h1>

<div   className={Style.main} >
{
       <Grid.Container gap={1} justify="center ">
       {carddata.map((item, index) => (
         <Grid xs={8} sm={1.6} key={index}>
           <Link to={`/Detailpage/${item.id}`}>
           <Card isPressable>
             <Card.Body css={{ p: 0 , m:0 }}>
               <Card.Image
                 src={item.img}
                 objectFit="cover"
                 width="100%"
                 height={160}
                 alt={item.title}
               />
             </Card.Body>
             <Card.Footer css={{ justifyItems: "flex-start" }}>
               <Row wrap="wrap" justify="space-between" align="center">
                 <Text b>{item.name}</Text>
                 <Text
                   css={{
                     color: "$accents7",
                     fontWeight: "$semibold",
                     fontSize: "$sm",
                   }}>
                   {item.prize}
                 </Text>
               </Row>
             </Card.Footer>
           </Card>
           </Link>
         </Grid>
       ))}
     </Grid.Container>
      }
</div>
    </>
  );
}
