import { useState } from "react";

const useForm = (initailValues = {}) => {
  const [values, setValues] = useState(initailValues);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setValues(initailValues);
  };

  return { values, handleChange, resetForm };
};

export default useForm;
