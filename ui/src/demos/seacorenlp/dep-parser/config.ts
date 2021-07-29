import { DemoConfig } from "../../demos";
import { ModelConfig } from "../../models";

const models: ModelConfig[] = [
  {
    id: "id",
    desc: "Bi-LSTM with Deep Biaffine Attention trained on Universal Dependencies [LAS: 79.19%, UAS: 85.17%]",
    displayName: "Indonesian - Stanza",
  },
  {
    id: "id-sea",
    desc: "XLM-R Embeddings + Bi-LSTM with Deep Biaffine Attention trained on Universal Dependencies [LAS: 82.23%, UAS: 88.10%]",
    displayName: "Indonesian - SEACoreNLP",
  },
  {
    id: "th",
    desc: "UDPipe trained on Thai Parallel Universal Dependencies",
    displayName: "Thai - spaCy-thai",
  },
  {
    id: "th-sea",
    desc: "XLM-R Embeddings + Bi-LSTM with Deep Biaffine Attention trained on Universal Dependencies [LAS: 82.30%, UAS: 89.74%]",
    displayName: "Thai - SEACoreNLP",
  },
  {
    id: "vi",
    desc: "Bi-LSTM with Deep Biaffine Attention",
    displayName: "Vietnamese - UnderTheSea",
  },
  {
    id: "vi-sea",
    desc: "XLM-R Embeddings + Bi-LSTM with Deep Biaffine Attention trained on Universal Dependencies [LAS: 71.03%, UAS: 77.79%]",
    displayName: "Vietnamese - SEACoreNLP",
  },
  {
    id: "ta",
    desc: "Bi-LSTM with Deep Biaffine Attention trained on Universal Dependencies [LAS: 55.76%, UAS: 61.23%]",
    displayName: "Tamil - Stanza",
  },
];

const config: DemoConfig = {
  taskId: "sea-dep-parser",
  title: "Dependency Parsing",
  desc: "Dependency parsing is the task of analyzing the grammatical structure of a sentence and establishing the relationships between 'head' words and the words which modify those heads. This demo allows for the visualisation of dependency trees using the Hierplane library. It also includes visualisation of POS tags within nodes.",
  models: models,
};

export default config;
