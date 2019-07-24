import React, { useState, useEffect } from "react";

const Form = props => {
  const [input, addInput] = useState({
    name: "",
    email: "",
    role: "Front-end Engineer"
  });

  function changeHandler(event) {
    const updatedInput = { ...input, [event.target.name]: event.target.value };
    addInput(updatedInput);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.setPeople([...props.people, input]);
    console.log("input", input);
  }

  // useEffect(() => {
  //   setMemberToEdit;
  // });

  return (
    <div className="form">
      <h3>Want to join the team? Share your info:</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label name="username" className="col-sm-2 col-form-label">
            Name:
            <div className="col-sm-10">
              <input
                type="text"
                name="name"
                placeholder="Please enter your name"
                onChange={changeHandler}
              ></input>
            </div>
          </label>
        </div>

        <div className="form-group">
          <label name="email" className="col-sm-2 col-form-label">
            Email:
            <div className="col-sm-10">
              <input
                type="text"
                name="email"
                placeholder="Please enter your email"
                onChange={changeHandler}
              ></input>
            </div>
          </label>
        </div>

        <div className="form-group">
          <label name="role" className="col-sm-2 col-form-label">
            Role:
            <div className="col-sm-10">
              <select name="role" onChange={changeHandler}>
                <option value="Front-end Engineer">Front-end Engineer</option>
                <option value="Back-end Engineer">Back-end Engineer</option>
                <option value="Full-stack Engineer">Full-stack Engineer</option>
              </select>
            </div>
          </label>
        </div>
        <button type="submit">Add Team Member</button>
      </form>
    </div>
  );
};

export default Form;
