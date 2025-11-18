import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);

  const expensiveCalculation = useMemo(() => {
    let total = 0;
    for (let i = 0; i < 1.2e3; i++) {
      total += i;
    }
    return total;
  }, [c]); // runs once

  console.log(expensiveCalculation); // NOT a function

  return (
    <div>
      <button onClick={() => setCount(count + 1)}></button>
      <h4>{count}</h4>
    </div>
  );
};

export default UseMemo;
