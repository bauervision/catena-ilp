import React, { useState } from "react";
import "../App.css";
// Component imports

export default function Profile() {
  const [isNewUser, setIsNewUser] = useState(true);
  return (
    <div className="App">
      <div className="w-100">
        {/* Content */}

        <h2 className=" text-center pt-3">Catēna User Profile</h2>

        {!isNewUser && (
          <div className="container p-4">
            <div className="row" id="loginForm">
              <section className="offset-md-3 col-md-6">
                <div className="card shadow p-5">
                  <h3 className="text-center mb-3 font-time">
                    {" "}
                    Welcome Back!{" "}
                  </h3>
                  <form>
                    <div className="form-group p-2">
                      <input
                        type="text"
                        name="username"
                        id="username"
                        className="form-control rounded-pill"
                        placeholder="Enter Your Username"
                      />
                    </div>

                    <div className="form-group p-2">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-control rounded-pill"
                        placeholder="Enter Your Password"
                      />
                    </div>

                    <div className="form-group">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck"
                        />
                        <label
                          className="custom-control-label"
                          for="customCheck"
                        >
                          Remember Me
                        </label>
                      </div>
                    </div>

                    <button
                      className="btn btn-block btn-info rounded-pill"
                      id="submit"
                      onclick="return validate();"
                    >
                      Login
                    </button>
                  </form>

                  <div className="text-center">
                    <a className="font-time" href="#">
                      Forgot Password?
                    </a>
                  </div>
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

        {isNewUser && (
          <div className="container p-4">
            <div className="row" id="loginForm">
              <section className="offset-md-3 col-md-6">
                <div className="card shadow p-5">
                  <h3 className="text-center mb-3 font-time">
                    Welcome to Catēna!
                  </h3>
                  <form>
                    <div className="form-group p-2">
                      <input
                        type="text"
                        name="username"
                        id="username"
                        className="form-control rounded-pill"
                        placeholder="Enter Your Username"
                      />
                    </div>

                    <div className="form-group p-2">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-control rounded-pill"
                        placeholder="Enter Your Password"
                      />
                    </div>

                    <div className="form-group p-2">
                      <input
                        type="password"
                        name="password"
                        id="password-confirm"
                        className="form-control rounded-pill"
                        placeholder="Confirm Your Password"
                      />
                    </div>

                    <button
                      className="btn btn-block btn-info rounded-pill"
                      id="submit"
                      onclick="return validate();"
                    >
                      Create Account!
                    </button>
                  </form>

                  <div className="text-center">
                    <a
                      className="font-time"
                      href="#"
                      onClick={() => setIsNewUser(false)}
                    >
                      Login Instead
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
