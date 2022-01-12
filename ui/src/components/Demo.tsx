import * as React from "react";
import { Divider, Tabs } from "antd";
import Title from "antd/lib/typography/Title";
import styled from "styled-components";
import TagManager from "react-gtm-module";
import { ExclamationCircleOutlined } from "@ant-design/icons";

import { DemoConfig } from "../demos/demos";
import DemoInput from "./input/DemoInput";
import ModelSelect from "./ModelSelect";
import InputField from "./input/InputField";
import DemoOutput from "./output/DemoOutput";
import { COLORS, PAGE_WIDTH } from "../styles";
import ModelCard from "./ModelCard";
import ModelUsage from "./ModelUsage";
import { CONTENT_TYPE } from "../constants";

interface DemoProps {
  config: DemoConfig;
  examples: Record<string, string>[];
  inputFields: InputField[];
  Output: any;
  formatPayload?: (inputFields: Record<string, any>) => Record<string, any>;
  validateInputs?: (inputFields: Record<string, any>) => Record<string, any>;
}

const Pane = styled.div`
  padding: 50px;
  background-color: ${COLORS.BACKGROUND};
  width: ${PAGE_WIDTH};
  text-align: initial;

  @media (max-width: 992px) {
    width: 100%;
  }
`;

const TaskDescription = styled.div`
  background-color: ${COLORS.BACKGROUND};
  padding-bottom: 50px;
`;

const DemoDivider = styled(Divider)`
  margin: 0px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: ${COLORS.BACKGROUND};
`;

const NoticeDiv = styled.div`
  background-color: ${COLORS.LIGHTGREY};
  margin-bottom: 18px;
  border-radius: 5px;
  padding: 24px;
`;

const NoticeHeader = styled.div`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 12px;
`;

// 100px is based on the padding.
const StyledTabPane = styled(Tabs.TabPane)`
  max-width: calc(100vw - 100px);
`;

const SEACoreNLPNotice = () => (
  <NoticeDiv>
    <NoticeHeader>Work with us</NoticeHeader>
    <div>
      For collaborations, please reach out to us at{" "}
      <a
        href="mailto:seacorenlp@aisingapore.org"
        target="_blank"
        rel="noopener"
      >
        seacorenlp@aisingapore.org
      </a>
      .
    </div>
    <br /> <br />
    <NoticeHeader>Community Forum</NoticeHeader>
    <div>
      Do you have ideas on improving the model? Or questions about how the model
      works? Visit our{" "}
      <a
        href="https://community.aisingapore.org/groups/natural-language-processing/forum/"
        target="_blank"
        rel="noopener"
      >
        community forum
      </a>{" "}
      to join the discussion.
    </div>
  </NoticeDiv>
);

const SGNLPNotice = () => (
  <NoticeDiv>
    <NoticeHeader style={{ color: COLORS.BR.PRIMARY }}>
      <ExclamationCircleOutlined />
      <span style={{ paddingLeft: "5px" }}>Important Note</span>
    </NoticeHeader>
    <div>
      The models in the demos are trained on specific datasets and are not
      intended for general use. It is possible that the models will not work
      out-of-the-box for your use case and that additional work will be
      necessary to adapt them.
    </div>
    <br /> <br />
    <NoticeHeader>Work with us</NoticeHeader>
    <div>
      For collaborations on adapting the model to your use case, reach out to us
      at sg-nlp@aisingapore.org.
    </div>
    <br /> <br />
    <NoticeHeader>Community Forum</NoticeHeader>
    <div>
      Do you have ideas on improving the model? Or questions about how the model
      works? Visit our{" "}
      <a
        href="https://community.aisingapore.org/groups/natural-language-processing/forum/"
        target="_blank"
        rel="noopener"
      >
        community forum
      </a>{" "}
      to join the discussion.
    </div>
  </NoticeDiv>
);

const Notice = {
  SGNLP: SGNLPNotice,
  SEACORENLP: SEACoreNLPNotice,
}[CONTENT_TYPE];

const Demo = ({
  config,
  examples,
  inputFields,
  Output,
  formatPayload,
  validateInputs,
}: DemoProps) => {
  const [selectedModel, setSelectedModel] = React.useState(config.models[0]);
  const [outputValues, setOutputValues] = React.useState({});
  const [outputState, setOutputState] = React.useState("empty");
  const [errors, setErrors] = React.useState({});

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

    const errors = validateInputs ? validateInputs(inputs) : {};
    setErrors(errors);
    if (Object.keys(errors).length > 0) {
      return;
    }

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
    <div style={{ textAlign: "center" }}>
      <Pane>
        <Title>{config.title}</Title>
        <TaskDescription>{config.desc}</TaskDescription>

        <ModelSelect
          selectedModel={selectedModel}
          models={config.models}
          handleModelChange={handleModelChange}
        />

        <Tabs>
          <StyledTabPane tab="Demo" key="demo">
            <DemoInput
              inputFields={inputFields}
              examples={examples}
              runModel={runModel}
              errors={errors}
            />
          </StyledTabPane>
          <StyledTabPane tab="Model Card" key="model_card">
            <ModelCard modelApiEndpoint={modelApiEndpoint()} />
          </StyledTabPane>
          {selectedModel.usage && (
            <StyledTabPane tab="Model Usage" key="model_usage">
              <ModelUsage
                usage={selectedModel.usage}
                modelApiEndpoint={modelApiEndpoint()}
              />
            </StyledTabPane>
          )}
        </Tabs>
      </Pane>

      <DemoDivider />

      <Pane>
        <Title>Model Results</Title>
        <DemoOutput outputState={outputState}>
          <Output responseData={outputValues} />
        </DemoOutput>
      </Pane>

      <DemoDivider />

      <Pane>
        <Notice />
      </Pane>
    </div>
  );
};

export default Demo;
