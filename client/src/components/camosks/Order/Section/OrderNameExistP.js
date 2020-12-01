import React from "react";
import styled from "styled-components";

/**
 * @param {{id: "101", name: "김도영", cause: "불명", term: "2020-07-01~2020-12-31", address: "대한민국 경기도 용인시 수지구 동천동 13"}
address: "대한민국 경기도 용인시 수지구 동천동 13"
cause: "불명"
id: "101"
name: "김도영"
term: "2020-07-01~2020-12-31"} param0 
 */

const OrderNameExistP = ({ order, handle_setCoffe, personInfo }) => {
  console.log(order);
  console.log(personInfo);

  return <Container>{JSON.stringify(order)}</Container>;
};

export default OrderNameExistP;

const Container = styled.div``;
