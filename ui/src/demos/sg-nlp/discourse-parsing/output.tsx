import * as React from "react";
import DependencyParseTree from "../../../components/output/tree/DependencyParseTree";

const HierplaneVisualization = ({ tree }: any) => {
  if (tree) {
    return <DependencyParseTree tree={tree} theme="light" />;
  } else {
    return null;
  }
};

const Output = ({ responseData }: any) => (
  <HierplaneVisualization tree={responseData.tree} />
);

export default Output;
