import React, { useState, useMemo } from "react";
import { Students } from "../utils/students";

const AdvancedSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGender, setSelectedGender] = useState("All");
  const [sortOrder, setSortOrder] = useState("asc"); // 'asc' or 'desc'

  const filteredStudents = useMemo(() => {
    let result = Students;

    // Filter by Search Term
    if (searchTerm) {
      const lowerTerm = searchTerm.toLowerCase();
      result = result.filter(
        (student) =>
          student.first_name.toLowerCase().includes(lowerTerm) ||
          student.last_name.toLowerCase().includes(lowerTerm) ||
          student.email.toLowerCase().includes(lowerTerm)
      );
    }

    // Filter by Gender
    if (selectedGender !== "All") {
      result = result.filter((student) => student.gender === selectedGender);
    }

    // Sort
    result = [...result].sort((a, b) => {
      const nameA = `${a.first_name} ${a.last_name}`.toLowerCase();
      const nameB = `${b.first_name} ${b.last_name}`.toLowerCase();
      if (sortOrder === "asc") {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });

    return result;
  }, [searchTerm, selectedGender, sortOrder]);

  const uniqueGenders = ["All", ...new Set(Students.map((s) => s.gender))];

  return (
    <div className="advanced-search-container">
      <h1 className="page-title">Student Directory</h1>

      <div className="controls-wrapper">
        <div className="search-box">
          <i className="search-icon">🔍</i>
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="filters">
          <select
            value={selectedGender}
            onChange={(e) => setSelectedGender(e.target.value)}
            className="filter-select"
          >
            {uniqueGenders.map((gender) => (
              <option key={gender} value={gender}>
                {gender}
              </option>
            ))}
          </select>

          <button
            onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
            className="sort-button"
          >
            Sort: {sortOrder === "asc" ? "A-Z" : "Z-A"}
          </button>
        </div>
      </div>

      <div className="results-info">
        Found {filteredStudents.length} results
      </div>

      <div className="students-grid">
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student) => (
            <div key={student.id} className="student-card">
              <div className="student-avatar">
                {student.first_name[0]}
                {student.last_name[0]}
              </div>
              <div className="student-details">
                <h3>
                  {student.first_name} {student.last_name}
                </h3>
                <p className="student-email">{student.email}</p>
                <span className="student-gender">{student.gender}</span>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <p>No students found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdvancedSearch;
