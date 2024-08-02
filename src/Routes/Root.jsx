import React from "react";
import "../App.css";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}
