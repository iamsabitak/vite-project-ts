import React from "react";
import useUserContext from "../context/useUserContext";
import { Link } from "react-router-dom";

const UserInformation: React.FC = () => {
  const { user } = useUserContext();
  return (
    <>
      <h1>User Information</h1>
      <table className="table border-primary">
        <thead>
          <tr>
            <th scope="col">UserName</th>
            <th scope="col">Email</th>
          </tr>
        </thead>

        <tbody>
          {user.map((user) => (
            <tr key={user.id}>
              <td>
                <Link to={`singleuser/${user.id}`}>{user.name}</Link>
              </td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserInformation;
