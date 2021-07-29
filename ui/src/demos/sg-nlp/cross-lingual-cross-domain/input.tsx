import * as React from "react";
import InputField, {
  InputFieldDiv,
  InputFieldProps,
} from "../../../components/input/InputField";
import TextInput from "../../../components/input/TextInput";
import Dropdown, {DropDownOptions} from "../../../components/input/Dropdown";

const targetLanguages: DropDownOptions[] = [
  { value: "de", display: "German" },
  { value: "fr", display: "French" },
  { value: "jp", display: "Japanese" },
];

const targetDomains: DropDownOptions[] = [
  { value: "books", display: "Books" },
  { value: "dvd", display: "DVD" },
  { value: "music", display: "Music" },
];

const TargetDropdowns = ({ value, updateField }: InputFieldProps) => {
  React.useEffect(() => {
    updateField({ target_language: undefined, target_domain: undefined });
  }, []);

  const onTargetLanguageChange = (newValue: string) => {
    updateField({ ...value, target_language: newValue });
  };

  const onTargetDomainChange = (newValue: string) => {
    updateField({ ...value, target_domain: newValue });
  };

  return (
    <>
      {value === undefined ? null : (
        <InputFieldDiv style={{ display: "flex" }}>
          <Dropdown
            onChange={onTargetLanguageChange}
            value={value.target_language}
            placeholder="Select language"
            options={targetLanguages}
            label="Target Language"
          />
          <Dropdown
            onChange={onTargetDomainChange}
            value={value.target_domain}
            placeholder="Select domain"
            options={targetDomains}
            label="Target Domain"
          />
        </InputFieldDiv>
      )}
    </>
  );
};

const inputFields: InputField[] = [
  {
    id: "text",
    component: TextInput,
  },
  {
    id: "target_dropdown",
    component: TargetDropdowns,
  },
];

export const formatPayload = (inputFields: Record<string, any>) => {
  return {
    text: inputFields.text,
    target_language: inputFields.target_dropdown["target_language"],
    target_domain: inputFields.target_dropdown["target_domain"],
  };
};

export default inputFields;
