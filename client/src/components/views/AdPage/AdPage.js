import React from "react";

import styled from "styled-components";
import {
  VideoCameraAddOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  CheckOutlined,
  CloseOutlined,
} from "@ant-design/icons";

function AdPage({setIsShoping,PurchasePageRef}) {
  return (
    <Container ref={PurchasePageRef}>
      <Wrapper>
        <div className="row header">
          <div className="headerItem">
            <HomeOutlined className="icon" />
          </div>
          <div className="headerItem">
            CAMOSK <VideoCameraAddOutlined />
          </div>
          <div className="headerItem">
            <ShoppingCartOutlined />
          </div>
        </div>
        <div className="row category">
          {[
            { name: "Burger", path: "svg/002-burger.svg" },
            { name: "hot dog", path: "svg/003-hot dog.svg" },
            { name: "fries", path: "svg/004-french fries.svg" },
            { name: "chicken", path: "svg/005-roast chicken.svg" },
            { name: "pizza", path: "svg/009-pizza.svg" },
            { name: "steak", path: "svg/020-steak.svg" },
            { name: "Desert", path: "svg/032-avocado.svg" },
            { name: "Beverage", path: "svg/036-mineral water.svg" },
          ].map((e, idx) => {
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
        <div className="row SelectMenu">
          {[
            {
              name: "아인슈페너 HOT",
              path: "/files/menu/IMG_1600305773256.png",
            },
            {
              name: "콜드브루 아인슈페너",
              path: "/files/menu/IMG_1600310535229.png",
            },
            {
              name: "골든바닐라슈페너",
              path: "/files/menu/IMG_1600316010129.png",
            },
            {
              name: "골든바닐라슈페너 ICED",
              path: "/files/menu/IMG_1600316075704.png",
            },
            {
              name: "이디야 사과 & 당근 주스",
              path: "/files/menu/IMG_1594686206508.jpg",
            },
            {
              name: "이디야 비트 & 오렌지 주스",
              path: "/files/menu/IMG_1594686391619.jpg",
            },
            {
              name: "블루코코 후룻치노",
              path: "/files/menu/IMG_1591605395331.png",
            },
            {
              name: "망고샤베트 빙수",
              path: "/files/menu/IMG_1589170672473.png",
            },
          ].map((e, idx) => {
            return (
              <div key={idx} className="SelectMenuItem">
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
              {[
                {
                  name: "아인슈페너 HOT",
                  path: "/files/menu/IMG_1600305773256.png",
                },
                {
                  name: "콜드브루 아인슈페너",
                  path: "/files/menu/IMG_1600310535229.png",
                },
              ].map((e, idx) => {
                return (
                  <div key={idx} className="ChoiceItem">
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
          <div className="column" onClick={()=>{setIsShoping(false)}}>
            <div className="center confirm">
              <CheckOutlined />
              <span>주문확인</span>
            </div>
            <div className="center cancel">
              <CloseOutlined />
              <sapn>주문취소</sapn>
            </div>
          </div>
        </div>
      </Wrapper>
    </Container>
  );
}

export default AdPage;

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
    }
    & .icon {
      width: 50px;
      height: 50px;
    }
  }
  & .SelectMenu {
    padding: 10px 20px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
    & .SelectMenuItem {
      display: flex;
      flex-flow: column wrap;
      justify-content: center;
      align-items: center;
      margin: 25px 0px;
    }
    & .icon {
      width: 200px;
      height: 200px;
    }
    & .content {
      font-weight: 600;
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
        padding-top: 10px;
        font-size: 25px;
        font-weight: 600;
      }
      & .ChoiceList {
        display: flex;
        flex-flow: row nowrap;
        & .ChoiceItem {
          display: flex;
          flex-flow: column nowrap;
          justify-content: center;
          align-items: center;
          margin-left: 10px;
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
      }
      & .cancel {
        height: 100px;
        text-align: center;
        font-size: 36px;
        background-color: #b2bec3;
      }
    }
  }
`;
