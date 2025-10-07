import React, { memo } from "react";

const MemoComponent = ({}) => {
  console.log("MemoComponent rendered");

  return (
    <div>
      <hr />
      01:this component will not re render uptill any prop changes(memo)
      <hr />
    </div>
  );
};

export default memo(MemoComponent);
