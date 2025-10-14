import React from "react";
import useForm from "../hooks/useForm";
import useVirtualKeyboard from "../hooks/useVirtualKeyboard";

const Login = () => {
  const { values, handleChange, resetForm } = useForm({
    email: "",
    password: "",
  });
  console.log(values);
  const { showKeyboard, KeyboardUI } = useVirtualKeyboard();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", values);
  };

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "80px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={values.email}
            onChange={handleChange}
            onFocus={() => showKeyboard("email", values.email, handleChange)}
            placeholder="Enter your email"
            style={{
              width: "100%",
              padding: "8px",
              marginTop: "5px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onFocus={() =>
              showKeyboard("password", values.password, handleChange)
            }
            placeholder="Enter your password"
            style={{
              width: "100%",
              padding: "8px",
              marginTop: "5px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Login
        </button>

        <button
          type="button"
          onClick={resetForm}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "8px",
            backgroundColor: "#ddd",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Reset
        </button>
      </form>

      {KeyboardUI}
    </div>
  );
};

export default Login;
