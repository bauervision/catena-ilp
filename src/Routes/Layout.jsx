import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { auth } from "../config";

export default function Layout({ user }) {
  const [currentPage, setCurrentPage] = useState(4);

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }

  return (
    <>
      <NavBar
        user={user}
        currentPage={currentPage}
        stateChanger={setCurrentPage}
        handleLogout={handleLogout}
      />

      <main>
        <div className="App">
          <div className="container vh-100">
            <Outlet />
          </div>
        </div>
      </main>
    </>
  );
}
