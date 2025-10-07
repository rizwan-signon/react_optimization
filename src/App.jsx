import React from "react";
import MemoComponent from "./components/01MemoComponent";

const App = () => {
  console.log("App component rendered");
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <MemoComponent />

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        mount main component
      </button>
    </div>
  );
};

export default App;
