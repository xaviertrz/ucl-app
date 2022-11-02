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
import { api } from "./api";
import { liveMatches } from "./data"; './data'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* <Route path="/live" loader={api.getLiveMatches} element={<Live />} /> */}
      <Route path="/live" loader={() => liveMatches} element={<Live />} />
      <Route
        path="/fixtures"
        loader={() => api.getMatches("NS")}
        element={<Fixtures />}
      />
      <Route
        path="/results"
        loader={() => api.getMatches("FT")}
        element={<Results />}
      />
      <Route path="/groups" loader={api.getStandings} element={<Groups />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
