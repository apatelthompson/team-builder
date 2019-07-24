import React from "react";

const Person = props => {
  return (
    <div className="person">
      <h3 className="name-card">{props.name}</h3>
      <h4 className="email-card">{props.email}</h4>
      <h4 className="role-card">{props.role}</h4>
      <button className="edit-button">Edit</button>
    </div>
  );
};

export default Person;
