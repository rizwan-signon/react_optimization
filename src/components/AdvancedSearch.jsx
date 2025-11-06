import React, { useState } from "react";
import { Students } from "../utils/students";
const AdvancedSearch = () => {
  const [data, setData] = useState(Students);
  const [query, setQuery] = useState("");
  const fruits = ["apple", "banana", "orange", "apple", "kiwi"];
  return (
    <div>
      {fruits.map((fruit, index) => (
        <div key={index}>{fruit}</div>
      ))}
    </div>
  );
};

export default AdvancedSearch;
