import * as React from "react";
import { Divider, Tabs } from "antd";
import Title from "antd/lib/typography/Title";
import styled from "styled-components";
import { DemoConfig } from "../demos/demos";
import DemoInput from "./input/DemoInput";
import ModelSelect from "./ModelSelect";
import InputField from "./input/InputField";
import DemoOutput from "./output/DemoOutput";
import { COLORS, PAGE_WIDTH } from "../styles";
import ModelCard from "./ModelCard";
import ModelUsage from "./ModelUsage";
import TagManager from "react-gtm-module";

interface DemoProps {
  config: DemoConfig;
  examples: Record<string, string>[];
  inputFields: InputField[];
  Output: any;
  formatPayload?: (inputFields: Record<string, any>) => Record<string, any>;
}

const Pane = styled.div`
  padding: 50px;
  background-color: ${COLORS.BACKGROUND};
  width: ${PAGE_WIDTH};
`;

const TaskDescription = styled.div`
  background-color: ${COLORS.BACKGROUND};
  text-align: justify;
  text-justify: inter-word;
  padding-bottom: 50px;
`;

const DemoDivider = styled(Divider)`
  margin: 0px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: ${COLORS.BACKGROUND};
`;

const Demo = ({
  config,
  examples,
  inputFields,
  Output,
  formatPayload,
}: DemoProps) => {
  const [selectedModel, setSelectedModel] = React.useState(config.models[0]);
  const [outputValues, setOutputValues] = React.useState({});
  const [outputState, setOutputState] = React.useState("empty");

  const handleModelChange = (modelId: string) => {
    const selectedModel = config.models.filter(
      (model) => model.id === modelId
    )[0];

    setSelectedModel(selectedModel);
  };

  const modelApiEndpoint = (): string => {
    return selectedModel.apiEndpoint
      ? selectedModel.apiEndpoint
      : `/api/${config.taskId}/${selectedModel.id}`;
  };

  const runModel = (inputs: Record<string, any>) => {
    const url = modelApiEndpoint() + `/predict`;

    const formattedInputs = formatPayload ? formatPayload(inputs) : inputs;
    setOutputState("loading");
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formattedInputs),
    })
      .then((response) => {
        if (response.status !== 200) {
          setOutputState("error");
          throw Error("Predict call failed.");
        }
        return response.json();
      })
      .then((json) => {
        setOutputValues(json);
        setOutputState("received");
      });

    TagManager.dataLayer({
      dataLayer: {
        event: "modelRunApi",
        taskId: config.taskId,
        modelId: selectedModel.id,
      },
    });
  };

  return (
    <>
      <Pane>
        <Title>{config.title}</Title>
        <TaskDescription>{config.desc}</TaskDescription>

        <ModelSelect
          selectedModel={selectedModel}
          models={config.models}
          handleModelChange={handleModelChange}
        />

        <Tabs>
          <Tabs.TabPane tab="Demo" key="demo">
            <DemoInput
              inputFields={inputFields}
              examples={examples}
              runModel={runModel}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Model Card" key="model_card">
            <ModelCard modelApiEndpoint={modelApiEndpoint()} />
          </Tabs.TabPane>
          {selectedModel.usage && (
            <Tabs.TabPane tab="Model Usage" key="model_usage">
              <ModelUsage usage={selectedModel.usage} />
            </Tabs.TabPane>
          )}
        </Tabs>
      </Pane>

      <DemoDivider />

      <Pane>
        <DemoOutput outputState={outputState}>
          <Output responseData={outputValues} />
        </DemoOutput>
      </Pane>
    </>
  );
};

export default Demo;
