import InputField from "../../../components/input/InputField";
import TextInput from "../../../components/input/TextInput";
import Tokens from "../../../components/input/Tokens";

const inputFields: InputField[] = [
  {
    id: "aspects",
    component: Tokens,
    componentProps: { label: "Aspects" },
  },
  {
    id: "sentence",
    component: TextInput,
    componentProps: { label: "Sentence", minRows: 1, maxRows: 3 },
  },
];

export default inputFields;
