import * as React from "react";
import { Highlight } from "../../../components/output/highlight/Highlight";
import { HighlightContainer } from "../../../components/output/highlight/HighlightContainer";

interface OutputProps {
  responseData: {
    words: string[];
    tags: string[];
  };
}

const TokenSpan = ({ token }: any) => {
  // Lookup table for entity style values:
  const entityLookup: any = {
    // UPOS
    ADJ: {
      tooltip: "Adjective",
      color: "pink",
    },
    ADP: {
      tooltip: "Adposition",
      color: "green",
    },
    ADV: {
      tooltip: "Adverb",
      color: "blue",
    },
    AUX: {
      tooltip: "Auxiliary",
      color: "gray",
    },
    CCONJ: {
      tooltip: "Coordinating Conjunction",
      color: "pink",
    },
    DET: {
      tooltip: "Determiner",
      color: "orange",
    },
    INTJ: {
      tooltip: "Interjection",
      color: "green",
    },
    NOUN: {
      tooltip: "Noun",
      color: "fuchsia",
    },
    NUM: {
      tooltip: "Numeral",
      color: "cobalt",
    },
    PART: {
      tooltip: "Particle",
      color: "teal",
    },
    PRON: {
      tooltip: "Pronoun",
      color: "red",
    },
    PROPN: {
      tooltip: "Proper Noun",
      color: "brown",
    },
    PUNCT: {
      tooltip: "Punctuation",
      color: "orange",
    },
    SCONJ: {
      tooltip: "Subordinating Conjunction",
      color: "green",
    },
    VERB: {
      tooltip: "Verb",
      color: "orange",
    },
    // XPOS - Thai
    NPRP: {
      tooltip: "Proper Noun",
      color: "brown",
    },
    NLBL: {
      tooltip: "Label Noun",
      color: "teal",
    },
    NTTL: {
      tooltip: "Title Noun",
      color: "teal",
    },
    NCMN: {
      tooltip: "Common Noun",
      color: "fuchsia",
    },
    PPRS: {
      tooltip: "Personal Pronoun",
      color: "red",
    },
    PDMN: {
      tooltip: "Demonstrative Pronoun",
      color: "red",
    },
    PNTR: {
      tooltip: "Interrogative Pronoun",
      color: "red",
    },
    PREL: {
      tooltip: "Relative Pronoun",
      color: "green",
    },
    VACT: {
      tooltip: "Active Verb",
      color: "orange",
    },
    VSTA: {
      tooltip: "Stative Verb",
      color: "orange",
    },
    VATT: {
      tooltip: "Attributive Verb",
      color: "pink",
    },
    XVBM: {
      tooltip: "Pre-Verb Auxiliary (Before Negator)",
      color: "gray",
    },
    XVAM: {
      tooltip: "Pre-Verb Auxiliary (After Negator)",
      color: "gray",
    },
    XVMM: {
      tooltip: "Pre-Verb Auxiliary (Before/After Negator)",
      color: "gray",
    },
    XVBB: {
      tooltip: "Pre-Verb Auxiliary (Imperative)",
      color: "gray",
    },
    XVAE: {
      tooltip: "Post-Verb Auxiliary",
      color: "gray",
    },
    NCNM: {
      tooltip: "Cardinal Number",
      color: "cobalt",
    },
    NONM: {
      tooltip: "Ordinal Number",
      color: "cobalt",
    },
    DDAN: {
      tooltip: "Definite Determiner (No Classifier Between)",
      color: "orange",
    },
    DDAC: {
      tooltip: "Definite Determiner (Classifier Between)",
      color: "orange",
    },
    DDBQ: {
      tooltip: "Definite Determiner (Before Quantitative Expression)",
      color: "orange",
    },
    DDAQ: {
      tooltip: "Definite Determiner (After Quantitative Expression)",
      color: "orange",
    },
    DIAC: {
      tooltip: "Indefinite Determiner (Classifier Between)",
      color: "orange",
    },
    DIBQ: {
      tooltip: "Indefinite Determiner (Before Quantitative Expression)",
      color: "orange",
    },
    DIAQ: {
      tooltip: "Indefinite Determiner (After Quantitative Expression)",
      color: "orange",
    },
    DCNM: {
      tooltip: "Determiner (Cardinal Number)",
      color: "orange",
    },
    DONM: {
      tooltip: "Determiner (Ordinal Number)",
      color: "orange",
    },
    ADVN: {
      tooltip: "Adverb",
      color: "blue",
    },
    ADVI: {
      tooltip: "Adverb (Iterative)",
      color: "blue",
    },
    ADVP: {
      tooltip: "Adverb (Prefixed)",
      color: "blue",
    },
    ADVS: {
      tooltip: "Adverb (Sentential)",
      color: "blue",
    },
    CNIT: {
      tooltip: "Unit Classifier",
      color: "teal",
    },
    CLTV: {
      tooltip: "Collective Classifier",
      color: "teal",
    },
    CMTR: {
      tooltip: "Measurement Classifier",
      color: "teal",
    },
    CVBL: {
      tooltip: "Verbal Classifier",
      color: "teal",
    },
    JCRG: {
      tooltip: "Coordinating Conjunction",
      color: "pink",
    },
    JCMP: {
      tooltip: "Comparative Conjunction",
      color: "pink",
    },
    JSBR: {
      tooltip: "Subordinating Conjunction",
      color: "green",
    },
    RPRE: {
      tooltip: "Preposition",
      color: "green",
    },
    INT: {
      tooltip: "Interjection",
      color: "green",
    },
    FIXN: {
      tooltip: "Nominal Prefix",
      color: "cobalt",
    },
    FIXV: {
      tooltip: "Adverbial Prefix",
      color: "cobalt",
    },
    EAFF: {
      tooltip: "Ending (Affirmative)",
      color: "teal",
    },
    EITT: {
      tooltip: "Ending (Interrogative)",
      color: "teal",
    },
    NEG: {
      tooltip: "Negator",
      color: "red",
    },
    PUNC: {
      tooltip: "Punctuation",
      color: "gray",
    },
    // Vietnamese XPOS
    Np: {
      tooltip: "Proper Noun",
      color: "brown",
    },
    N: {
      tooltip: "Noun",
      color: "fuchsia",
    },
    Nc: {
      tooltip: "Classifier",
      color: "teal",
    },
    Nu: {
      tooltip: "Unit Noun",
      color: "fuchsia",
    },
    P: {
      tooltip: "Pronoun",
      color: "red",
    },
    V: {
      tooltip: "Verb",
      color: "orange",
    },
    A: {
      tooltip: "Adjective",
      color: "pink",
    },
    R: {
      tooltip: "Adverb",
      color: "blue",
    },
    L: {
      tooltip: "Determiner",
      color: "orange",
    },
    M: {
      tooltip: "Numeral",
      color: "cobalt",
    },
    E: {
      tooltip: "Preposition",
      color: "green",
    },
    C: {
      tooltip: "Subordinating Conjunction",
      color: "green",
    },
    CC: {
      tooltip: "Coordinating Conjunction",
      color: "pink",
    },
    I: {
      tooltip: "Interjection",
      color: "green",
    },
    T: {
      tooltip: "Auxiliary/ Modal Words",
      color: "cobalt",
    },
    Y: {
      tooltip: "Abbreviation",
      color: "pink",
    },
    Z: {
      tooltip: "Bound Morphemes",
      color: "pink",
    },
    X: {
      tooltip: "Unknown",
      color: "gray",
    },
    CH: {
      tooltip: "Punctuation",
      color: "gray",
    },
  };

  const entity = token.entity;

  if (entity !== null) {
    // If token has entity value:
    // Display entity text wrapped in a <Highlight /> component.
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
    // If no entity:
    // Display raw text.
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
