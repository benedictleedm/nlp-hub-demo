import InputField from "../../../components/input/InputField";
import TextInput from "../../../components/input/TextInput";

const inputFields: InputField[] = [
  {
    id: "sentence",
    component: TextInput,
    componentProps: { label: "Sentence", minRows: 1, maxRows: 3 },
  },
];

export default inputFields;
