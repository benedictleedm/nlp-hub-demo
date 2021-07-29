import { InfoCircleOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import * as React from "react";
import InputField from "../../../components/input/InputField";
import TextInput from "../../../components/input/TextInput";
import TableInput, {
  TableInputProps,
} from "../../../components/input/TableInput";

const tableInputProps: TableInputProps = {
  label: "Questions and Answers",
  columnInfo: [
    { title: "Question", dataIndex: "question" },
    {
      title: () => (
        <Tooltip title="If there is no answer to be found in the context, leave the field blank.">
          Answer <InfoCircleOutlined />
        </Tooltip>
      ),
      dataIndex: "answer",
    },
  ],
  maxRows: 3,
};

const inputFields: InputField[] = [
  {
    id: "context",
    component: TextInput,
    componentProps: { label: "Context", minRows: 3, maxRows: 5 },
  },
  {
    id: "questions_and_answers",
    component: TableInput,
    componentProps: tableInputProps,
  },
  {
    id: "candidate",
    component: TextInput,
    componentProps: { label: "Candidate Question", minRows: 1 },
  },
];

export default inputFields;
