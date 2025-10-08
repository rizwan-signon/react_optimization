import React from "react";
import MemoComponent from "./components/01MemoComponent";
import UseCallBack from "./components/UseCallBack";
import Debouncing from "./components/Debouncing";

const App = () => {
  console.log("App component rendered");
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <MemoComponent />
      <UseCallBack />
      <Debouncing />
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
