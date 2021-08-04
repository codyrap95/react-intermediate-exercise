import React from "react";

export default function Table(props) {
  if (props.users.length === 0) return "Loading...";
  return (
    <table>
      <thead>
        <tr>
          {Object.keys(props.users[0].location).map((field, index) => (
            <th key={index}>{field}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.users.map((user) => (
          <tr key={user.login.uuid}>
            <td>
              {user.location.street.number} {user.location.street.name}
            </td>
            <td>{user.location.city}</td>
            <td>{user.location.state}</td>
            <td>{user.location.country}</td>
            <td>{user.location.postcode}</td>
            <td>
              {user.location.coordinates.latitude}{" "}
              {user.location.coordinates.longitude}{" "}
            </td>
            <td>
              {user.location.timezone.description} (
              {user.location.timezone.offset})
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
