import React from "react";
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

export function MaterialUIFormikSelect(props: FormikSelectProps) {
  const { name, label, items } = props;

  return (
    <div className="formik-select">
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select>
          {items.map((item: FormikSelectItem) => (
            <MenuItem key={item.value}>{item.label}</MenuItem>
          ))}
        </Select>
        <FormHelperText>""</FormHelperText>
      </FormControl>
    </div>
  );
}
