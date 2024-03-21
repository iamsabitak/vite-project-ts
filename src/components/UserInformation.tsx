import React from "react";
import useUserContext from "../context/useUserContext";
import { Link } from "react-router-dom";

const UserInformation: React.FC = () => {
  const { user } = useUserContext();
  return (
    <>
      <h1>userInformation</h1>
      <table className="table">
        <thead>
          <tr>
            <td scope="col">Name</td>
            <td scope="col">UserName</td>
            <td scope="col">Email</td>
            <td scope="col">Address</td>
          </tr>
        </thead>

        <tbody>
          {user.map((user) => (
            <tr key={user.id}>
              <Link to={`singleuser/${user.id}`}>
                <td scope="col">{user.username}</td>
              </Link>
              <td scope="col">{user.name}</td>
              <td scope="col">{user.email}</td>
              <td scope="col">{user.address.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default UserInformation;
