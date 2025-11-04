import React, { useState } from "react";
import { Students } from "../utils/students";
const AdvancedSearch = () => {
  const [data, setData] = useState(Students);
  const [query, setQuery] = useState("");
  const filteredData = data.filter((item) =>
    item.first_name.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div>
      <hr />
      <input
        type="text"
        placeholder="text"
        onChange={(e) => setQuery(e.target.value)}
      />

      <div>
        {filteredData.map((item) => (
          <div key={item.id}>
            {item.id} - {item.first_name} - {item.email}
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default AdvancedSearch;
