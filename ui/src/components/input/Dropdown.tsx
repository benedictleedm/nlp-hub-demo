import { Select } from "antd";
import Title from "antd/lib/typography/Title";
import * as React from "react";

export interface DropDownOptions {
  value: string;
  display: string;
}

interface DropdownProps {
  onChange: any;
  value: string | undefined;
  placeholder: string;
  options: DropDownOptions[];
  label: string;
}

const Dropdown = ({
  onChange,
  value,
  placeholder,
  options,
  label,
}: DropdownProps) => {
  // Set inital value as undefined if ""
  if (value === "") {
    value = undefined;
  }
  return (
    <div style={{ marginRight: "12px" }}>
      <Title level={5}>{label}</Title>
      <Select
        placeholder={placeholder}
        style={{ width: "180px" }}
        onChange={onChange}
        value={value}
      >
        {options.map((option) => (
          <Select.Option value={option.value} key={option.value}>
            {option.display}
          </Select.Option>
        ))}
      </Select>
    </div>
  );
};

export default Dropdown;
