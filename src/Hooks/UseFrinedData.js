import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchFriendData = () => {
  return axios.get("http://localhost:8000/friends");
};

export const UseFrinedData = () => {
  return useQuery(["friend-list"], fetchFriendData);
};
