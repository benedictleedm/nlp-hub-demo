import * as React from "react";
import { Select } from "antd";
import Title from "antd/lib/typography/Title";
import styled from "styled-components";
import { ModelConfig } from "../demos/models";

interface ModelSelectProps {
  selectedModel: ModelConfig;
  models: ModelConfig[];
  handleModelChange: (modelId: string) => void;
}

const ModelName = styled.div`
  font-weight: bold;
`;

const ModelDescription = styled.div`
  white-space: break-spaces;
  max-width: 80%;
`;

const SelectedModelDesc = styled.div`
  padding: 5px 10px 5px 10px;
`;

const ModelSelect = ({
  handleModelChange,
  selectedModel,
  models,
}: ModelSelectProps) => {
  return (
    <>
      <Title style={{ width: "100%" }} level={5}>Model</Title>
      <Select
        style={{ width: "100%" }}
        onChange={handleModelChange}
        value={selectedModel.id}
      >
        {models.map((model) => (
          <Select.Option
            key={model.id}
            value={model.id}
            label={model.displayName}
          >
            <ModelName>{model.displayName}</ModelName>
            <ModelDescription>{model.desc}</ModelDescription>
          </Select.Option>
        ))}
      </Select>
      <SelectedModelDesc>{selectedModel.desc}</SelectedModelDesc>
    </>
  );
};

export default ModelSelect;
