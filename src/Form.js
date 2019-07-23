import React, { useState } from "react";

const Form = () => {
  const [input, addInput] = useState("");

  const changeHandler = event => {
    addInput(event.target.value);
  };

  return (
    <form>
      <label>
        Name:
        <input
          type="text"
          name="name"
          onChange={event => addInput(event.target.value)}
        ></input>
      </label>
      <label>
        Email:
        <input
          type="text"
          name="email"
          onChange={event => addInput(event.target.value)}
        ></input>
      </label>
      <label>
        Role:
        <input
          type="text"
          name="role"
          onChange={event => addInput(event.target.value)}
        ></input>
      </label>
    </form>
  );
};

export default Form;
