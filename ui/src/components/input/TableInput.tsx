import * as React from "react";
import styled from "styled-components";
import Title from "antd/lib/typography/Title";
import { getPropValue, InputFieldDiv, InputFieldProps } from "./InputField";
import { Table, Popconfirm, Button } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { COLORS } from "../../styles";

export interface TableInputProps {
  columnInfo: { title: string | (() => JSX.Element); dataIndex: string }[];
  index?: "conversation";
  label?: string;
  maxRows?: number;
}

interface _TableInputProps extends InputFieldProps {
  componentProps: TableInputProps;
}

const StyledTable = styled(Table)`
  width: "100%";
  tr {
    background: ${COLORS.BACKGROUND};
  }

  .ant-table-thead > tr > th {
    padding: 5px 0px 5px 0px;
    font-weight: bold;
  }
  .ant-table-tbody > tr > td {
    padding: 5px 0px 5px 0px;
    vertical-align: top;
  }
`;

const SpeakerDiv = styled.div`
  padding-right: 5px;
  font-weight: bold;
  color: ${(props) => props.color};
`;

const TableInput = ({
  value,
  updateField,
  componentProps,
}: _TableInputProps) => {
  React.useEffect(() => {
    const defaultField: { [k: string]: any } = { key: 0 };
    componentProps.columnInfo.map((info) => {
      defaultField[info.dataIndex] = "";
    });
    updateField([defaultField]);
  }, []);

  const [keyCounter, setKeyCounter] = React.useState(0);

  const onChange =
    (key: number, columnKey: string) =>
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      // Make a copy of current data
      const tableData = value.slice();

      // Find row index of change
      const rowIndex = tableData.findIndex((row: any) => row.key === key);

      // Create new object of updated data
      const updatedRowData = {
        ...tableData[rowIndex],
        [columnKey]: e.target.value,
      };
      tableData[rowIndex] = updatedRowData;
      updateField(tableData);
    };

  const handleDelete = (index: number) => {
    const newState = [...value];
    newState.splice(index, 1);
    updateField(newState);
  };

  const handleAdd = () => {
    const newKey = Math.max(value.length, keyCounter + 1);
    setKeyCounter(newKey);
    const newData: { [k: string]: any } = { key: newKey };
    componentProps.columnInfo.map((info) => {
      newData[info.dataIndex] = "";
    });
    const newState = [...value, newData];
    updateField(newState);
  };

  const columns: any = componentProps.columnInfo.map((info) => {
    return {
      title: info.title,
      dataIndex: info.dataIndex,
      render: (_: any, record: any) => (
        <TextArea
          value={record[info.dataIndex]}
          onChange={onChange(record.key, info.dataIndex)}
          autoSize={{ minRows: 1, maxRows: 3 }}
        />
      ),
    };
  });
  // Add index column
  if (componentProps.index === "conversation") {
    columns.unshift({
      title: "Person",
      dataIndex: "person",
      render: (_: any, __: any, index: number) =>
        index % 2 == 0 ? (
          <SpeakerDiv color={"green"}>A:</SpeakerDiv>
        ) : (
          <SpeakerDiv color={"blue"}>B:</SpeakerDiv>
        ),
    });
  }
  // Add delete button column
  columns.push({
    dataIndex: "delete",
    render: (_: any, __: any, index: number) =>
      value.length >= 2 ? (
        <Popconfirm
          title="Confirm delete?"
          onConfirm={() => handleDelete(index)}
        >
          <Button>Delete</Button>
        </Popconfirm>
      ) : null,
  });

  return (
    <InputFieldDiv>
      <Title level={5}>
        {getPropValue(componentProps, "label", "Table Input")}
      </Title>
      <StyledTable dataSource={value} columns={columns} pagination={false} />
      <Button
        onClick={handleAdd}
        disabled={
          value && componentProps.maxRows
            ? value.length >= componentProps.maxRows
            : false
        }
      >
        Add a row
      </Button>
    </InputFieldDiv>
  );
};

export default TableInput;
