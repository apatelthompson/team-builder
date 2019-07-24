import React from "react";

const Person = props => {
  return (
    <div className="person">
      <h4>{props.name}</h4>
      <h4>{props.email}</h4>
      <h4>{props.role}</h4>
    </div>
  );
};

export default Person;
