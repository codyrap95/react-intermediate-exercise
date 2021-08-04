import React from "react";

export default function Table(props) {
  if (props.users.length === 0) return "Loading...";
  const sortColumn = (field) => {
    props.fieldToBeSorted(field.target.innerText);
  };
  return (
    <table>
      <thead>
        <tr>
          {Object.keys(props.users[0].location).map((field, index) => (
            <th
              onClick={(field) => {
                sortColumn(field);
              }}
              key={index}
            >
              {field}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.users.map((user) => (
          <tr key={user.login.uuid}>
            <td>{user.location.street}</td>
            <td>{user.location.city}</td>
            <td>{user.location.state}</td>
            <td>{user.location.country}</td>
            <td>{user.location.postcode}</td>
            <td>{user.location.coordinates}</td>
            <td>{user.location.timezone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
