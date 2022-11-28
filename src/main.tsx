import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createHashRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";

import Groups from "./views/Groups";
import Fixtures from "./views/Fixtures";
import Results from "./views/Results";
import "../public/css/global.css";
import Live from "./views/Live";
import Error from "./views/Error";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      staleTime: Infinity,
    },
  },
});

const router = createHashRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Live />} />
      <Route path="/fixtures" element={<Fixtures />} />
      <Route path="/results" element={<Results />} />
      <Route path="/groups" element={<Groups />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
