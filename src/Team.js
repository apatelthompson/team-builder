import React from "react";
import Person from "./Person";

const Team = props => {
  return (
    <div className="team-members">
      {props.people.map(item => (
        <Person
          key={item.id}
          name={item.name}
          email={item.email}
          role={item.role}
        />
      ))}
    </div>
  );
};

export default Team;
