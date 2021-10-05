import * as React from "react";
import Demo from "../../../components/Demo";
import config from "./config";
import inputFields from "./input";
import examples from "./examples";
import Output from "./output";

const DemoComponent = () => {
  return (
    <Demo
      config={config}
      examples={examples}
      inputFields={inputFields}
      Output={Output}
    />
  );
};

const demo = {
  component: DemoComponent,
  config: config,
};

export default demo;
