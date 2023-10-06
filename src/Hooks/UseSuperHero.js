// Get All Data (Super Hero)
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
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

// const fetchSigleHeroData = ({ queryKey }) => {
//   const heroID = queryKey[1];
//   // const [, heroID] = queryKey;
//   return axios.get(`http://localhost:8000/superheros/${heroID}`);
// };

// export const UseSingleHeroData = (heroID, onSuccess, onError) => {
//   return useQuery(["sigle-hero", heroID], fetchSigleHeroData, {
//     onSuccess: onSuccess,
//     onError: onError,
//   });
// };

// OR
// Initail Data
const fetchSigleHeroData = ({ queryKey }) => {
  const heroID = queryKey[1];
  return axios.get(`http://localhost:8000/superheros/${heroID}`);
};

export const UseSingleHeroData = (heroID, onSuccess, onError) => {
  const queryClient = useQueryClient();
  return useQuery(["sigle-hero", heroID], fetchSigleHeroData, {
    onSuccess: onSuccess,
    onError: onError,
    initialData: () => {
      const hero = queryClient
        .getQueryData(["super-hero"])
        ?.data?.find((hero) => hero.id === parseInt(heroID));

      console.log("This is Hero", hero);
      if (hero) {
        return {
          data: hero,
        };
      } else {
        return undefined;
      }
    },
  });
};

// Mutate , POST

const addSuperHero = (hero) => {
  return axios.post("http://localhost:8000/superheros", hero);
};

export const UseAddSuperHero = (afterPost) => {
  const queryClient = useQueryClient();
  return useMutation(addSuperHero, {
    onSuccess: afterPost,
    // onSuccess: () => {
    //   queryClient.invalidateQueries("super-hero");
    // },
  });
};
