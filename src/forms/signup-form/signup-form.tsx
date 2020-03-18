import React from "react";
//
//
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
//
import "./signup-form.css";

interface FormValues {
  name: string;
  position: string;
}

const initialValues: FormValues = {
  name: "",
  position: ""
};

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too short")
    .required("Required"),
  position: Yup.string().required("Required")
});

export const SignUpForm: React.FC = () => {
  const handleSubmit = (values: FormValues): void => {};
  return (
    <div className="form-container">
      <h1>Sign Up</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={SignupSchema}
      >
        {({ dirty, isValid }) => {
          return (
            <Form>
              <div>
                <label>Name:</label>
                <Field name="name" as="input" autoComplete="off"></Field>
                <ErrorMessage name="name"></ErrorMessage>
              </div>
              <div>
                <label>Poisiton:</label>
                <Field
                  name="position"
                  as="select"
                  autoComplete="off"
                  placeholder="Choose your position"
                >
                  <option value="front-end">Front End</option>
                  <option value="back-end">Back End</option>
                  <option value="dev-ops">Dev Ops</option>
                  <option value="qa">QA</option>
                </Field>
                <ErrorMessage name="position"></ErrorMessage>
              </div>
              <button type="submit" disabled={!dirty || isValid}>Submit</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};