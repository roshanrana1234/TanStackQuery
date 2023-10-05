// Get All Data (Super Hero)
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchSuperHero = () => {
  return axios.get("http://localhost:8000/superheros");
};

export const UseSuperHero = (onSuccess, onError) => {
  return useQuery(["super-hero"], fetchSuperHero, {
    onSuccess,
    onError,
  });
};

// Get By Id (Single Data)

// const fetchSigleHeroData = (heorID) => {
//   return axios.get(`http://localhost:8000/superheros/${heorID}`);
// };

// export const UseSingleHeroData = (heorID) => {
//   return useQuery(["sigle-hero", heorID], () => fetchSigleHeroData(heorID));
// };

// OR

const fetchSigleHeroData = ({ queryKey }) => {
  const heroID = queryKey[1];
  // const [, heroID] = queryKey;
  return axios.get(`http://localhost:8000/superheros/${heroID}`);
};

export const UseSingleHeroData = (heroID, onSuccess, onError) => {
  return useQuery(["sigle-hero", heroID], fetchSigleHeroData, {
    onSuccess: onSuccess,
    onError: onError,
  });
};

// 10lakh
// 10 lakh 1page == 2page
