import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { IState } from "../context/UserContext";

type UPARAM = { id: string };
const SingleUser: React.FC = () => {
  const [user, setUser] = useState<IState | null>();
  const { id } = useParams<UPARAM>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      const data = await response.json();
      console.log(data);
      setUser(data);
    };
    fetchData();
  }, [setUser, id]);
  if (!user) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <h1>Single User</h1>
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
          <tr key={user.id}>
            <td scope="col">{user.username}</td>
            <td scope="col">{user.name}</td>
            <td scope="col">{user.email}</td>
            <td scope="col">{user.address.city}</td>
          </tr>
        </tbody>
        <Link to="/" className="btn btn-success">
          Go Back
        </Link>
      </table>
    </>
  );
};
export default SingleUser;
