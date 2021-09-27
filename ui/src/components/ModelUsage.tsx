import * as React from "react";
import CodeBlock from "./CodeBlock";
import { ModelUsageInfo } from "../demos/models";
import { CONTENT_TYPE } from "../constants";
import Spin from "./Spin";

const sgnlpInstallation = "pip install sgnlp";
const seacorenlpInstallation = "pip install seacorenlp";

const installation = {
  SGNLP: sgnlpInstallation,
  SEACORENLP: seacorenlpInstallation,
}[CONTENT_TYPE];

interface ModelUsageProps {
  usage: ModelUsageInfo;
  modelApiEndpoint: string;
}

// This component renders a code block. If given usage.fromBackend = true, it will fetch from the backend.
// Otherwise uses what is specified in the config file if available.
const ModelUsage = ({ usage, modelApiEndpoint }: ModelUsageProps) => {
  const [loaded, setLoaded] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [usageText, setUsageText] = React.useState<any>({});

  React.useEffect(() => {
    if (usage.fromBackend) {
      const url = modelApiEndpoint + "/model-usage";
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then(
          (json) => {
            setLoaded(true);
            setUsageText({ prediction: json.usage });
          },
          (error) => {
            setError(true);
          }
        );
    } else {
      setLoaded(true);
      setUsageText(usage);
    }
  }, [modelApiEndpoint]);

  if (error) {
    return <div>Something went wrong. Please try again later.</div>;
  } else if (!loaded) {
    return <Spin size="large" />;
  } else {
    return (
      <div>
        <CodeBlock label="Installation" code={installation} language="bash" />
        {usageText.prediction && (
          <CodeBlock
            label="Prediction with pretrained model"
            code={usageText.prediction}
            language="python"
          />
        )}
        {usageText.training && (
          <CodeBlock label="Training" code={usageText.training} language="python" />
        )}
        {usageText.evaluation && (
          <CodeBlock
            label="Evaluation"
            code={usageText.evaluation}
            language="python"
          />
        )}
      </div>
    );
  }
};

export default ModelUsage;
