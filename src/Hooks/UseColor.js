import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchColor = () => {
  return axios.get("http://localhost:8000/colors?_limit=3&_page=3");
};

export const UseColorData = () => {};
