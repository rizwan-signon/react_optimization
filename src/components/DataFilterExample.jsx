import { useState } from "react";

export default function DateFilterExample() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const users = [
    { id: 1, name: "Ali", postedAt: "2025-11-20" },
    { id: 2, name: "Zara", postedAt: "2025-10-10" },
    { id: 3, name: "Ahmed", postedAt: "2025-09-05" },
    { id: 4, name: "Hamza", postedAt: "2025-11-01" },
  ];

  // Filtered result based on date range
  const filteredUsers = users.filter((user) => {
    if (!from || !to) return true; // show all if not selected

    const posted = new Date(user.postedAt);
    const start = new Date(from);
    const end = new Date(to);

    return posted >= start && posted <= end;
  });

  return (
    <div style={{ padding: 20 }}>
      <h2>Date Range Filter</h2>

      <label>
        From:{" "}
        <input
          type="date"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
      </label>

      <br />
      <br />

      <label>
        To:{" "}
        <input type="date" value={to} onChange={(e) => setTo(e.target.value)} />
      </label>

      <br />
      <br />

      <h3>Filtered Users</h3>
      {filteredUsers.length === 0 && <p>No users found in date range</p>}

      <ul>
        {filteredUsers.map((u) => (
          <li key={u.id}>
            {u.name} — {u.postedAt}
          </li>
        ))}
      </ul>
    </div>
  );
}
