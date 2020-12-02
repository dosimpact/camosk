import React from "react";
import {
  CoffeeOutlined,
  ShoppingCartOutlined,
  WifiOutlined,
  UserOutlined,
  UsbOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import styled from "styled-components";

const OrderHeader = () => {
  return (
    <Wrapper>
      <div className="row header">
        <div className="headerItem">
          <CoffeeOutlined className="icon" />
          <WifiOutlined className="icon" />
          <UserOutlined className="icon" />
          <UsbOutlined className="icon" />
          <SyncOutlined className="icon" />
        </div>
        <div className="headerItem">CAMOSK CAFE</div>
        <div className="headerItem">
          <ShoppingCartOutlined />
        </div>
      </div>
    </Wrapper>
  );
};

export default OrderHeader;

const Wrapper = styled.div`
  & .row {
    border-bottom: 1px solid #e6e6e6;
  }

  & .header {
    padding: 20px;
    display: flex;
    flex-grow: row nowrap;
    justify-content: space-between;
    align-items: center;
    font-size: 27px;
    width: 100%;
    & .headerItem {
      width: 33%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover {
        opacity: 0.7;
      }
      & .icon {
        font-size: 15px;
        margin-right: 3px;
      }
    }
    & .headerItem:nth-child(1) {
      display: flex;
      justify-content: flex-start;
    }
    & .headerItem:nth-child(3) {
      display: flex;
      justify-content: flex-end;
    }
  }
`;
