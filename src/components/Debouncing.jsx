import React, { useState, useEffect } from "react";

const Debouncing = () => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  // Debouncing logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 800);

    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    if (debouncedQuery) {
      console.log("Fetching data for:", debouncedQuery);
    }
  }, [debouncedQuery]);

  return (
    <div style={{ background: "green" }}>
      <hr />
      <h3>Debounced Search Example</h3>
      <input
        type="text"
        placeholder="Type to search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          width: "300px",
          padding: "8px",
          fontSize: "16px",
        }}
      />
      <hr />
    </div>
  );
};

export default Debouncing;
