import * as React from "react";
import Title from "antd/lib/typography/Title";
import { getPropValue, InputFieldDiv, InputFieldProps } from "./InputField";
import TextArea from "antd/lib/input/TextArea";

export interface TextInputProps {
  label?: string;
  minRows?: number;
  maxRows?: number;
}

interface _TextInputProps extends InputFieldProps {
  componentProps: TextInputProps;
}

const TextInput = ({ value, updateField, componentProps }: _TextInputProps) => {
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateField(e.target.value);
  };

  return (
    <InputFieldDiv>
      <Title level={5}>
        {getPropValue(componentProps, "label", "Text Input")}
      </Title>
      <TextArea
        style={{ width: "100%" }}
        onChange={onChange}
        value={value}
        autoSize={{
          minRows: getPropValue(componentProps, "minRows", 1),
          maxRows: getPropValue(componentProps, "maxRows", 3),
        }}
      />
    </InputFieldDiv>
  );
};

export default TextInput;
