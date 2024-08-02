/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import PublicLanding from "./pages/PublicLanding";
import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/Login";
import ProfilePage from "./pages/ProfilePage";
import MyProfilePage from "./pages/MyProfilePage";
import Admin from "./pages/Admin";
import { NotFound } from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
// import { About, Contact, FAQ, Privacy, Safety, Terms } from "./AboutPages";

import PrivateRoute from "./authRoutes/PrivateRoute";

import { auth } from "./config";
import { NavBar } from "./components/NavBar";

const App = () => {
  const [patchData, setPatchData] = useState(null); // all user data for admin
  const [loggedInUser, setLoggedInUser] = useState(null); // logged in user data
  const [userId, setUserId] = useState(null);
  const [toast, setToast] = useState({
    value: false,
    message: "Welcome Back!",
  });
  const [redirect, setRedirect] = useState({ to: "/home" });

  const updateSuccess = (value, message) => {
    setToast({ value, message });
    setTimeout(() => setToast({ value: false, message: "" }), 3000);
  };

  const handleLogOut = () => {};

  // check login status
  const handleLoginCheck = () => {
    auth.auth().onAuthStateChanged((user) => {
      if (user) {
        // make sure we arent already logged in
        if (!loggedInUser) {
          // getLoggedInUserData(user);
          setEmailVerified(user.emailVerified);
          updateSuccess(true, "Welcome!");
        }
      } else {
        // logged out
        handleLogOut();
      }
    });
  };

  useEffect(() => {
    handleLoginCheck();
    // eslint-disable-next-line
  }, [loggedInUser]);

  const handleLogin = (data) => {
    handleLoginCheck();
  };

  const handleNewLogin = (data, isaLeader) => {};

  return (
    <Router>
      <div className="App">
        <NavBar />
        <ScrollToTop />
        <Routes>
          {/* Create account for teachers */}
          {/* <Route
            path="/createAccount"
            render={() => (
              <CreateAccount
                handleLogin={handleNewLogin}
                loggedInUser={loggedInUser}
              />
            )}
          /> */}

          {/* <Route
            path="/profile/*"
            render={() => (
              <ProfilePage
                // data={selection}
                loggedInUser={loggedInUser}
                handleLoginCheck={handleLoginCheck}
              />
            )}
          /> */}

          {/* <Route
            element={PrivateRoute}
            path="/myProfile*"
            render={() => (
              <MyProfilePage
                loggedInUser={loggedInUser}
                handleLogOut={handleLogOut}
                updateSuccess={updateSuccess}
                launchToast={toast}
                userId={userId}
              />
            )}
          /> */}

          {/* <Route
            element={PrivateRoute}
            path="/admin"
            render={() => (
              <Admin
                loggedInUser={loggedInUser}
                handleLogOut={handleLogOut}
                updateSuccess={updateSuccess}
                userId={userId}
                patchData={patchData}
              />
            )}
          /> */}

          {/* <Route path="/passwordReset" exact component={PasswordReset} /> */}
          {/* <Route path="/aboutUs" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/faq" component={FAQ} />
          */}

          {/* <Route
            path="/login"
            render={() => (
              <Login
                handleLogin={handleLogin}
                handleNewLogin={handleNewLogin}
                handleLogOut={handleLogOut}
                loggedInUser={loggedInUser}
              />
            )}
          /> */}

          {/* Home is for logged in users with authenticated priviledges */}
          {/* <Route
            path="/home"
            exact
            render={() => (
              <Home
                handleLogin={handleLogin}
                handleLogOut={handleLogOut}
                loggedInUser={loggedInUser}
                launchToast={toast}
                userId={userId}
              />
            )}
          /> */}

          {/* PublicLanding is for random visitors to the page */}
          <Route
            path="/"
            render={() => (
              <PublicLanding
                handleLogin={handleLogin}
                handleLogOut={handleLogOut}
                loggedInUser={loggedInUser}
                launchToast={toast}
                userId={userId}
                redirect={redirect}
              />
            )}
          />

          <Route component={NotFound} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
