import React, { useState } from "react";

import OrderP from "./OrderP";

import { ADMIN_PH } from "apis/config";
import { SMS } from "apis/notification";

const icons = [
  { name: "Burger", path: "svg/002-burger.svg" },
  { name: "hot dog", path: "svg/003-hot dog.svg" },
  { name: "fries", path: "svg/004-french fries.svg" },
  { name: "chicken", path: "svg/005-roast chicken.svg" },
  { name: "pizza", path: "svg/009-pizza.svg" },
  { name: "steak", path: "svg/020-steak.svg" },
  { name: "Desert", path: "svg/032-avocado.svg" },
  { name: "Beverage", path: "svg/036-mineral water.svg" },
];

const coffees_dummy = [
  {
    name: "아인슈페너 HOT",
    path: "/files/menu/IMG_1600305773256.png",
  },
  {
    name: "콜드브루 아인슈페너",
    path: "/files/menu/IMG_1600310535229.png",
  },
  {
    name: "골든바닐라슈페너",
    path: "/files/menu/IMG_1600316010129.png",
  },
  {
    name: "골든바닐라슈페너 ICED",
    path: "/files/menu/IMG_1600316075704.png",
  },
  {
    name: "이디야 사과 & 당근 주스",
    path: "/files/menu/IMG_1594686206508.jpg",
  },
  {
    name: "이디야 비트 & 오렌지 주스",
    path: "/files/menu/IMG_1594686391619.jpg",
  },
  {
    name: "블루코코 후룻치노",
    path: "/files/menu/IMG_1591605395331.png",
  },
  {
    name: "망고샤베트 빙수",
    path: "/files/menu/IMG_1589170672473.png",
  },
];

const coffeesSelected_dummuy = [
  {
    name: "아인슈페너 HOT",
    path: "/files/menu/IMG_1600305773256.png",
  },
  {
    name: "콜드브루 아인슈페너",
    path: "/files/menu/IMG_1600310535229.png",
  },
];

function OrderC({ className, name, ...props }) {
  // const [coffees] = useState(coffees_dummy);
  const [coffeesSelected, setCoffeesSelected] = useState(
    coffeesSelected_dummuy
  );

  const handle_resetCoffee = () => {
    setCoffeesSelected([]);
  };

  const handle_addCoffee = (index) => {
    console.log("handle_addCoffee");
    setCoffeesSelected((prev) => {
      if (coffeesSelected.length <= 3) {
        prev.push({ ...coffees_dummy[index] });
      }
      console.log(prev);
      return [...prev];
    });
  };
  const handle_deleteCoffe = (index) => {
    console.log("handle_deleteCoffe");
    setCoffeesSelected((prev) => {
      prev.splice(index, 1);
      console.log(prev);
      return [...prev];
    });
  };

  const handle_OrderNotification = async () => {
    console.log("setCoffeesSelected", coffeesSelected);
    let makeOrderList = `CAMOKS PAY 주문내역\n`;

    const listed = Array.from(coffeesSelected).reduce((store, e) => {
      console.log(e);
      store.push(e?.name);
      return store;
    }, []);
    makeOrderList += listed.join("\n");
    console.log("makeOrderList", makeOrderList);
    try {
      await SMS(makeOrderList, ADMIN_PH);
    } catch (error) {
      console.log("SMS 보내기 오류!", error);
    }
  };

  return (
    <>
      <OrderP
        icons={icons}
        coffees={coffees_dummy}
        coffeesSelected={coffeesSelected}
        className={className}
        handle_addCoffee={handle_addCoffee}
        handle_deleteCoffe={handle_deleteCoffe}
        handle_resetCoffee={handle_resetCoffee}
        handle_OrderNotification={handle_OrderNotification}
        name={name}
        {...props}
      />
    </>
  );
}

export default OrderC;
