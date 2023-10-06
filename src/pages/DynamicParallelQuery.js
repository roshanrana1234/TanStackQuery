import React from "react";
import { useQuery, useQueries } from "@tanstack/react-query";
import axios from "axios";

const fetchHeros = (heroID) => {
  return axios.get(`http://localhost:8000/superheros/${heroID}`);
};

const DynamicParallelQuery = ({ heorIDS }) => {
  const queryResult = useQueries({
    queries: heorIDS.map((value) => {
      return {
        queryKey: ["Multi-databyId", value],
        queryFn: () => fetchHeros(value),
      };
    }),
  });
  console.log("Query Result", queryResult);
  return (
    <>
      <div>
        <h1 className="text-xl font-bold text-gray-900">
          This is Dynamic Parallel Query
        </h1>
        {queryResult.map((value, index) => {
          console.log(value);
          return (
            <div key={index}>
              <span>{value?.data?.data?.id}. </span>
              <span>{value?.data?.data?.name}</span>
              <span>{value?.data?.data?.alterego}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DynamicParallelQuery;
