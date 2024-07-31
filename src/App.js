import { useState } from "react";
import "./App.css";
// Component imports

import { Accordion } from "./components/Accordion";

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div className="App">
      {/* Branded Header */}
      <nav class="navbar  border-body " data-bs-theme="dark">
        <div className="row w-100 ">
          <div style={{ width: "75% " }}>
            <div className="d-flex mx-5">
              <h1 className="">Catēna</h1>
              <text className="align-middle mx-3 mt-2">
                Integrated Logistics Platform
              </text>
            </div>
          </div>
          <div style={{ width: "25% " }}>
            <div className="">
              <form className="d-flex " role="search">
                <input
                  className="form-control me-2 bg-light"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-secondary" type="submit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                  </svg>
                </button>
                {/* User Profile Button */}
                <div onClick={() => setCurrentPage(4)}>
                  <button className="btn btn-outline-secondary pl-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-person-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                      <path
                        fill-rule="evenodd"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </nav>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary text-center">
        <div className="nav nav-tabs ">
          <ul>
            <li onClick={() => setCurrentPage(0)}>
              <button
                autofocus
                className={`nav-item nav-button nav-link ${
                  currentPage === 0 ? "active" : ""
                }`}
              >
                Sign-Up
              </button>
            </li>

            <li onClick={() => setCurrentPage(1)}>
              <button
                className={` nav-item nav-button nav-link ${
                  currentPage === 1 ? "active" : ""
                }`}
              >
                Tutorials
              </button>
            </li>

            <li onClick={() => setCurrentPage(2)}>
              <button
                className={`nav-item nav-button nav-link ${
                  currentPage === 2 ? "active" : ""
                }`}
              >
                Ticket Submission
              </button>
            </li>
            <li onClick={() => setCurrentPage(3)}>
              <button
                className={` nav-item nav-button nav-link ${
                  currentPage === 3 ? "active" : ""
                }`}
              >
                Data
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default App;
