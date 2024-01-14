import { useState, ChangeEvent } from "react";

export function FormComponent() {
  const [value, setValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setValue(event.target.value);
  };

  return <input type="text" value={value} onChange={handleChange} />;
}
