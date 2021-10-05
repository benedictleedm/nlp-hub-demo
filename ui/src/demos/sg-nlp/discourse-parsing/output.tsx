import * as React from "react";
import { Tree } from "hierplane";

const HierplaneVisualization = ({ tree }: any) => {
  if (tree) {
    return (
      <div className="hierplane__visualization">
        <Tree tree={tree} theme="light" />
      </div>
    );
  } else {
    return null;
  }
};

const Output = ({ responseData }: any) => (
  <HierplaneVisualization tree={responseData.tree} />
);

export default Output;
