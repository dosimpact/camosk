import React, { useState } from "react";

import OrderP from "./OrderP";

import { ADMIN_PH } from "apis/config";
import { SMS } from "apis/notification";
import OrderLog from "components/camosks/Order/Section/OrderLog";

import {
  coffeesSelected_dummuy,
  coffees_dummy,
  icons,
} from "./Section/OrderData";

function OrderC({ className, nameEN, personInfo, ...props }) {
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
  const handle_setCoffe = (arr) => {
    console.log("handle_setCoffe", arr);
    const parsedCoffee = arr
      ?.map((e) => parseInt(e))
      .map((index) => ({ ...coffees_dummy[index] }));
    console.log(parsedCoffee);
    setCoffeesSelected(parsedCoffee);
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
      <OrderLog
        handle_setCoffe={handle_setCoffe}
        nameEN={nameEN}
        personInfo={personInfo}
      />
      <OrderP
        icons={icons}
        coffees={coffees_dummy}
        coffeesSelected={coffeesSelected}
        className={className}
        handle_addCoffee={handle_addCoffee}
        handle_deleteCoffe={handle_deleteCoffe}
        handle_resetCoffee={handle_resetCoffee}
        handle_OrderNotification={handle_OrderNotification}
        {...props}
      />
    </>
  );
}

export default OrderC;
