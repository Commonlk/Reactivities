import React from "react";
import { useField } from "formik";
import { Form, Label, TextArea } from "semantic-ui-react";

interface Props {
  placeholder: string;
  name: string;
  rows: number;
  label?: string;
}

const MyTextArea = (props: Props) => {
  const [field, meta] = useField(props.name);

  return (
    <Form.Field error={meta.touched && !!meta.error}>
      <Label>{props.label}</Label>
      <TextArea {...field} {...props} />
      {meta.touched && meta.error ? (
        <Label basic color="red">
          {meta.error}
        </Label>
      ) : null}
    </Form.Field>
  );
};

export default MyTextArea;
