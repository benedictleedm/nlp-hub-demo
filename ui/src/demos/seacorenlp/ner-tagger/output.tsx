import * as React from "react";
import { Highlight } from "../../../components/output/highlight/Highlight";
import { HighlightContainer } from "../../../components/output/highlight/HighlightContainer";

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
  const entityLookup: any = {
    "PER": {
      tooltip: "Person",
      color: "pink"
    },
    "LOC": {
      tooltip: "Location",
      color: "green"
    },
    "ORG": {
      tooltip: "Organization",
      color: "blue"
    },
    "MISC": {
      tooltip: "Miscellaneous",
      color: "gray"
    },
    "CARDINAL": {
      tooltip: "Cardinal Number",
      color: "orange"
    },
    "EVENT": {
      tooltip: "Event",
      color: "green"
    },
    "DATE": {
      tooltip: "Date",
      color: "fuchsia"
    },
    "FAC": {
      tooltip: "Facility",
      color: "cobalt"
    },
    "GPE": {
      tooltip: "Country/City/State",
      color: "teal"
    },
    "LANGUAGE": {
      tooltip: "Language",
      color: "red"
    },
    "LAW": {
      tooltip: "Law",
      color: "brown"
    },
    // LOC - see above
    "MONEY": {
      tooltip: "Monetary Value",
      color: "orange"
    },
    "NORP": {
      tooltip: "Nationalities, Religious/Political Groups",
      color: "green"
    },
    "ORDINAL": {
      tooltip: "Ordinal Value",
      color: "orange"
    },
    // ORG - see above.
    "PERCENT": {
      tooltip: "Percentage",
      color: "orange"
    },
    "PRODUCT": {
      tooltip: "Product",
      color: "purple"
    },
    "QUANTITY": {
      tooltip: "Quantity",
      color: "orange"
    },
    "TIME": {
      tooltip: "Time",
      color: "fuchsia"
    },
    "WORK_OF_ART": {
      tooltip: "Work of Art/Media",
      color: "tan"
    },
    // PyThaiNLP Entities
    "ZIP": {
      tooltip: "Zip Code",
      color: "green"
    },
    "LEN": {
      tooltip: "Length",
      color: "orange"
    },
    "URL": {
      tooltip: "URL",
      color: "black"
    },
    "EMAIL": {
      tooltip: "Email",
      color: "black"
    },
    "PHONE": {
      tooltip: "Phone Number",
      color: "orange"
    },
  }

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
