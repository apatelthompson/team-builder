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

  return (
    <div className="App">
      <h1>Please meet the Team</h1>
      <Team people={people} />
      <Form people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
