import React from "react";
import { Link, Navigate } from "react-router-dom";
import Stack from "react-bootstrap/Stack";

export function NavBar({
  user,
  currentPage,
  stateChanger,
  handleLogout,
  ...rest
}) {
  return (
    <div>
      <Stack
        direction="horizontal"
        gap={1}
        className="brandedHeader bg-dark border-bottom border-secondary"
      >
        <div className="p-1 text-light" onClick={() => stateChanger(1)}>
          <div className="d-flex">
            <h1 className="mx-5">Catēna</h1>
            <h4 className="align-middle mx-3 mt-2">
              Integrated Logistics Platform
            </h4>
          </div>
        </div>

        <div className="p-1 ms-auto" onClick={() => stateChanger(3)}>
          <Stack direction="horizontal" gap={1} style={{ alignItems: "start" }}>
            <div className="p-1" onClick={() => stateChanger(0)}>
              <Link to={`${user ? "/profile" : "/login"}`}>
                <i className="fs-3 bi bi-person-fill" />
              </Link>
            </div>

            {user && (
              <div className="p-1 " onClick={handleLogout}>
                <Link to={`/`}>
                  <i className="fs-3 bi bi-box-arrow-right" />
                </Link>
              </div>
            )}
          </Stack>
        </div>
      </Stack>

      {user && (
        <Stack
          direction="horizontal"
          gap={1}
          className="bg-dark border-bottom border-secondary"
        >
          <div className="p-1" onClick={() => stateChanger(1)}>
            <Link
              to={`/tutorials`}
              className={`  nav-button ${currentPage === 1 ? "active" : ""}`}
            >
              Tutorials
            </Link>
          </div>

          <div className="p-1" onClick={() => stateChanger(2)}>
            <Link
              to={`/tickets`}
              className={` nav-button ${currentPage === 2 ? "active" : ""}`}
            >
              Ticket Submission
            </Link>
          </div>

          <div className="p-1 ms-auto" onClick={() => stateChanger(3)}>
            <Link
              to={`/datasetup`}
              className={` nav-button ${currentPage === 3 ? "active" : ""}`}
            >
              Data Setup
            </Link>
          </div>
        </Stack>
      )}
    </div>
  );
}
