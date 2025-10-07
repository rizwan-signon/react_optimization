import React from "react";
import Child from "./components/Child";

const App = () => {
  console.log("App component rendered");
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <Child />
      <p>count in app is {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click{" "}
      </button>
    </div>
  );
};

export default App;
