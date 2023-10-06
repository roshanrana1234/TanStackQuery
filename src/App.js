import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import NormalFetchData from "./components/NormalFetchData";
import TanStackQueryFetch from "./components/TanStackQueryFetch";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import SuperHeroDetailPage from "./pages/SuperHeroDetailPage";
import PageNotFound from "./pages/PageNotFound";
import DynamicParallelQuery from "./pages/DynamicParallelQuery";
import PaginatedQuery from "./pages/PaginatedQuery";

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
          <Route path="tsq_PaginatedQuery" element={<PaginatedQuery />} />
          <Route path="tsqfetch/:heroID" element={<SuperHeroDetailPage />} />
          <Route
            path="tsq_dynamic_parallel_query"
            element={<DynamicParallelQuery heorIDS={[1, 3]} />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </>
  );
};

export default App;
