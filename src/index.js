import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// Routes
import Root from "./Routes/Root";
import ErrorPage from "./Routes/ErrorPage";
import Tutorials from "./Routes/Tutorials";
import Tickets from "./Routes/Tickets";
import Profile from "./Routes/Profile";
import SignUp from "./Routes/SignUp";
import Data from "./Routes/Data";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <SignUp />,
      },
      {
        path: "tutorials",
        element: <Tutorials />,
      },
      {
        path: "tickets",
        element: <Tickets />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "data",
        element: <Data />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
