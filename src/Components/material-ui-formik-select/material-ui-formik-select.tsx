import React, { ReactNode } from "react";
//
import {
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  FormHelperText
} from "@material-ui/core";
import { Field, ErrorMessage } from "formik";
//
import "./material-ui-formik-select.css";

export interface FormikSelectItem {
  label: string;
  value: string;
}

export interface FormikSelectProps {
  label: string;
  name: string;
  items: FormikSelectItem[];
}

export interface MaterialUISelectFiedlProps {
  errorString?: string;
  children: ReactNode;
  label: string;
}

export const MaterialUIFormikSelectField: React.FC<MaterialUISelectFiedlProps> = props => {
  const { label, children, errorString } = props;

  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select>{children}</Select>
      <FormHelperText>{errorString}</FormHelperText>
    </FormControl>
  );
};

export const MaterialUIFormikSelect: React.FC<FormikSelectProps> = ({
  name,
  items,
  label
}) => {
  return (
    <div className="formik-select">
      {/* <MaterialUIFormikSelectField label={label} errorString="Test ">
      {
        items.map((item)=>(
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))
      }

      </MaterialUIFormikSelectField> */}

      <Field
        name={name}
        as={MaterialUIFormikSelectField}
        label={label}
        errorString={<ErrorMessage name={name} />}
      >
        {items.map(item => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Field>
    </div>
  );
};
