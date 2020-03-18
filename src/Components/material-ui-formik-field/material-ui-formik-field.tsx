import React from "react";
//
import { TextField } from "@material-ui/core";
import { Field, ErrorMessage} from "formik";
//
import "./material-ui-formik-field.css";

interface FormikFieldProps {
  label: string;
  name: string;
  type?:string
}

export function MaterialUIFormikField(props: FormikFieldProps) {
  const { name, label , type="text"} = props;

  return (
    <div className="formik-field">
      <Field
        as={TextField}
        name={name}
        label={label}
        fullWidth
        required
        autoComplete="off"
        type={type}
        helperText = {<ErrorMessage name={name}></ErrorMessage>}
      ></Field>
    </div>
  );
}
