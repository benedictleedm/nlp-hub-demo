import * as React from "react";
import { Highlight } from "../../../components/output/highlight/Highlight";

interface OutputProps {
  responseData: {
    utterances: string[];
    evidence_span: number[];
    probability: number[];
    emotion: string;
  };
}

interface ModelOutput {
  data: {
    utterances: string[];
    evidence_span: number[];
    probability: number[];
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

function getEvidenceSpanHighlight(
  key: number,
  idx: number,
  utt: string,
  span: number,
  prob: number,
  emotion: string,
  max_idx: number
) {
  // Process non-last utterance
  if (idx === max_idx) {
    return;
  } else if (span === 1) {
    // Evidence span highlight
    return (
      <Highlight
        key={key}
        label={`Emotion Cause for ${emotion}`}
        color={emotionColors[emotion]}
        tooltip={`Probability: ${prob.toFixed(2)}`}
      >
        {utt}
      </Highlight>
    );
  } else {
    // Non evidence span and not target utterance
    return <span key={key}>{utt}</span>;
  }
}

function getTargetSpanHighlight(
  utts: string[],
  span: number[],
  prob: number[],
  emotion: string
) {
  let lastSpan: any[] = [];
  utts.forEach(function (value: any, i: number) {
    lastSpan.push(
      getEvidenceSpanHighlight(i, 0, value, span[i], prob[i], emotion, 1)
    );
  });
  return (
    <Highlight
      // Since target span is the last entry in utterances,
      // set arbitrary large key to fix warning
      key={999999}
      label="Target Utterance"
      color={"gray"}
      tooltip={`Emotion: ${emotion}`}
    >
      {lastSpan}
    </Highlight>
  );
}

const ProcessEvidenceSpan = ({ data }: ModelOutput) => {
  const uttSpan = [];
  data.utterances.forEach(function (value: any, i: number) {
    uttSpan.push(
      getEvidenceSpanHighlight(
        i,
        data.idx,
        value,
        data.evidence_span[i],
        data.probability[i],
        data.emotion,
        data.max_idx
      )
    );
  });
  if (data.idx === data.max_idx) {
    uttSpan.push(
      getTargetSpanHighlight(
        data.utterances,
        data.evidence_span,
        data.probability,
        data.emotion
      )
    );
  }
  // flattens the array in order to render
  const out = [].concat.apply([], uttSpan);
  return out;
};

const Output = ({ responseData }: OutputProps) => {
  const { utterances, evidence_span, probability, emotion } = responseData;
  const max_idx = utterances.length - 1;

  const formattedData: any[] = [];
  utterances.forEach(function (value, i) {
    formattedData.push({
      utterances: value,
      evidence_span: evidence_span[i],
      probability: probability[i],
      emotion: emotion,
      max_idx: max_idx,
      idx: i,
    });
  });
  return (
    <div>
      <b>Utterances</b>
      {formattedData.map((utt, i) => (
        <div key={i}>
          <span
            style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}
          >
            <ProcessEvidenceSpan key={i} data={utt} />
          </span>
          <br />
        </div>
      ))}
    </div>
  );
};

export default Output;
