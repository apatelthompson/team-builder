import React, { useState } from "react";
import "./App.css";
import Form from "./Form";
import Team from "./Team";

function App() {
  const [people, setPeople] = useState([
    {
      name: "Avni Patel Thompson",
      email: "a@gsdfs.com",
      role: "Front-end engineer",
      id: 1
    },
    {
      name: "Bridget Fulton",
      email: "a@gsdfs.com",
      role: "Full-stack engineer",
      id: 2
    },
    {
      name: "Amy Paulson",
      email: "a@gsdfs.com",
      role: "Front-end engineer",
      id: 3
    }
  ]);

  const [memberToEdit, setMemberToEdit] = useState("");

  return (
    <div className="App">
      <h1>The Awesomest Team Ever</h1>
      <Form
        people={people}
        setPeople={setPeople}
        memberToEdit={memberToEdit}
        setMemberToEdit={setMemberToEdit}
      />
      <Team people={people} />
    </div>
  );
}

export default App;
