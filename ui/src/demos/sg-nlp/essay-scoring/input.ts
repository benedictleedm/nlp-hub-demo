import InputField from "../../../components/input/InputField";
import TextInput from "../../../components/input/TextInput";

const inputFields: InputField[] = [
  {
    id: "essay",
    component: TextInput,
    componentProps: { label: "Essay", minRows: 3, maxRows: 8 }
  },
];

export default inputFields;
