import React, { useEffect, useState } from "react";

interface User {
  firstName: string;
  lastName: string;
  age: number;
  id: number;
}

const ApiHandler: React.FC = () => {
  const [user, setUser] = useState<User[]>([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      setUser(data.users);
    };
    fetchApi();
  }, []);

  return (
    <div>
      ApiHandler
      {user.map((data) => {
        return <li>{data.firstName}</li>;
      })}
    </div>
  );
};

export default ApiHandler;
