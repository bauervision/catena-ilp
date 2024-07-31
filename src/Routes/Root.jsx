import React, { useState } from "react";
import "../App.css";
import { Outlet } from "react-router-dom";
// Component imports
import { NavBar } from "../components/NavBar";

export default function Root() {
  const [currentPage, setCurrentPage] = useState(4);

  return (
    <div className="App">
      <NavBar currentPage={currentPage} stateChanger={setCurrentPage} />
      <Outlet />
    </div>
  );
}
