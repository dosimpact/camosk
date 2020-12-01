import axios from "axios";
import { BASE_SERVER_URL } from "apis/config";

const orders = () => {
  return axios({
    method: "get",
    url: `${BASE_SERVER_URL}api/orders/`,
  });
  // return axios.get(`${BASE_SERVER_URL}api/notification/sns`, { ...params });
};
const createOrder = (content, userID) => {
  return axios({
    method: "post",
    url: `${BASE_SERVER_URL}api/orders/create`,
    data: {
      content,
      user: userID,
    },
  });
  // const params = { Message, PhoneNumber };
  // return axios.post(`${BASE_SERVER_URL}api/notification/sns`, { ...params });
};
const getOrderWithUserName = (name) => {
  return axios({
    method: "get",
    url: `${BASE_SERVER_URL}api/orders/getorderwithname/${name}`,
  });
};

export { orders, createOrder, getOrderWithUserName };
