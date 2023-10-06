import React, { useState } from "react";
import { UseAddSuperHero, UseSuperHero } from "../Hooks/UseSuperHero";
import { Link } from "react-router-dom";
import { UseFrinedData } from "../Hooks/UseFrinedData";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const onSuccess = (data) => {
  console.log("This Side Effect is After Success Full fetch", data);
};

const onError = (error) => {
  // console.log("This Side Effect is After UnSuccess Full fetch", error);
};

const TanStackQueryFetch = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [name, setName] = useState("");
  const [alterego, setAlterego] = useState("");

  // Super Hero Data
  const { isLoading, data, isError, error, isFetching, refetch } = UseSuperHero(
    onSuccess,
    onError
  );

  const afterPost = () => {
    queryClient.invalidateQueries("super-hero");
    // navigate("/");
  };

  const { mutate } = UseAddSuperHero(afterPost);

  // Friends Data
  console.log(data);
  const {
    isLoading: friendLoading,
    data: friendData,
    isError: friendError,
    error: friendErrormessage,
  } = UseFrinedData();

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
        {error.message}
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, alterego };
    console.log(data);
    mutate(data);
    setName("");
    setAlterego("");
  };

  return (
    <>
      <div className="p-4">
        <h1 className="text-center text-2xl  font-semibold">
          TanStack Query Fetch Data (Super Hero)
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-5 my-10"
        >
          <div className="grid grid-cols-2 gap-2 w-full ">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Enter Hero Name</label>
              <input
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="alterEgo">Enter Hero AlterEgo</label>
              <input
                name="alterego"
                value={alterego}
                onChange={(e) => setAlterego(e.target.value)}
              />
            </div>
          </div>
          <button className="btn" type="submit">
            Submit
          </button>
        </form>

        <button onClick={refetch} className="btn">
          Fetch SuperHeros
        </button>
        <div className="flex flex-col gap-3 p-4 w-10/12 m-auto rounded">
          {data?.data.map((value, index) => {
            return (
              <Link to={`${value.id}`} key={index}>
                <div className="flex gap-3 items-center bg-purple-950 text-white p-4 rounded">
                  <span>{value.id}</span>
                  <span className="text-xl text-white font-bold">
                    {value.name}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <h1>Friend Data</h1>

        {friendLoading && <div>Loading...</div>}

        <div className="grid grid-col-1 md:grid-cols-3 sm:grid-cols-2  rounded gap-5">
          {friendData?.data.map((value, index) => {
            return (
              <div
                key={index}
                className="rounded bg-orange-950 p-5 text-center text-white flex justify-center"
              >
                <div className="flex gap-3 items-center text-center flex-col">
                  <span>{value.id}</span>
                  <span>{value.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TanStackQueryFetch;

// Fresh , fetching, pending , stale , inactive

// Cacsh Memory Default Time 5 mint
