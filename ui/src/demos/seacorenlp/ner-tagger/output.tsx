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

interface Token {
  text: string,
  entity: string
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
        {token.text}
      </Highlight>
    );
  } else {
    return (<span>{token.text} </span>);
  }
}

const Output = ({ responseData }: OutputProps) => {
  const { words, tags } = responseData

  const formattedTokens: Token[] = [];
  let spanStr = "";
  tags.forEach(function (tag, i) {
    let tokenObj: any = {};
    if (tag === "O") {
      tokenObj = {
        text: words[i],
        entity: null
      }
      formattedTokens.push(tokenObj);
    } else if (tag[0] === "U") {
      tokenObj = {
        text: words[i],
        entity: tag.slice(2)
      }
      formattedTokens.push(tokenObj);
    } else if (tag[0] === "B") {
      spanStr = `${words[i]}`;
    } else if (tag[0] === "I") {
      spanStr += ` ${words[i]} `;
    } else if (tag[0] === "L") {
      spanStr += ` ${words[i]}`;
      tokenObj = {
        text: spanStr,
        entity: tag.slice(2)
      }
      formattedTokens.push(tokenObj);
    }
  });
  return (
    <div>
      <HighlightContainer layout="bottom-labels">
        {formattedTokens.map((token, i) => <TokenSpan key={i} token={token} />)}
      </HighlightContainer>
    </div>
  )
}

export default Output;
