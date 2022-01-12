import * as React from "react";
import styled from "styled-components";
import { Button, Select } from "antd";
import Title from "antd/lib/typography/Title";
import InputField, { InputFieldDiv } from "./InputField";
import { COLORS } from "../../styles";

interface DemoInputProps {
  inputFields: InputField[];
  examples: Record<string, string>[];
  runModel: (input: Record<string, any>) => void;
  errors: Record<string, string>;
}

const RunButton = styled(Button)`
  margin-top: 20px;
  background-color: ${COLORS.BR.PRIMARY};
  border-radius: 3px;
  width: auto;
  padding-left: 20px;
  padding-right: 20px;
  height: 36px;
  border: none;
  &:hover {
    background-color: ${COLORS.TO.PRIMARY};
  }
  &:focus {
    background-color: ${COLORS.BR.PRIMARY};
  }
`;

const DemoInput = ({ inputFields, examples, runModel, errors }: DemoInputProps) => {
  const [inputs, setInputs] = React.useState<Record<string, any>>({});

  const updateField = (fieldId: string) => (value: any) => {
    setInputs((prevFields) => ({
      ...prevFields,
      [fieldId]: value,
    }));
  };

  const handleExampleChange = (exampleIndex: number) => {
    const selectedExample = examples[exampleIndex];

    inputFields.map((field) => {
      updateField(field.id)(selectedExample[field.id]);
    });
  };

  return (
    <>
      <InputFieldDiv>
        <Title level={5}>Example Input</Title>
        <Select
          style={{ width: "100%" }}
          placeholder="Input your own text or select an example here."
          onChange={handleExampleChange}
        >
          {examples.map((example, idx) => (
            <Select.Option key={idx} value={idx}>
              {example.display}
            </Select.Option>
          ))}
        </Select>
      </InputFieldDiv>

      {inputFields.map((field) => (
        <field.component
          key={field.id}
          updateField={updateField(field.id)}
          value={inputs[field.id]}
          componentProps={field.componentProps}
          error={errors[field.id] ? errors[field.id] : ""}
        />
      ))}

      <RunButton
        type="primary"
        onClick={() => runModel(inputs)}
        id="run-model-button"
      >
        Run Model
      </RunButton>
    </>
  );
};

export default DemoInput;
