import React, { useState } from "react";

const HomePage = () => {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [age, setAge] = useState("");

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "auto" }}>
      <h2>Demo Form (Global Virtual Keyboard)</h2>

      <div style={{ marginBottom: "1rem" }}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: "100%", padding: "8px", fontSize: "16px" }}
        />
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label>Age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          style={{ width: "100%", padding: "8px", fontSize: "16px" }}
        />
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label>Bio:</label>
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          rows={4}
          style={{ width: "100%", padding: "8px", fontSize: "16px" }}
        />
      </div>
    </div>
  );
};

export default HomePage;
