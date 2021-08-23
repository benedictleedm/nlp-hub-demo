import * as React from "react";
import styled from "styled-components";

const SpeakerDiv = styled.div`
  padding-right: 5px;
  font-weight: bold;
  color: ${(props) => props.color};
`;

export const SpeakerName = ({ index }: any) => {
  return index % 2 == 0 ? (
    <SpeakerDiv color={"green"}>A:</SpeakerDiv>
  ) : (
    <SpeakerDiv color={"blue"}>B:</SpeakerDiv>
  );
};
