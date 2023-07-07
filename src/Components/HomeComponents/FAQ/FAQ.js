import React from "react";
import "./FAQ.scss";
import { accordionData } from "../../../ContextAPI/Data";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";

const FAQ = () => {
  return (
    <div className="FAQ">
      <div className="FAQ_text">
        <h1>Having any questions ?</h1>
        <h3>take a look at our FAQ</h3>
      </div>
      <div className="FAQ_accordion">
        <Accordion>
          {accordionData.map(({ header, content,id }) => (
            <AccordionItem header={header} key={id}>
              {content}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
