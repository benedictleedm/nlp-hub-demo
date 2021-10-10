import * as React from "react";
import styled from "styled-components";
import { diffChars } from "diff";
import Title from "antd/lib/typography/Title";

interface DiffBlockProps {
  oldText: string;
  newText: string;
}

const Block = styled.div`
  padding: 8px;
`;

const DiffBlock = ({ oldText, newText }: DiffBlockProps) => {
  const diff = diffChars(oldText, newText);

  const oldTextColored = (
    <div>
      {diff.map((part) => {
        if (part.added) return;
        else if (part.removed)
          return (
            <span style={{ backgroundColor: "#FF7F7F" }}>{part.value}</span>
          );
        else return <span>{part.value}</span>;
      })}
    </div>
  );

  const newTextColored = (
    <div>
      {diff.map((part) => {
        if (part.added)
          return (
            <span style={{ backgroundColor: "#B3E6B5" }}>{part.value}</span>
          );
        else if (part.removed) return;
        else return <span>{part.value}</span>;
      })}
    </div>
  );

  return (
    <div>
      <Block>
        <Title level={5}>Original Text:</Title>
        <div>{oldTextColored}</div>
      </Block>
      <Block>
        <Title level={5}>Corrected Text:</Title>
        <div>{newTextColored}</div>
      </Block>
    </div>
  );
};

export default DiffBlock;
