import React, { useEffect, useState } from "react";

interface IState {
  id: number;
  name: string;
  email: string;
  username: string;
  address: {
    street: string;
  };
}

const FetchApi: React.FC = () => {
  const [user, setUser] = useState<IState[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      console.log(data);
      setUser(data);
    };
    fetchData();
  }, []);
  return (
    <>
      <h1>FetchApi</h1>
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
export default FetchApi;
