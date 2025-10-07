import React, { memo, useMemo } from "react";

const Child = () => {
  const [value, setValue] = React.useState(4);
  const heavyTasks = (num) => {
    console.log("heavy task calculating");
    for (let i = 0; i < 10000000000; i++) {}
    return num * 2;
  };
  const data = useMemo(() => heavyTasks(value), [value]);
  return (
    <div>
      <button onClick={() => setValue((val) => val + 2)}>calculate</button>
      <p>Data {data}</p>
    </div>
  );
};

export default memo(Child);
