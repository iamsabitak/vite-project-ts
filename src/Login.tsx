import React, { useState } from "react";

interface IState {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [inputValue, setInputValue] = useState<IState>({
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue({ ...inputValue, [event.target.name]: event.target.value });
  };
  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log(inputValue);
  };

  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={onHandleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
          value={inputValue.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={inputValue.password}
          onChange={handleChange}
        />
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default Login;
