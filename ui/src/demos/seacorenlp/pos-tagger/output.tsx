import * as React from "react";
import { Highlight } from "../../../components/output/highlight/Highlight";
import { HighlightContainer } from "../../../components/output/highlight/HighlightContainer";
import entityLookup from "./tagsets";

interface OutputProps {
  responseData: {
    words: string[];
    tags: string[];
  };
}

const TokenSpan = ({ token }: any) => {
  const entity = token.entity;

  if (entity !== null) {
    return (
      <Highlight
        label={entity}
        color={entityLookup[entity].color}
        tooltip={entityLookup[entity].tooltip}
      >
        {token.text}{" "}
      </Highlight>
    );
  } else {
    return <span>{token.text} </span>;
  }
};

const Output = ({ responseData }: OutputProps) => {
  const { words, tags } = responseData;
  const formattedTokens: any[] = [];
  tags.forEach(function (tag, i) {
    const tokenObj = {
      text: words[i],
      entity: tag.slice(),
    };
    formattedTokens.push(tokenObj);
  });
  return (
    <div>
      <HighlightContainer layout="bottom-labels">
        {formattedTokens.map((token, i) => (
          <TokenSpan key={i} token={token} />
        ))}
      </HighlightContainer>
    </div>
  );
};

export default Output;
