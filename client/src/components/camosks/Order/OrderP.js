import React from "react";
// import WeatherC from "../../Weather/WeatherC"
// import ClockC from "../../Clock/ClockC";
// import NewsC from '../../News/NewsC';

import styled from "styled-components";
import {
  VideoCameraAddOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  CheckOutlined,
  CloseOutlined,
} from "@ant-design/icons";

function OrderP({
  icons,
  coffees,
  coffeesSelected,
  className,
  handle_addCoffee,
  handle_deleteCoffe,
  handle_resetCoffee,
  handle_OrderNotification,
}) {
  return (
    <Container className={className}>
      <Wrapper>
        {/* <div className="row header">
          <div className="headerItem">
            <HomeOutlined className="icon" />
          </div>
          <div className="headerItem">
            CAMOSK <VideoCameraAddOutlined />
          </div>
          <div className="headerItem">
            <ShoppingCartOutlined />
          </div>
        </div> */}

        <div className="row category">
          {icons.map((e, idx) => {
            return (
              <div className="categoryItem">
                <img
                  className="icon"
                  src={process.env.PUBLIC_URL + e.path}
                  alt="categoryItem"
                />
                <span>{e.name}</span>
              </div>
            );
          })}
        </div>
        <div
          className="temp"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          {/* <WeatherC />
          <ClockC />
          <NewsC /> */}
        </div>
        <div className="row SelectMenu">
          {coffees.map((e, idx) => {
            return (
              <div
                onClick={() => {
                  handle_addCoffee(idx);
                }}
                key={idx}
                className="SelectMenuItem"
              >
                <img
                  className="icon"
                  src={"https://ediya.com" + e.path}
                  alt="SelectMenuItem"
                />
                <span className="content">{e.name}</span>
              </div>
            );
          })}
        </div>
        <div className="row order">
          <div className="column">
            <div className="Choice">My Choice</div>
            <div className="ChoiceList">
              {coffeesSelected.map((e, idx) => {
                return (
                  <div
                    key={idx}
                    className="ChoiceItem"
                    onClick={() => {
                      handle_deleteCoffe(idx);
                    }}
                  >
                    <img
                      className="icon"
                      src={"https://ediya.com" + e.path}
                      alt="ChoiceItem"
                    />
                    <span className="content">{e.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="column" onClick={() => {}}>
            <div className="center confirm" onClick={handle_OrderNotification}>
              <CheckOutlined />
              <span>주문하기</span>
            </div>
            <div className="center cancel" onClick={handle_resetCoffee}>
              <CloseOutlined />
              <sapn>주문취소</sapn>
            </div>
          </div>
        </div>
      </Wrapper>
    </Container>
  );
}

export default OrderP;

const Container = styled.div`
  width: 100%;
  min-width: 576px;
  margin-bottom: 50px;
`;

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
    & .headerItem {
      cursor: pointer;
      &:hover {
        opacity: 0.7;
      }
    }
  }

  & .category {
    padding: 10px 20px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    & .categoryItem {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      &:hover {
        opacity: 0.7;
      }
    }
    & .icon {
      width: 50px;
      height: 50px;
    }
  }
  & .SelectMenu {
    padding: 10px 20px;
    display: flex;
    /* grid-template-columns:1fr 1fr 1fr 1fr; */
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;

    & .SelectMenuItem {
      display: flex;
      flex-flow: column wrap;
      justify-content: center;
      align-items: center;
      margin: 25px 0px;
      cursor: pointer;
      &:hover {
        opacity: 0.6;
      }
    }
    & .icon {
      width: 150px;
      height: 150px;
    }
    & .content {
      font-weight: 500;
    }
  }

  & .order {
    width: 100%;
    height: 200px;

    display: flex;
    flex-flow: row wrap;

    & .column:nth-child(1) {
      width: 70%;
      padding-left: 30px;

      & .Choice {
        padding: 10px 0px;
        font-size: 25px;
        font-weight: 600;
      }
      & .ChoiceList {
        display: flex;
        flex-flow: row nowrap;
        & .ChoiceItem {
          cursor: pointer;
          display: flex;
          flex-flow: column nowrap;
          justify-content: center;
          align-items: center;
          margin-left: 10px;
          & .content {
            text-align: center;
            max-width: 90px;
          }
        }
        & .icon {
          width: 90px;
          height: 90px;
        }
      }
    }
    & .column:nth-child(2) {
      width: 30%;
      display: flex;
      flex-flow: column wrap;
      color: white;
      font-weight: 300;
      & .confirm {
        width: 100%;
        height: 100px;
        text-align: center;
        font-size: 32px;
        background-color: #00b894;
        cursor: pointer;
        &:hover {
          opacity: 0.7;
        }
      }
      & .cancel {
        height: 100px;
        text-align: center;
        font-size: 36px;
        background-color: #b2bec3;
        cursor: pointer;
        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
`;
