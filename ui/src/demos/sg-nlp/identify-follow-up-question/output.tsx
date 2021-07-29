import * as React from "react";

const textFromScore = (score: number) => {
  const roundedAndScaledScore = (score * 100).toFixed(0);
  if (score < 0.5) {
    return (
      <div>
        This model rates the question as unlikely to be a follow-up question (
        <b>{roundedAndScaledScore}%</b>).
      </div>
    );
  } else {
    return (
      <div>
        This model rates the question as likely to be a follow-up question (
        <b>{roundedAndScaledScore}%</b>).
      </div>
    );
  }
};

const Output = ({ responseData }: any) => {
  return <div>{textFromScore(responseData["probability"])}</div>;
};

export default Output;
