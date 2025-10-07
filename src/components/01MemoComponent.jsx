import React, { memo } from "react";

const MemoComponent = () => {
  console.log("MemoComponent rendered");
  return <div>this component will not re render uptill any prop changes</div>;
};

export default memo(MemoComponent);
