import { Table } from "antd";
import * as React from "react";

interface OutputProps {
  responseData: Response;
}

interface Response {
  books?: ModelOutput;
  dvd?: ModelOutput;
  music?: ModelOutput;
}

interface ModelOutput {
  sentiment: number;
  probability: number;
  target_language: string;
  target_domain: string;
}

const Output = ({ responseData }: OutputProps) => {
  const capitalizeDomain = (word: string) => {
    if (word != "dvd") {
      return word[0].toUpperCase() + word.slice(1);
    } else {
      return "DVD";
    }
  };
  const targetLanguageMapping = {
    de: "German",
    fr: "French",
    jp: "Japanese",
  };

  // Arbitrarily choose any value in object (assumes same target_language and target_domain)
  const responseSample = Object.entries(responseData)[0][1];

  const targetLanguage =
    //@ts-ignore
    targetLanguageMapping[responseSample.target_language];
  const targetDomain = capitalizeDomain(responseSample.target_domain);

  // Create dataSource for table
  const dataSource = Object.entries(responseData).map(
    ([domain, values]: any, idx) => {
      return {
        key: idx,
        source_language: "English",
        source_domain: capitalizeDomain(domain),
        sentiment: values["sentiment"] == 1 ? "Positive" : "Negative",
        probability: (values["probability"] * 100).toFixed(1) + "%",
      };
    }
  );

  const columns = [
    {
      title: "Source Language",
      dataIndex: "source_language",
      key: "source_language",
    },
    {
      title: "Source Domain",
      dataIndex: "source_domain",
      key: "source_domain",
    },
    {
      title: "Sentiment",
      dataIndex: "sentiment",
      key: "sentiment",
    },
    {
      title: "Probability",
      dataIndex: "probability",
      key: "probability",
    },
  ];

  return (
    <div>
      <p>
        The table below shows the model performance when trained on the
        following <b>source language</b> and <b>source domain</b> and optimised
        on{" "}
        <b>
          {targetLanguage} {targetDomain}
        </b>{" "}
        validation dataset.
      </p>
      <div>
        <Table dataSource={dataSource} columns={columns} />
      </div>
    </div>
  );
};

export default Output;
