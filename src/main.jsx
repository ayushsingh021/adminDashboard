import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  Router,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Layout from "./Layout.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import Company from "./components/Company/Company.jsx";
import AddCompany from "./components/Company/AddCompany.jsx";
import UpdateCompany from "./components/Company/UpdateCompany.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Dashboard />} />
      <Route path="company" element={<Company />} />
      <Route path="add_company" element={<AddCompany />} />
      <Route path="update_company" element={<UpdateCompany />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
