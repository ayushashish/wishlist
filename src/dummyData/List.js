import React from "react";
import "../components/ListComponent";
import ListComponent from "../components/ListComponent";

const List = () => {
  const ITEMS = [
    {
      id: "i1",
      name: "Frederique Constant Flyback Chronograph Manufacture",
      image:
        "https://cdn.shopify.com/s/files/1/0264/6605/8287/products/FC-760NS4H6_590x.png?v=1594019209",
      alt: "Flyback Chronograph Manufacture",
      price: "CHF 3995",
      description: "Automatic movement with Flyback Chrono",
    },
    {
      id: "i2",
      name: "Seiko Prospex SNR049J1",
      image:
        "https://storage.seikowatches.com/image/2020/10/19200442548914/0/SNR049J1.png",
      alt: "Seiko Prospex SNR049J1",
      price: "INR 430000",
      description: "GMT watch with Spring Drive caliber 5R66",
    },
    {
      id: "i3",
      name: "Seiko Presage Automatic Watch - SSA405J1",
      image:
        "https://seikowatches.cdn.imgeng.in/s/files/1/0322/8424/6155/products/SSA405J1-1_600x.png?v=1593774792",
      alt: "Seiko Presage SSA405J1",
      price: "INR 39000",
      description: "Automatic with manual winding capacity Calibre 4R38",
    },
  ];

  return <ListComponent items={ITEMS}></ListComponent>;
};

export default List;
