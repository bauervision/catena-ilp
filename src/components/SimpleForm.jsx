import React from "react";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";

export function SimpleForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  const formDetailsText = (
    <div>
      <p>
        This form was created using{" "}
        <a
          href="https://www.react-hook-form.com/"
          rel="noreferrer"
          target="_blank"
        >
          React Hook Form{" "}
        </a>
        and{" "}
        <a
          href="https://react-bootstrap.github.io/"
          rel="noreferrer"
          target="_blank"
        >
          React Bootstrap.
        </a>
      </p>
      <p>
        The two libraries have overlapping features like validation but React
        Hook Forms adds additional logic like registering and tracking
        uncontrolled React Bootstrap components and handling form events easier.
        It handles the react state tracking for you and cuts down on the amound
        of code you have to write.
      </p>
    </div>
  );

  return (
    <Container className="text-start" style={{ width: "50%" }}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="First Name"
            {...register("firstName", { required: true, maxLength: 80 })}
          />
          {errors.firstName?.type === "required" && "First name is required"}
          {errors.firstName?.type === "maxLength" &&
            "First name must be less then 80 characters"}
        </Form.Group>
        <Form.Group controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Last Name"
            {...register("lastName", { required: true, maxLength: 100 })}
          />
          {errors.lastName?.type === "required" && "Last name is required"}
          {errors.lastName?.type === "maxLength" &&
            "Last name must be less then 100 characters"}
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            {...register("email", {
              required: true,
              pattern:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />

          {errors.email?.type === "required" && "Email is required"}
          {errors.email?.type === "pattern" && "Invalid Email"}
        </Form.Group>

        <Form.Group controlId="formDescription">
          <Form.Label>Bug Description</Form.Label>
          <InputGroup>
            <Form.Control
              as="textarea"
              aria-label="With textarea"
              {...register("description", { required: true })}
            />
          </InputGroup>

          {errors.description?.type === "required" && "Description is required"}

          {errors.title?.type === "required" && "Title is required"}
        </Form.Group>
        <Form.Group controlId="formDeveloper">
          <Form.Label>Are you a developer?</Form.Label>

          <Form.Check
            name="developer"
            label="Yes"
            type="radio"
            value="Yes"
            {...register("developer", { required: true })}
          />
          <Form.Check
            name="developer"
            label="No"
            type="radio"
            value="No"
            {...register("developer", { required: true })}
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
}
