import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import NormalFetchData from "./components/NormalFetchData";
import TanStackQueryFetch from "./components/TanStackQueryFetch";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// Crating an Instence
const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="normalfetch" element={<NormalFetchData />} />
          <Route path="tsqfetch" element={<TanStackQueryFetch />} />
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </>
  );
};

export default App;
