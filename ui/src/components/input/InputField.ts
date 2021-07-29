import styled from "styled-components";

export interface InputFieldProps {
  value: any;
  updateField: (value: any) => void;
  componentProps?: any;
}

interface InputField {
  id: string;
  component: React.FunctionComponent<InputFieldProps>;
  componentProps?: any;
}

export const InputFieldDiv = styled.div`
  margin: 16px 0px;
`;

export const getPropValue = (
  componentProps: any,
  key: string,
  default_value: any
) => {
  return componentProps && componentProps[key]
    ? componentProps[key]
    : default_value;
};

export default InputField;
