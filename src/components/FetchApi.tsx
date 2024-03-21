import React, { useEffect } from "react";
import UserInformation from "./UserInformation";
import useUserContext from "../context/useUserContext";

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
  const { setUser } = useUserContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUser(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, [setUser]);

  return (
    <>
      <h1>FetchApi</h1>
      <UserInformation />
    </>
  );
};

export default FetchApi;
