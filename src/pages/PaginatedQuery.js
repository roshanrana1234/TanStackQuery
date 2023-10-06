import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchColor = (pageNumber) => {
  return axios.get(`http://localhost:8000/colors?_limit=3&_page=${pageNumber}`);
};

const PaginatedQuery = () => {
  const [pageNumber, setpageNumber] = useState(1);
  const { data, isError, isLoading, error } = useQuery(
    ["color", pageNumber],
    () => fetchColor(pageNumber)
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
      <div className="p-4">
        <div>Paginated Query</div>
        {data.data.map((value, index) => {
          return (
            <div key={index}>
              <span>{value.id}. </span>
              <span>{value.name}</span>
            </div>
          );
        })}

        <div className="flex gap-2">
          <button
            disabled={pageNumber === 4}
            onClick={() => setpageNumber((perValue) => perValue + 1)}
            className="btn disabled:bg-red-500 disabled:cursor-not-allowed"
          >
            Next
          </button>
          <button
            disabled={pageNumber === 1}
            onClick={() => setpageNumber((perValue) => perValue - 1)}
            className="btn disabled:bg-red-500 disabled:cursor-not-allowed"
          >
            Previous
          </button>
        </div>
      </div>
    </>
  );
};

export default PaginatedQuery;
