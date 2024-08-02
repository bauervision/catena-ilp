import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  redirect,
} from "react-router-dom";
import { getDatabase, ref, child, get } from "firebase/database";

import "./App.css";
import Home from "./Routes/Home";
import Layout from "./Routes/Layout";
import Profile from "./Routes/Profile";
import Tickets from "./Routes/Tickets";
import Login from "./Routes/Login";
import Tutorials from "./Routes/Tutorials";
import DataSetup from "./Routes/DataSetup";
import { auth } from "./config";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    if (!user) {
      auth.onAuthStateChanged((user) => {
        if (user != null) {
          console.log("User: " + user.email + " is logged in");
        } else {
          console.log("No one is logged in!");
        }

        setUser(user);
      });
    }
  });

  const [myData, setMyData] = useState(null);

  useEffect(() => {
    if (user) {
      const getMyData = async () => {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `users/${user.uid}`))
          .then((snapshot) => {
            if (snapshot.exists()) {
              var data = snapshot.val();
              console.log(data);
              setMyData(data);
            } else {
              console.log("No data available");
            }
          })
          .catch((error) => {
            console.error(error);
          });
      };

      getMyData();
    }
  }, [user]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout user={myData} />}>
        <Route
          index
          element={<Home />}
          loader={async () => {
            return null;
          }}
        />
        <Route
          path="profile"
          element={<Profile myData={myData} />}
          loader={async () => {
            if (!user) {
              redirect("/login");
            }
            return null;
          }}
        />
        <Route
          path="tutorials"
          element={<Tutorials />}
          loader={async () => {
            if (!user) {
              redirect("/login");
            }
            return null;
          }}
        />
        <Route
          path="tickets"
          element={<Tickets />}
          loader={async () => {
            if (!user) {
              redirect("/login");
            }
            return null;
          }}
        />
        <Route
          path="datasetup"
          element={<DataSetup />}
          loader={async () => {
            if (!user) {
              redirect("/login");
            }
            return null;
          }}
        />
        <Route path="login" element={<Login />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
