import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { getOrderWithUserName } from "apis/orders";
import OrderNameExistP from "./OrderNameExistP";

import { coffeesSelected_dummuy, coffees_dummy } from "./OrderData";

const NameExist = ({ nameEN, handle_setCoffe, personInfo }) => {
  const [loading, setLoading] = useState(false);

  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const result = await getOrderWithUserName(nameEN);
      setOrder(result?.data?.order);
      setLoading(false);
    };
    fetchData();
    return () => {};
  }, [nameEN, setLoading]);

  return (
    <div className="logContainer">
      <div className="header">구매 이력</div>
      {loading && <div>로딩중</div>}
      {!loading && (
        <OrderNameExistP
          order={order}
          handle_setCoffe={handle_setCoffe}
          personInfo={personInfo}
        />
      )}
    </div>
  );
};

const NameNonExist = () => {
  return <div>얼굴을 인식시켜 주세요 구매 정보가 나옵니다.</div>;
};

const OrderLog = ({ handle_setCoffe, nameEN, personInfo }) => {
  console.log("OrderLog", nameEN);

  return (
    <Container>
      {nameEN ? (
        <NameExist
          nameEN={nameEN}
          handle_setCoffe={handle_setCoffe}
          personInfo={personInfo}
        />
      ) : (
        <NameNonExist />
      )}
    </Container>
  );
};

export default OrderLog;

const Container = styled.div``;
