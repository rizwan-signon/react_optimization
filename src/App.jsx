import React from "react";
import MemoComponent from "./components/01MemoComponent";
import UseCallBack from "./components/UseCallBack";
import Debouncing from "./components/Debouncing";
import UseFormHook from "./components/UseFormHook";
import Login from "./components/Login";
import Practice from "./components/Practice";
import { UseTransition } from "./components/UseTransition";
import AdvancedSearch from "./components/AdvancedSearch";
import VirtualKeyboard from "./components/VirtualKeyboard";
import HomePage from "./components/HomePage";
import UseMemo from "./components/UseMemo";

import Calculator from "./components/Calculator";
import DateFilterExample from "./components/DataFilterExample";

const App = () => {
  console.log("App component rendered");
  const [count, setCount] = React.useState(0);
  return (
    <div>
      {/* <MemoComponent />
      <UseCallBack />
      <Debouncing />
      <UseFormHook />
      <Login />
      <Practice />
      <UseTransition />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        mount main component
      </button> */}

      {/* <Calculator /> */}
      {/* <AdvancedSearch /> */}
      {/* <VirtualKeyboard />
      <HomePage /> */}

      {/* <UseMemo /> */}

      <DateFilterExample />
    </div>
  );
};

export default App;
