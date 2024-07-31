import { useState, useEffect } from "react";
import "../App.css";
import Form from "react-bootstrap/Form";
import { SimpleForm } from "../components/SimpleForm";
// Component imports

export default function Tickets() {
  const [ticketType, setTicketType] = useState();

  useEffect(() => {
    console.log("Changed to: " + ticketType);
  }, [ticketType]);

  return (
    <div className="App">
      <div className="container vh-100">
        {/* Content */}
        <h2 className=" text-center  pt-3">Catēna Ticket Submission</h2>

        <div className="row justify-content-center">
          <Form>
            <Form.Check // prettier-ignore
              inline
              type="radio"
              id="ReportBug"
              label="Report Bug"
              name="group1"
              onChange={() => setTicketType("bug")}
            />
            <Form.Check // prettier-ignore
              inline
              type="radio"
              label="Feature Request"
              id="disabled-custom-switch"
              name="group1"
              onChange={() => setTicketType("feature")}
            />
          </Form>
        </div>
        <div className=" pt-3 mt-3">
          {ticketType === undefined && <div> Select a ticket type</div>}
          {ticketType === "bug" && (
            <div>
              <h2>Bug Report</h2>
              <SimpleForm />
            </div>
          )}

          {ticketType === "feature" && (
            <div>
              <h2>Feature Request</h2>
              <div> Fill in here</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
