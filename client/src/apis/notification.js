import axios from "axios";
import { BASE_SERVER_URL } from "apis/config";

const SMS = (Message, PhoneNumber) => {
  const params = { Message, PhoneNumber };
  return axios.post(`${BASE_SERVER_URL}api/notification/sns`, { ...params });
};

export { SMS };
