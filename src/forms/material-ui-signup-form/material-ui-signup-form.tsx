import React from "react";
//
//
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
//
import {
  MaterialUIFormikField,
  MaterialUIFormikSelect,
  FormikSelectItem
} from "../../components";
//
import "./material-ui-signup-form.css";

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

const positionItems: FormikSelectItem[] = [
  {
    label: "Front End",
    value: "front_end"
  },
  {
    label: "Back End",
    value: "back_end"
  },
  {
    label: "Dev Ops",
    value: "dev_ops"
  },
  {
    label: "QA",
    value: "qa"
  }
];
export const MaterialUISignUpForm: React.FC = () => {
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
              <MaterialUIFormikField
                label="Name"
                name="name"
              ></MaterialUIFormikField>
              <MaterialUIFormikField
                label="Email"
                name="email"
              ></MaterialUIFormikField>
              <MaterialUIFormikField
                label="Password"
                name="password"
                type=" password"
              ></MaterialUIFormikField>
              <MaterialUIFormikSelect
                name="position"
                label="Position"
                items={positionItems}
              ></MaterialUIFormikSelect>
              <button type="submit" disabled={!dirty || isValid}>
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
