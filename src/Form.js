import React, { useState } from "react";

const Form = () => {
  const [input, addInput] = useState({ name: "", email: "", role: "" });

  function changeHandler(event) {
    const updatedInput = { ...input, [event.target.name]: event.target.value };
    console.log(
      "handleChange",
      event.target.name,
      event.target.value,
      updatedInput
    );
    addInput(updatedInput);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("input", input);
  }

  return (
    <div classname="form">
      <h1>Please meet the Team</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="username" className="col-sm-2 col-form-label">
            Name:
            <div className="col-sm-10">
              <input
                type="text"
                name="name"
                placeholder="Please enter your name"
                value={input.name}
                onChange={changeHandler}
              ></input>
            </div>
          </label>
        </div>

        <div className="form-group">
          <label for="email" className="col-sm-2 col-form-label">
            Email:
            <div className="col-sm-10">
              <input
                type="text"
                name="email"
                onChange={event => addInput(event.target.value)}
              ></input>
            </div>
          </label>
        </div>

        <div className="form-group">
          <label for="role" className="col-sm-2 col-form-label">
            Role:
            <div className="col-sm-10">
              <input
                type="text"
                name="role"
                onChange={event => addInput(event.target.value)}
              ></input>
            </div>
          </label>
        </div>
      </form>
      <button>Add Team Member</button>
    </div>
  );
};

export default Form;
