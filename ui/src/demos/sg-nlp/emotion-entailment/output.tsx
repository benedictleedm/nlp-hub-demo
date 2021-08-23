import * as React from "react";
import styled from "styled-components";
import { Highlight } from "../../../components/output/highlight/Highlight";

interface OutputProps {
  responseData: {
    utterances: string[];
    causal_idx: number[];
    emotion: string;
  };
}

interface formattedSingleOutput {
  data: {
    utterance: string;
    causal_idx: number;
    emotion: string;
    max_idx: number;
    idx: number;
  };
}

const emotionColors: Record<string, string> = {
  anger: "red",
  sadness: "blue",
  happiness: "orange",
  surprise: "tan",
  disgust: "green",
  fear: "purple",
};

const EvidenceUtterance = ({ data }: formattedSingleOutput) => {
  if (data.causal_idx === 1 && data.idx === data.max_idx) {
    // Case 1: Target utterance and Causal utterance highlight
    return (
      <Highlight
        label="Target Utterance"
        color={"gray"}
        tooltip={`Emotion: ${data.emotion} `}
      >
        <Highlight
          label={"Causal Utterance for " + data.emotion}
          color={emotionColors[data.emotion]}
          tooltip={`Causal utterance`}
        >
          {data.utterance}
        </Highlight>
      </Highlight>
    );
  } else if (data.idx === data.max_idx) {
    // Case 2: Target utterance highlight
    return (
      <Highlight
        label="Target Utterance"
        color={"gray"}
        tooltip={`Emotion: ${data.emotion} `}
      >
        {data.utterance}
      </Highlight>
    );
  } else if (data.causal_idx === 1) {
    // Case 3: Causal utterance highlight
    return (
      <Highlight
        label={"Causal Utterance for " + data.emotion}
        color={emotionColors[data.emotion]}
        tooltip={`Causal utterance`}
      >
        {data.utterance}
      </Highlight>
    );
  } else {
    // Case 4: Non causal and non target utterance
    return <span>{data.utterance}</span>;
  }
};

const SpeakerDiv = styled.div`
  padding-right: 5px;
  font-weight: bold;
  color: ${(props) => props.color};
`;

const Output = ({ responseData }: OutputProps) => {
  const { utterances, causal_idx, emotion } = responseData;
  const max_idx = utterances.length - 1;

  const formattedUtterance = utterances.map(
    (utterance: string, index: number) => {
      return {
        utterance: utterance,
        causal_idx: causal_idx[index],
        emotion: emotion,
        max_idx: max_idx,
        idx: index,
      };
    }
  );

  return (
    <div>
      <b>Utterances</b>
      {formattedUtterance.map((utt, i) => (
        <div key={i}>
          <span
            style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}
          >
            {i % 2 == 0 ? (
              <SpeakerDiv color={"green"}>A:</SpeakerDiv>
            ) : (
              <SpeakerDiv color={"blue"}>B:</SpeakerDiv>
            )}
            <EvidenceUtterance key={i} data={utt} />
          </span>
          <br />
        </div>
      ))}
    </div>
  );
};

export default Output;
