import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { getOrderWithUserName } from "apis/orders";
import OrderNameExistP from "./OrderNameExistP";

import { coffeesSelected_dummuy, coffees_dummy } from "./OrderData";

import {
  VideoCameraAddOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  CheckOutlined,
  CloseOutlined,
} from "@ant-design/icons";

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
    <>
      {loading && <div>로딩중</div>}
      {!loading && (
        <OrderNameExistP
          order={order}
          handle_setCoffe={handle_setCoffe}
          personInfo={personInfo}
        />
      )}
    </>
  );
};

const NameNonExist = () => {
  return (
    <div className="row header">
      <div className="headerItem">
        얼굴을 인식시켜 주세요 구매 정보가 나옵니다.
      </div>
      <div className="headerItem">
        CAMOSK <VideoCameraAddOutlined />
      </div>
      <div className="headerItem">
        <ShoppingCartOutlined />
      </div>
    </div>
  );
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

const Container = styled.div`
  min-height: 400px;
  & .row {
    min-height: 400px;
    height: 100%;
    border-bottom: 1px solid #e6e6e6;
  }

  & .header {
    padding: 20px;
    display: flex;
    flex-grow: row nowrap;
    justify-content: space-between;
    align-items: center;
    font-size: 27px;
    & .headerItem {
      cursor: pointer;
      &:hover {
        opacity: 0.7;
      }
    }
  }
`;
