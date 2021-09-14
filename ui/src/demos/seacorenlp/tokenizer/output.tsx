import * as React from "react";
import { Highlight } from "../../../components/output/highlight/Highlight";
import { HighlightContainer } from "../../../components/output/highlight/HighlightContainer";

interface OutputProps {
  responseData: {
    words: string[];
  };
}

const TokenSpan = ({ token }: any) => {
    return (
      <Highlight labelPosition={"bottom"}>
        {token}{" "}
      </Highlight>
    );
};

const Output = ({ responseData }: OutputProps) => {
  const { words } = responseData;
  return (
    <div>
      <HighlightContainer>
        {words.map((word) => (
          <TokenSpan token={word} />
        ))}
      </HighlightContainer>
    </div>
  );
};

export default Output;
