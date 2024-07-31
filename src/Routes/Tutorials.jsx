import "../App.css";
// Component imports

import { AccordionC } from "../components/Accordion";

export default function Tutorials() {
  return (
    <div className="App">
      <div className="container vh-100">
        <h2 className=" pt-3">Catēna Tutorials</h2>

        <AccordionC title1={"Catēna Tutorials"} />
      </div>
    </div>
  );
}
