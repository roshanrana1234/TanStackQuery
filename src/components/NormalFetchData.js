import React, { useState, useEffect } from "react";
import axios from "axios";
import { UseSuperHero } from "../Hooks/UseSuperHero";

const NormalFetchData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  console.log(data);
  //   Promise = pending , success, Rejected
  console.log("UseEffect Run On Mount");
  useEffect(() => {
    axios
      .get("http://localhost:8000/superheros")
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
        setIsError(false);
      })
      .catch((err) => {
        console.log(err);
        setIsError(err.message);
        setIsLoading(false);
        setData(null);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen bg-purple-950 text-white flex justify-center items-center text-5xl font-black">
        Loading...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="h-screen  text-red-500 flex justify-center items-center text-2xl font-black text-center  ">
        {isError}
      </div>
    );
  }

  return (
    <>
      <div className="p-4">
        <h1 className="text-center text-2xl  font-semibold">
          Traditional Fetch Data
        </h1>
        {data?.map((value, index) => {
          return (
            <div key={index}>
              <div className="flex gap-3">
                <span>{value.id}. </span>
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

export default NormalFetchData;
