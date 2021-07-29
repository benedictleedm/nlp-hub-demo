import * as React from "react";
import InputField from "../../../components/input/InputField";
import TableInput, {
    TableInputProps,
  } from "../../../components/input/TableInput";

const tableInputProps: TableInputProps = {
label: "Tweets in a thread",
columnInfo: [
    { title: "Tweet", dataIndex: "tweet" }
],
maxRows: 10,
};

const inputFields: InputField[] = [
  {
    id: "tweets",
    component: TableInput,
    componentProps: tableInputProps,
  },
];

export const formatPayload = (inputFields: Record<string, any>) => {
  let tweets = inputFields.tweets.map((row: { key: number; tweet: string }) => {
    return row.tweet;
  });
  
  return {tweets: tweets};
};

export default inputFields;
