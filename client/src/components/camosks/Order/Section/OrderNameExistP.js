import React from "react";
import styled from "styled-components";

import { coffees_dummy } from "./OrderData";
/**
 * 
 * @param {{content: Array(2), _id: "5fb4ae9de4bd8e7c70270552", user: {…}, createdAt: "2020-11-18T05:18:21.663Z", updatedAt: "2020-11-18T05:18:21.663Z", …}
content: (2) ["1,2", "2"]
createdAt: "2020-11-18T05:18:21.663Z"
updatedAt: "2020-11-18T05:18:21.663Z"
user: {role: 0, _id: "5f80157a53fb0175087decac", email: "ypd03008@gmail.com", password: "$2b$10$IOVxaPX80ARb6oWnj9etQOxHARwRiHJlwBggYbBvhw4Z8K4UYdMfS", name: "kimdoyoung", …}
__v: 0
_id: "5fb4ae9de4bd8e7c70270552"
__proto__: Object}  
 */

/**
 * @param {{id: "101", name: "김도영", cause: "불명", term: "2020-07-01~2020-12-31", address: "대한민국 경기도 용인시 수지구 동천동 13"}
address: "대한민국 경기도 용인시 수지구 동천동 13"
cause: "불명"
id: "101"
name: "김도영"
term: "2020-07-01~2020-12-31"}  
 */

const OrderNameExistP = ({ order, handle_setCoffe, personInfo }) => {
  console.log(order);
  console.log(personInfo);

  const handle_clickList = (idx) => {
    handle_setCoffe(String(order?.content[idx]).split(","));
  };

  return (
    <Container>
      <div className="header">구매 이력</div>
      <div className="Profile">
        <div className="name">{personInfo?.name}</div>
        <div className="id">회원 번호 : {personInfo?.id}</div>
        <div className="address">회원 이름 : {personInfo?.name}</div>
        <div className="term">구매 기간 : {personInfo?.term}</div>
      </div>
      <ul className="OrderList">
        {order?.content?.map((e, idx) => {
          const itemNumbers = String(e).split(",");

          return (
            <li
              className="list"
              onClick={() => {
                handle_clickList(idx);
              }}
            >
              <span className="ment"> {idx + 1} 번 : 불러오기</span>
              {itemNumbers.map((e) => {
                return (
                  <>
                    <img
                      alt={`${coffees_dummy[e]?.name}`}
                      src={"https://ediya.com" + coffees_dummy[e]?.path}
                      className="icon"
                    ></img>
                    <span class="content">{coffees_dummy[e]?.name}</span>
                  </>
                );
              })}
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default OrderNameExistP;

const Container = styled.div`
  min-height: 400px;
  height: 400px;
  padding: 10px 30px;
  & .header {
    padding: 10px 0px;
    font-size: 25px;
    font-weight: 600;
  }

  & .Profile {
    padding: 20px;
    & .name {
      font-size: 23px;
      font-weight: 600;
    }
    & .id {
    }
    & .address {
    }
    & .term {
    }
  }

  & .OrderList {
    & .list {
      display: flex;
      align-items: center;
      cursor: pointer;
      border-top: 2px solid #00b894;
      /* background-color: */
      & .ment {
        text-align: center;
        font-size: 32px;
        background-color: #00b894;
        cursor: pointer;
        color: white;
        font-weight: 300;
      }
      & .icon {
        width: 90px;
        height: 90px;
      }
      & .content {
        text-align: center;
        max-width: 90px;
      }
    }
  }
`;
