import React from "react";
// import Counter from "./components/Counter";
// import Customer from "./components/Customer";
// import Login from "./components/Login";
// import MemoizationExample from "./components/MemoizationExample";
import FetchApi from "./components/FetchApi";
import { UserProvider } from "./context/UserContext";

const App: React.FC = () => {
  return (
    <UserProvider>
      {/* <Counter /> */}
      {/* <Customer name="peter" email="sabitakhadka091@gmail.com" age={10} /> */}
      {/* <Login /> */}
      {/* <MemoizationExample /> */}
      <FetchApi />
    </UserProvider>
  );
};

export default App;
