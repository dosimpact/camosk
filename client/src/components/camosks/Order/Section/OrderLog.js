import React, { useState } from "react";
import styled from "styled-components";

const OrderLog = ({ name, onChange }) => {
  const [loading, setLoading] = useState(false);

  return (
    <Container>
      <div>얼굴을 인식시켜 주세요 구매 정보가 나옵니다.</div>
    </Container>
  );
};

export default OrderLog;

const Container = styled.div``;
