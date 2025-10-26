import React, { memo, useCallback, useState } from "react";

const Child = memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Increment</button>;
});

const UseCallBack = () => {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(false);

  console.log("usecallback parent rendered");

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div style={{ background: "maroon" }}>
      <hr />
      <h3>Count: {count}</h3>
      <Child onClick={increment} />

      <button onClick={() => setOther(!other)}>Toggle Other</button>
      <p>Other: {other.toString()}</p>
      <hr />
    </div>
  );
};

export default UseCallBack;
