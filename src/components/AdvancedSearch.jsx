import React, { useState } from "react";
import { Students } from "../utils/students";
const AdvancedSearch = () => {
  const [data, setData] = useState(Students);
  const [query, setQuery] = useState("");
  const fruits = [
    "apple",
    "banana",
    "orange",
    "mango",
    "grape",
    "pineapple",
    "peach",
    "kiwi",
    "strawberry",
    "blueberry",
  ];
  return <div></div>;
};

export default AdvancedSearch;
