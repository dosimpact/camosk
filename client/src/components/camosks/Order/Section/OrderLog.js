import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { getOrderWithUserName } from "apis/orders";

const NameExist = ({ nameEN }) => {
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
      {!loading && <div>{JSON.stringify(order)}</div>}
    </div>
  );
};

const NameNonExist = () => {
  return <div>얼굴을 인식시켜 주세요 구매 정보가 나옵니다.</div>;
};

const OrderLog = ({ nameEN, onChange }) => {
  console.log("OrderLog", nameEN);

  return (
    <Container>
      {nameEN ? <NameExist nameEN={nameEN} /> : <NameNonExist />}
    </Container>
  );
};

export default OrderLog;

const Container = styled.div``;
