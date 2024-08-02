import React, { useState } from "react";

import {
  getDatabase,
  ref,
  serverTimestamp,
  set,
  get,
  child,
} from "firebase/database";
import {
  createUserWithEmailAndPassword,
  getAdditionalUserInfo,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Navigate } from "react-router-dom";
import moment from "moment/moment";
import "../App.css";
import { auth, database } from "../config";

// Component imports

export default function Login() {
  const [isNewUser, setIsNewUser] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const now = moment().toDate().getTime();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      window.location.href = "/profile";
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const credential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = auth.currentUser;
      console.log(user);

      // Retrieving additional user information from the authentication credential
      const userMeta = getAdditionalUserInfo(credential);
      console.log(userMeta);

      let newData = {
        id: user.uid,
        lastUpdate: now,
        firstName: fname,
        lastName: lname,
        email: email,
      };
      console.log(newData);

      // Checking if the user is new or an existing user
      if (userMeta.isNewUser) {
        const db = getDatabase();
        set(ref(db, "users/" + user.uid), newData)
          .then(() => {
            window.location.href = "/profile";
          })
          .catch((error) => {
            console.error(error);
          });
      }
    } catch (error) {}
  };

  return (
    <div className="">
      {/* Content */}

      <h2 className=" text-center pt-3">Catēna User Profile</h2>

      {/* Returning User */}
      {!isNewUser && (
        <div className="container p-4">
          <div className="row" id="loginForm">
            <section className="offset-md-3 col-md-6">
              <div className="card shadow p-5">
                <h3 className="text-center mb-3 font-time"> Welcome Back! </h3>
                <form onSubmit={handleSubmit}>
                  <h3>Login</h3>

                  <div className="mb-3">
                    <label>Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>

                {/* <div className="text-center">
                    <a className="font-time" href="#">
                      Forgot Password?
                    </a>
                  </div> */}
                <div className="text-center">
                  <a
                    className="font-time"
                    href="#"
                    onClick={() => setIsNewUser(true)}
                  >
                    Create an Account!
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}

      {/* New User Signup */}
      {isNewUser && (
        <div className="container p-4">
          <div className="row" id="loginForm">
            <section className="offset-md-3 col-md-6">
              <div className="card shadow p-5">
                <form onSubmit={handleSignup}>
                  <h3>Sign Up</h3>

                  <div className="mb-3">
                    <label>First name *</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First name"
                      onChange={(e) => setFname(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label>Last name *</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last name"
                      onChange={(e) => setLname(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label>Email address *</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label>Password *</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter password"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                      Sign Up
                    </button>
                  </div>
                  <p className="forgot-password text-right">
                    Already registered{" "}
                    <a href="#" onClick={() => setIsNewUser(false)}>
                      Login
                    </a>
                  </p>
                </form>
              </div>
            </section>
          </div>
        </div>
      )}
    </div>
  );
}
