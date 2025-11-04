import React, { useState } from "react";

export const UseTransition = () => {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState(items);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    // Expensive operation
    const filteredItems = items.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setFiltered(filteredItems);
  };

  return (
    <div>
      <input value={query} onChange={handleChange} placeholder="Search..." />
      <ul>
        {filtered.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
