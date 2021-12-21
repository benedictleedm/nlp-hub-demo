import * as React from "react";
import Title from "antd/lib/typography/Title";
import { getPropValue, InputFieldDiv, InputFieldProps } from "./InputField";
import { Tag, Input } from "antd";

import { PlusOutlined } from "@ant-design/icons";

const Tokens = ({ value, updateField, componentProps }: InputFieldProps) => {
  // value for this component is a list of tokens

  React.useEffect(() => {
    updateField([]);
  }, []);
  const [inputValue, setInputValue] = React.useState("");

  const handleClose = (removedTag: string) => {
    const newTokens = value.filter((tag: string) => tag !== removedTag);
    updateField(newTokens);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    if (inputValue && value.indexOf(inputValue) === -1) {
      updateField([...value, inputValue]);
      setInputValue("");
    }
  };

  return (
    <InputFieldDiv>
      <Title level={5}>{getPropValue(componentProps, "label", "Tokens")}</Title>
      <div style={{ display: "flex", paddingBottom: "12px" }}>
        <div
          style={{
            whiteSpace: "nowrap",
            display: "flex",
            alignItems: "center",
            paddingRight: "16px",
          }}
        >
          <PlusOutlined style={{ paddingRight: "3px" }} /> Add new token:
        </div>
        <Input
          value={inputValue}
          onChange={handleInputChange}
          onPressEnter={handleInputConfirm}
        />
      </div>
      <div>
        {value &&
          value.map((tag: any, index: any) => {
            return (
              <Tag
                style={{ fontSize: "16px" }}
                key={tag}
                closable
                onClose={() => handleClose(tag)}
              >
                {tag}
              </Tag>
            );
          })}
      </div>
    </InputFieldDiv>
  );
};

export default Tokens;
