import { Route, Routes } from "react-router";
import "./App.css";
import Layout from "./components/layout";
import Details from "./pages/details";
import Favoris from "./pages/favoris";
import Home from "./pages/home";
import Popular from "./pages/popular";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: false } },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="popular" element={<Popular />} />
          <Route path="favoris" element={<Favoris />} />
          <Route path="details/:id" element={<Details />} />
        </Route>

        <Route path="*" element={<>404</>}></Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
