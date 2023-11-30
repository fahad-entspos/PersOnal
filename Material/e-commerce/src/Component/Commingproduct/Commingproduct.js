import React from "react";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import Style from "./Commingproduct.module.css";
export default function Commingproduct() {
  const list = [
    {
      title: "Iphone-14",
      img: "/coming/pic (6).jpg",
      price: "$995.50",
    },
    {
      title: "AirDots",
      img: "/coming/pic (12).jpg",
      price: "$49.00",
    },
    {
      title: "Smart-series-1",
      img: "/coming/pic (4).jpg",
      price: "$110.00",
    },
    {
      title: "Airpods",
      img: "/coming/pic (3).jpg",
      price: "$235.30",
    },
    {
      title: "Smart-series-3",
      img: "/coming/pic (5).jpg",
      price: "$315.70",
    },
    {
      title: "Smart-series-4",
      img: "/coming/pic (11).jpg",
      price: "$448.00",
    },
    {
      title: "Hp-9911",
      img: "/coming/pic (7).jpg",
      price: "$117.50",
    },
    {
      title: "Ipad",
      img: "/coming/pic (8).jpg",
      price: "$212.20",
    },
    {
      title: "MacBook",
      img: "/coming/pic (9).jpg",
      price: "$992.20",
    },
    {   
      title: "HeadPhone",
      img: "/coming/pic (10).jpg",
      price: "$312.20",
    },
  ];
  return (
    <>
      {
        <Grid.Container gap={1} justify="center ">
          {list.map((item, index) => (
            <Grid xs={8} sm={1.6} key={index}>
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
                    <Text b>{item.title}</Text>
                    <Text
                      css={{
                        color: "$accents7",
                        fontWeight: "$semibold",
                        fontSize: "$sm",
                      }}>
                      {item.price}
                    </Text>
                  </Row>
                </Card.Footer>
              </Card>
            </Grid>
          ))}
        </Grid.Container>
      }
    </>
  );
}
