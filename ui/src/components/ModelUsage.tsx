import * as React from "react";
import CodeBlock from "./CodeBlock";
import { ModelUsageInfo } from "../demos/models";
import { CONTENT_TYPE } from "../constants";

const sgnlpInstallation = "pip install sgnlp";
const seacorenlpInstallation = "pip install seacorenlp"

const installation = {
  SGNLP: sgnlpInstallation,
  SEACORENLP: seacorenlpInstallation,
}[CONTENT_TYPE];

interface ModelUsageProps {
  usage: ModelUsageInfo;
}

const ModelUsage = ({ usage }: ModelUsageProps) => {
  return (
    <div>
      <CodeBlock label="Installation" code={installation} language="bash" />
      {usage.prediction && (
        <CodeBlock
          label="Prediction with pretrained model"
          code={usage.prediction}
          language="python"
        />
      )}
      {usage.training && (
        <CodeBlock label="Training" code={usage.training} language="python" />
      )}
      {usage.evaluation && (
        <CodeBlock
          label="Evaluation"
          code={usage.evaluation}
          language="python"
        />
      )}
    </div>
  );
};

export default ModelUsage;
