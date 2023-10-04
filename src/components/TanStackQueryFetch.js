import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchSuperHero = () => {
  return axios.get("http://localhost:8000/superheros");
};

// isFetching == onMount , onWindoFocus
// poll
const TanStackQueryFetch = () => {
  const {
    isInitialLoading,
    isLoading,
    data,
    isError,
    error,
    isFetching,
    refetch,
  } = useQuery(["super-hero"], fetchSuperHero, {
    // cacheTime: 5000, //By Default Cache time 5 min
    // staleTime: 10000,  // By Default  0 sed (We Control isFetching)
    // refetchOnMount: false, // By Default Value true BackGround Refetch onMount (We Control isFetching onMont)
    // refetchOnWindowFocus: false, //By Default Value is True
    // refetchInterval: 2000,
    // refetchIntervalInBackground: true,
    // enabled: false,
  });

  console.log(isLoading, isFetching);

  if (isInitialLoading) {
    return (
      <div className="h-screen bg-purple-950 text-white flex justify-center items-center text-5xl font-black">
        Loading...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="h-screen  text-red-500 flex justify-center items-center text-2xl font-black text-center  ">
        {error.message}
      </div>
    );
  }

  return (
    <>
      <div className="p-4">
        <h1 className="text-center text-2xl  font-semibold">
          TanStack Query Fetch Data
        </h1>
        <button onClick={refetch} className="btn">
          Fetch SuperHeros
        </button>
        {data?.data.map((value, index) => {
          return (
            <div key={index}>
              <div className="flex gap-3">
                <span>{value.id}</span>
                <span className="text-xl text-orange-600 font-bold">
                  {value.name}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TanStackQueryFetch;

// Fresh , fetching, pending , stale , inactive

// Cacsh Memory Default Time 5 mint
