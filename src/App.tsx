import React from "react";
// import Counter from "./Counter";
// import Customer from "./Customer";
import Login from "./Login";
import MemoizationExample from "./MemoizationExample";

const App: React.FC = () => {
  return (
    <div>
      {/* <Counter /> */}
      {/* <Customer name="peter" email="sabitakhadka091@gmail.com" age={10} /> */}
      <Login />
      <MemoizationExample />
    </div>
  );
};

export default App;
