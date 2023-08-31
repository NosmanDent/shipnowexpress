import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Create from "./pages/Create";
import TrackingDetails from "./pages/TrackingDetails";
import Login from "./pages/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="create" element={<Create />} />
      <Route path="search-results" element={<TrackingDetails />} />
      <Route path="login" element={<Login />} />
    </Route>
  )
);

export default function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}
