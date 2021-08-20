import * as React from "react";
import { Descriptions } from "antd";
import Spin from "./Spin";
import styled from "styled-components";
import { COLORS } from "../styles";

interface ModelCardProps {
  modelApiEndpoint: string;
}

interface ModelCardItem {
  display: string | JSX.Element;
  label: string;
}

const StyledDescriptions = styled(Descriptions)`
  .ant-descriptions-item-label {
    font-weight: bold;
    background: ${COLORS.LIGHTGREY};
  }
`;

const hyperlinkText = (info: any) => {
  if (info === undefined) return;
  if (info.url) {
    return (
      <a href={info.url} target="_blank" rel="noopener">
        {info.text}
      </a>
    );
  } else {
    return info.text;
  }
};

const item = ({ label, display }: ModelCardItem) => {
  if (display === undefined) return;
  return (
    <Descriptions.Item span={2} label={label}>
      {display}
    </Descriptions.Item>
  );
};

const ModelCard = ({ modelApiEndpoint }: ModelCardProps) => {
  const [loaded, setLoaded] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [modelInfo, setModelInfo] = React.useState<any>({});

  React.useEffect(() => {
    const url = modelApiEndpoint + "/model-card";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then(
        (json) => {
          setLoaded(true);
          setModelInfo(json);
        },
        (error) => {
          setError(true);
        }
      );
  }, [modelApiEndpoint]);

  if (error) {
    return <div>Something went wrong. Please try again later.</div>;
  } else if (!loaded) {
    return <Spin size="large" />;
  } else {
    return (
      <div>
        <StyledDescriptions
          layout="horizontal"
          size="small"
          column={2}
          bordered={true}
        >
          {item({ label: "Name", display: modelInfo.name })}
          {item({ label: "Languages", display: modelInfo.languages })}
          {item({ label: "Description", display: modelInfo.description })}
          {item({ label: "Paper", display: hyperlinkText(modelInfo.paper) })}
          {item({
            label: "Training Dataset",
            display: hyperlinkText(modelInfo.trainingDataset),
          })}
          {item({
            label: "Evaluation Dataset",
            display: hyperlinkText(modelInfo.evaluationDataset),
          })}
          {item({
            label: "Evaluation Scores",
            display: modelInfo.evaluationScores,
          })}
          {item({
            label: "Training Config",
            display: hyperlinkText(modelInfo.trainingConfig),
          })}
          {item({ label: "Training Time", display: modelInfo.trainingTime })}
          {item({
            label: "Model Weights",
            display: hyperlinkText(modelInfo.modelWeights),
          })}
          {item({
            label: "Model Config",
            display: hyperlinkText(modelInfo.modelConfig),
          })}
          {item({ label: "Model Input", display: modelInfo.modelInput })}
          {item({ label: "Model Output", display: modelInfo.modelOutput })}
          {item({ label: "Model Size", display: modelInfo.modelSize })}
          {item({ label: "Inference Info", display: modelInfo.inferenceInfo })}
          {item({
            label: "Usage Scenarios",
            display: modelInfo.usageScenarios,
          })}
          {item({
            label: "Original Code",
            display: hyperlinkText(modelInfo.originalCode),
          })}
          {item({
            label: "License",
            display: hyperlinkText(modelInfo.license),
          })}
          {item({ label: "Contact", display: modelInfo.contact })}
          {item({
            label: "Additional Info",
            display: modelInfo.additionalInfo,
          })}
        </StyledDescriptions>
      </div>
    );
  }
};

export default ModelCard;
