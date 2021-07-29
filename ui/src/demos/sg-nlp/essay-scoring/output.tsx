import * as React from "react";

interface OutputProps {
  responseData: ModelOutput;
}

interface ModelOutput {
  predictions: number[];
}

const textFromScore = (score: number) => {
  return (
    <div>
      This essay is given a score of <b>{score}</b> out of <b>12</b>.
    </div>
  );
};

const Output = ({ responseData }: OutputProps) => {
  return <div>{textFromScore(responseData["predictions"][0])}</div>;
};

export default Output;
