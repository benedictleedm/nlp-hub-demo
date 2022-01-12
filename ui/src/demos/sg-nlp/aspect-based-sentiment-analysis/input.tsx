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

export const validateInputs = (inputFields: Record<string, any>) => {
  const errors: { [index: string]: string } = {};

  const aspects = inputFields["aspects"];
  const sentence = inputFields["sentence"];

  const missingAspects = aspects
    .map((aspect: string) => {
      if (!sentence.includes(aspect)) {
        return aspect;
      }
    })
    .filter((missingAspect: string) => missingAspect !== undefined);

  if (missingAspects.length > 0) {
    errors["aspects"] =
      missingAspects.join(",") +
      " cannot be found in the sentence. Please only use aspects that can be found in the sentence.";
  }

  return errors;
};

export default inputFields;
