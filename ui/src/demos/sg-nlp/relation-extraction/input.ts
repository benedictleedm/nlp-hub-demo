import InputField from "../../../components/input/InputField";
import TextInput from "../../../components/input/TextInput";

const inputFields: InputField[] = [
  {
    id: "document",
    component: TextInput,
    componentProps: { label: "Document", minRows: 3, maxRows: 8 },
  },
];

export default inputFields;
