import React from "react";

import Counter from "./components/Counter";
import Customer from "./components/Customer";
import MemoizationExample from "./components/MemoizationExample";
import Login from "./components/Login";
import FetchApi from "./components/FetchApi";

import { UserProvider } from "./context/UserContext";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <UserProvider>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<FetchApi />} />
        <Route path="/counter" element={<Counter />} />
        <Route
          path="/customer"
          element={
            <Customer name="peter" email="sabitakhadka091@gmail.com" age={10} />
          }
        />
        <Route path="/memoizationexample" element={<MemoizationExample />} />
      </Routes>
    </UserProvider>
  );
};

export default App;
