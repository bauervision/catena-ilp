import React, { useState, useEffect } from "react";

export function DataForm(props) {
  const initialFormState = { id: null, field: "", dataType: "" };
  const [user, setUser] = useState(
    props.editing ? props.currentUser : initialFormState
  );

  const handleInputChange = (event) => {
    const { field, value } = event.target;

    setUser({ ...user, [field]: value });
  };

  const handleTypeChange = (changedValue) => {
    const { dataType, value } = changedValue;

    setUser({ ...user, [dataType]: value });
  };

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const resetAddUser = () => {
    props.setEditing(false);
    setUser(initialFormState);
    props.setCurrentUser(initialFormState);
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!user.field || !user.dataType) return;

        props.editing ? props.updateUser(user.id, user) : props.addUser(user);
        resetAddUser();
      }}
    >
      <label>Field</label>
      <input
        type="text"
        name="field"
        value={user.field}
        onChange={handleInputChange}
      />

      <div className="dropdown">
        <button
          className="btn  dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Data Type
        </button>
        <ul className="dropdown-menu">
          <li>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => handleTypeChange("Integer")}
            >
              Integer
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => handleTypeChange("String")}
            >
              String
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => handleTypeChange("Data")}
            >
              Date
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => handleTypeChange("Time")}
            >
              Time
            </a>
          </li>
        </ul>
      </div>
      <button>{props.editing ? "Update Data" : "Add Data"}</button>
      {props.editing && (
        <button onClick={resetAddUser} className="button muted-button">
          Cancel
        </button>
      )}
    </form>
  );
}
