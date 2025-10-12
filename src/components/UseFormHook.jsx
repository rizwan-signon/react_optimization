import React from "react";
import useForm from "../hooks/useForm";

const UseFormHook = () => {
  const { values, handleChange, resetForm } = useForm({
    name: "",
    email: "",
    password: "",
  });
  console.log(values);
  return (
    <div>
      <hr />
      <h2>UseFormHook</h2>
      <input
        value={values?.name}
        onChange={handleChange}
        type="text"
        placeholder="type name"
        name="name"
      />
      <input
        value={values?.email}
        onChange={handleChange}
        type="text"
        placeholder="type email"
        name="email"
      />
      <input
        value={values?.password}
        onChange={handleChange}
        type="password"
        placeholder="type password"
        name="password"
      />
      <button>submit</button>
      <button onClick={resetForm}>reset</button>
      <hr />
    </div>
  );
};

export default UseFormHook;
