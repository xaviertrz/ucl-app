import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Groups from "./views/Groups";
import Fixtures from "./views/Fixtures";
import Results from "./views/Results";
import "./styles/global.css";
import Live from "./views/Live";
import Error from "./views/Error";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/live" element={<Live />} />
      <Route path="/fixtures" element={<Fixtures />} />
      <Route path="/results" element={<Results />} />
      <Route path="/groups" element={<Groups />} />
      <Route path="*" element={<Error/>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
