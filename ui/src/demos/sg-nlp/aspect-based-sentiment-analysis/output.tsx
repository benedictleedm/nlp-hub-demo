import * as React from "react";
import { Highlight } from "../../../components/output/highlight/Highlight";

const colors = {
  "-1": "red",
  0: "blue",
  1: "green",
};

const sentimentLabelToDescMap = {
  "-1": "negative",
  0: "neutral",
  1: "positive",
};

const Output = (props: any) => {
  const {
    responseData,
    activeIds,
    activeDepths,
    selectedId,
    onMouseDown,
    onMouseOut,
    onMouseOver,
    onMouseUp,
  } = props;
  const { sentence, aspects, labels } = responseData;

  const HighlightedAspect = (
    color: string,
    index: any,
    label: string,
    value: string
  ) => {
    return (
      <Highlight
        style={{ width: "fit-content" }}
        activeDepths={activeDepths}
        activeIds={activeIds}
        color={color}
        depth={0}
        id={index}
        key={index}
        label={label}
        labelPosition={"top"}
        onMouseDown={onMouseDown}
        onMouseOut={onMouseOut}
        onMouseOver={onMouseOver}
        onMouseUp={onMouseUp}
        selectedId={selectedId}
      >
        {value}
      </Highlight>
    );
  };

  return (
    <>
      <h2>Aspect sentiment polarity</h2>
      <div style={{ display: "flex", alignItems: "center" }}>
        {sentence.map((token: string, index: number) => {
          if (aspects.includes(index)) {
            const aspectIndex = aspects.indexOf(index);
            const sentimentLabel = labels[aspectIndex];
            //@ts-ignore
            const color = colors[sentimentLabel];

            return HighlightedAspect(
              color,
              index,
              //@ts-ignore
              sentimentLabelToDescMap[sentimentLabel],
              token
            );
          }
          return (
            <span
              style={{
                marginRight: "3px",
                alignSelf: "flex-end",
                paddingBottom: "8px",
              }}
            >
              {token}{" "}
            </span>
          );
        })}
      </div>
    </>
  );
};

export default Output;
