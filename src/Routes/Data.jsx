import React, { useState } from "react";
import "../App.css";
// Component imports
import { DataForm } from "../components/DataForm";
import UserTable from "../components/UserTable";
export default function Data() {
  const usersData = [
    { id: 1, field: "Age", dataType: "int" },
    { id: 2, field: "Name", dataType: "string" },
    { id: 3, field: "Address", dataType: "string" },
    { id: 4, field: "Birthday", dataType: "Date" },
  ];
  const initialFormState = { id: null, field: "", dataType: "" };

  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setEditing(false);
    setUsers(users.filter((user) => user.id !== id));
  };

  const editRow = (user) => {
    setEditing(true);

    setCurrentUser(user);
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  return (
    <div className="container vh-100">
      <h2 className=" text-center  pt-3">Catēna Data Configuration</h2>
      <div className="card pt-3">
        <div className="flex-row">
          <div className="flex-large">
            <div>
              <h4>{editing ? "Edit Data" : "Add Data"}</h4>
              <DataForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                updateUser={updateUser}
                addUser={addUser}
              />
            </div>
          </div>
          <div className="flex-large">
            <h4>View Data</h4>
            <UserTable
              users={users}
              editRow={editRow}
              deleteUser={deleteUser}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
