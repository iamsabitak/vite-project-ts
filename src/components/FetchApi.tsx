import React, { useEffect, useState } from "react";
import UserInformation from "./UserInformation";

export interface IState {
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
      <UserInformation user={user} />
    </>
  );
};
export default FetchApi;
