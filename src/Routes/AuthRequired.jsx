import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export default function AuthRequired() {
  const isLoggedIn = true;
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
}
