import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
import ExpandableText from "./components/ExpandableText";
//import "./App.css";

function App() {
  return (
    <div>
      <h1>Joe Yarnott</h1>
      <strong>Software Engineer | Product Owner | Collaborator</strong>
      <ExpandableText>
        <br />
        Accomplished Software Engineer with expertise in multiple programming
        languages and development frameworks. Current on industry trends and
        software innovations.
        <br /> &nbsp; <br />
        Skilled in Agile methodologies. Specialties: OO design and
        implementation, Database design, coding in multiple languages.
      </ExpandableText>
    </div>
  );
}

export default App;
