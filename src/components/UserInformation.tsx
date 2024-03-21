import React from "react";
import useUserContext from "../context/useUserContext";

const UserInformation: React.FC = () => {
  const { user } = useUserContext();
  return (
    <>
      <h1>userInformation</h1>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>UserName</td>
            <td>Email</td>
            <td>Address</td>
          </tr>
        </thead>

        <tbody>
          {user.map((user) => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address.street}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default UserInformation;
