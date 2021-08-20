import { DemoConfig } from "../../demos";
import { ModelConfig } from "../../models";
import { PredictionCode } from "./usage";

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
    usage: {
      prediction: PredictionCode({
        source: "pretrained",
        modelArguments: `"dp-id-ud-xlmr-best"`,
        text: "Saya pergi ke sekolah",
        output: "# Output: [('Saya', 2, 'nsubj'), ('pergi', 0, 'root'), ('ke', 4, 'case'), ('sekolah', 2, 'obl')]",
      }),
    },
  },
  {
    id: "th",
    desc: "UDPipe trained on Thai Parallel Universal Dependencies",
    displayName: "Thai - spaCy-thai",
    usage: {
      prediction: PredictionCode({
        source: "library",
        modelArguments: `"pythainlp"`,
        text: "ผมไปกินข้าว",
        output: "# Output: [('ผม', 2, 'nsubj'), ('ไป', 0, 'ROOT'), ('กินข้าว', 2, 'obj')]",
      }),
    },
  },
  {
    id: "th-sea",
    desc: "XLM-R Embeddings + Bi-LSTM with Deep Biaffine Attention trained on Universal Dependencies [LAS: 82.30%, UAS: 89.74%]",
    displayName: "Thai - SEACoreNLP",
    usage: {
      prediction: PredictionCode({
        source: "pretrained",
        modelArguments: `"dp-id-ud-xlmr-best"`,
        text: "ผมไปกินข้าว",
        output: "# Output: [('ผม', 2, 'nsubj'), ('ไป', 0, 'ROOT'), ('กินข้าว', 2, 'obj')]",
      }),
    },
  },
  {
    id: "vi",
    desc: "Bi-LSTM with Deep Biaffine Attention",
    displayName: "Vietnamese - UnderTheSea",
    usage: {
      prediction: PredictionCode({
        source: "library",
        modelArguments: `"underthesea"`,
        text: "Tôi muốn ăn cơm.",
        output: "# Output: [('Tôi', 3, 'nsubj'), ('muốn', 3, 'aux'), ('ăn', 0, 'root'), ('cơm', 3, 'obj'), ('.', 3, 'punct')]",
      }),
    },
  },
  {
    id: "vi-sea",
    desc: "XLM-R Embeddings + Bi-LSTM with Deep Biaffine Attention trained on Universal Dependencies [LAS: 71.03%, UAS: 77.79%]",
    displayName: "Vietnamese - SEACoreNLP",
    usage: {
      prediction: PredictionCode({
        source: "pretrained",
        modelArguments: `"dp-vi-ud-xlmr-best"`,
        text: "Tôi muốn ăn cơm.",
        output: "# Output: [('Tôi', 3, 'nsubj'), ('muốn', 3, 'aux'), ('ăn', 0, 'root'), ('cơm', 3, 'obj'), ('.', 3, 'punct')]",
      }),
    },
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
