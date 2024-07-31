import React from "react";

const UserTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>Field</th>
        <th>Data Type</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map((user) => (
          <tr key={user.id}>
            <td>{user.field}</td>
            <td>{user.dataType}</td>
            <td>
              <button
                className="button muted-button"
                onClick={() => {
                  props.editRow(user);
                }}
              >
                Edit
              </button>
              <button
                className="button muted-button"
                onClick={() => props.deleteUser(user.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No Data</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;
