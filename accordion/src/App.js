import React from "react";
import Accordion from "./Accordion";
import { accordionData } from "./content";
import styles from "./style.css";

const App = () => {
  return (
    <div>
      <h1>React Accordion Component</h1>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default App;
