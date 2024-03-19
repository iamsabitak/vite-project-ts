import React from "react";
// import Counter from "./Counter";
import Customer from "./Customer";

const App: React.FC = () => {
  return (
    <div>
      {/* <Counter /> */}
      <Customer name="peter" email="sabitakhadka091@gmail.com" age={10} />
    </div>
  );
};

export default App;
