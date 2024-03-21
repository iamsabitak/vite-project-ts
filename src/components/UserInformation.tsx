import React from "react";
import { IState } from "./FetchApi";

interface Iprop {
  user: IState[];
}

const UserInformation: React.FC<Iprop> = ({ user }) => {
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
