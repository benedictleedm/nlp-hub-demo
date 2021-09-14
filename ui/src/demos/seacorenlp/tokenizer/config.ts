import { DemoConfig } from "../../demos";
import { ModelConfig } from "../../models";
import { PredictionCode } from "./usage";

const models: ModelConfig[] = [
  {
    id: "th-attacut",
    desc: "3-layer Dilated CNN [F1: 91%]",
    displayName: "Thai - PyThaiNLP (Attacut)",
    usage: {
      prediction: PredictionCode({
        source: "library",
        modelArguments: `"pythainlp", engine="attacut"`,
        text: "กรุงเทพมหานครเป็นเมืองหลวงและนครที่มีประชากรมากที่สุดของประเทศไทย",
        output: "# Output: ['กรุงเทพมหานคร', 'เป็น', 'เมือง', 'หลวง', 'และ', 'นคร', 'ที่', 'มี', 'ประชากร', 'มาก', 'ที่สุด', 'ของ', 'ประเทศไทย']",
      }),
    },
  },
  {
    id: "th-newmm",
    desc: "Dictionary-based Tokenizer [F1: 67%]",
    displayName: "Thai - PyThaiNLP (Newmm)",
    usage: {
      prediction: PredictionCode({
        source: "library",
        modelArguments: `"pythainlp", engine="newmm"`,
        text: "กรุงเทพมหานครเป็นเมืองหลวงและนครที่มีประชากรมากที่สุดของประเทศไทย",
        output: "# Output: ['กรุงเทพมหานคร', 'เป็น', 'เมืองหลวง', 'และ', 'นคร', 'ที่', 'มี', 'ประชากร', 'มาก', 'ที่สุด', 'ของ', 'ประเทศ', 'ไทย']",
      }),
    },
  },
  {
    id: "id-stanza",
    desc: "Bi-LSTM [F1: 99.99%]",
    displayName: "Indonesian - Stanza",
    usage: {
      prediction: PredictionCode({
        source: "library",
        modelArguments: `"stanza", lang="id"`,
        text: "Saya di sini.",
        output: "# Output: ['Saya', 'di', 'sini', '.']",
      }),
    },
  },
  {
    id: "vi-stanza",
    desc: "Bi-LSTM [F1: 87.25%]",
    displayName: "Vietnamese - Stanza",
    usage: {
      prediction: PredictionCode({
        source: "library",
        modelArguments: `"stanza", lang="vi"`,
        text: "Tôi muốn ăn cơm bây giờ.",
        output: "# Output: ['Tôi', 'muốn', 'ăn', 'cơm', 'bây giờ', '.']",
      }),
    },
  },
  {
    id: "vi-uts",
    desc: "CRF + Regex Model",
    displayName: "Vietnamese - UnderTheSea",
    usage: {
      prediction: PredictionCode({
        source: "library",
        modelArguments: `"underthesea"`,
        text: "Tôi muốn ăn cơm bây giờ.",
        output: "# Output: ['Tôi', 'muốn', 'ăn', 'cơm', 'bây giờ', '.']",
      }),
    },
  },
  {
    id: "ta-stanza",
    desc: "Bi-LSTM [F1: 99.58%]",
    displayName: "Tamil - Stanza",
    usage: {
      prediction: PredictionCode({
        source: "library",
        modelArguments: `"stanza", lang="ta"`,
        text: "ஒரு மொழி மட்டும் தெரிந்தால் போதாது.",
        output: "# Output: ['ஒரு', 'மொழி', 'மட்டும்', 'தெரிந்தால்', 'போதாது', '.']",
      }),
    },
  },
  {
    id: "my",
    desc: "Rule-based + Dictionary-based Approach",
    displayName: "Burmese",
  },
];

const config: DemoConfig = {
  taskId: "sea-tokenizer",
  title: "Tokenization",
  desc: "Tokenization is the task of breaking down text into smaller units known as tokens. Tokens can be words, characters or subwords.",
  models: models,
};

export default config;
