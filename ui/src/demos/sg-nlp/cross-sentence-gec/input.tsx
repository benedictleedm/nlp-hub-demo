import * as React from "react";
import InputField from "../../../components/input/InputField";
import TextInput from "../../../components/input/TextInput";

const inputFields: InputField[] = [
  {
    id: "text",
    component: TextInput,
    componentProps: { label: "Original Sentences", minRows: 3, maxRows: 8 },
  },
];

export default inputFields;
