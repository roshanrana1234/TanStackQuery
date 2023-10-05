import React from "react";
import { useParams } from "react-router-dom";
import { UseSingleHeroData } from "../Hooks/UseSuperHero";

const SuperHeroDetailPage = () => {
  const { heroID } = useParams();

  const onSuccess = (data) => {
    console.log("This Side Effect is After Success Full fetch", data);
  };

  const onError = (error) => {
    // console.log("This Side Effect is After UnSuccess Full fetch", error);
  };

  const { data, isLoading, isError, error } = UseSingleHeroData(
    heroID,
    onSuccess,
    onError
  );

  console.log(data);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>{error.message}</div>;
  }
  return (
    <>
      <div>This is Super Heor Detail Page</div>
      <div className="w-5/12 p-12 rounded-3xl bg-gray-950 text-white flex flex-col items-center justify-center gap-6 m-auto">
        <span>{data?.data?.id}</span>
        <span>{data?.data?.name}</span>
        <span>{data?.data?.alterego}</span>
      </div>
    </>
  );
};

export default SuperHeroDetailPage;
