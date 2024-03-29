import React, { useEffect } from "react";
// import UserInformation from "./UserInformation";
import useUserContext from "../context/useUserContext";
import SelectComponent from "./SelectCOmponent";

const FetchApi: React.FC = () => {
  const { setUser } = useUserContext();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      const data = await response.json();
      console.log(data);
      setUser(data);
    };
    fetchData();
  }, [setUser]);
  return (
    <>
      {/* <h1>FetchApi</h1> */}
      {/* <UserInformation /> */}
      <SelectComponent />
    </>
  );
};
export default FetchApi;
