import React, { useState } from "react";
import styled from "styled-components";

const NameExist = () => {
  const [loading, setLoading] = useState(false);

  return <div>구매 이력</div>;
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
