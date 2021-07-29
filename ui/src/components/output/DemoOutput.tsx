import * as React from "react";
import Spin from "../Spin";

interface DemoOutputProps {
  children: React.ReactNode;
  outputState: string;
}

const DemoOutput = ({ children, outputState }: DemoOutputProps) => {
  const outputSwitch = (outputState: string) => {
    switch (outputState) {
      case "loading":
        return (
          <div
            style={{display: "flex", justifyContent: "center" }}
          >
            <Spin size="large" />
          </div>
        );
      case "received":
        return children;
      case "error":
        return <p>Something went wrong. Please try again.</p>;
      default:
        return <p>Run model to view results.</p>;
    }
  };

  return <div>{outputSwitch(outputState)}</div>;
};

export default DemoOutput;
