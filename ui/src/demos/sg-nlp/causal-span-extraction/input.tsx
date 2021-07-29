import * as React from "react";
import InputField, {
  InputFieldDiv,
  InputFieldProps,
} from "../../../components/input/InputField";
import Dropdown, { DropDownOptions } from "../../../components/input/Dropdown";
import TableInput, {
  TableInputProps,
} from "../../../components/input/TableInput";
import { Tooltip } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

const emotions: DropDownOptions[] = [
  { value: "happiness", display: "Happiness" },
  { value: "anger", display: "Anger" },
  { value: "surprise", display: "Surprise" },
  { value: "sadness", display: "Sadness" },
  { value: "disgust", display: "Disgust" },
  { value: "fear", display: "Fear" },
];

const EmotionDropDowns = ({ value, updateField }: InputFieldProps) => {
  React.useEffect(() => {
    // Set value as "" when website first rendered
    updateField("");
  }, []);

  const onEmotionChange = (newValue: string) => {
    updateField(newValue);
  };

  return (
    <>
      {value === undefined ? null : (
        <InputFieldDiv style={{ display: "flex" }}>
          <Dropdown
            onChange={onEmotionChange}
            value={value}
            placeholder="Select emotion"
            options={emotions}
            label="Target Utterance Emotion"
          />
        </InputFieldDiv>
      )}
    </>
  );
};

const tableInputProps: TableInputProps = {
  columnInfo: [
    {
      title: () => (
        <Tooltip title="All utterances added will be used to form the conversation context. The last utterance added will be used as the target utterance.">
          Utterance <InfoCircleOutlined />
        </Tooltip>
      ),
      dataIndex: "utterance",
    },
  ],
  label: "Utterances",
};

const inputFields: InputField[] = [
  {
    id: "utterances",
    component: TableInput,
    componentProps: tableInputProps,
  },
  {
    id: "target_utterance_emotion",
    component: EmotionDropDowns,
  },
];

export const formatPayload = (inputFields: Record<string, any>) => {
  const utterances = inputFields.utterances.map(
    (row: { key: number; utterance: string }) => {
      return row.utterance;
    }
  );
  return {
    context: utterances,
    emotion: inputFields.target_utterance_emotion,
  };
};

export default inputFields;
