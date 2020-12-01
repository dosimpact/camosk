import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { getOrderWithUserName } from "apis/orders";

const NameExist = ({ name }) => {
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const res = await getOrderWithUserName(name);
      setData(res);
      console.log("res", res);
      setLoading(false);
    };
    fetchData();
    return () => {};
  }, [name, setLoading]);

  return (
    <div className="logContainer">
      <div className="header">구매 이력</div>
      {loading && <div>로딩중</div>}
      {!loading && <div>{data}</div>}
    </div>
  );
};

const NameNonExist = () => {
  return <div>얼굴을 인식시켜 주세요 구매 정보가 나옵니다.</div>;
};

const OrderLog = ({ name, onChange }) => {
  console.log("OrderLog", name);

  return (
    <Container>{name ? <NameExist name={name} /> : <NameNonExist />}</Container>
  );
};

export default OrderLog;

const Container = styled.div``;
