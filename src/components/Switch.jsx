import Form from "react-bootstrap/Form";

export function Switch() {
  return (
    <Form>
      <Form.Check // prettier-ignore
        inline
        type="radio"
        id="ReportBug"
        label="Report Bug"
        name="group1"
      />
      <Form.Check // prettier-ignore
        inline
        type="radio"
        label="Feature Request"
        id="disabled-custom-switch"
        name="group1"
      />
    </Form>
  );
}
