import { DemoConfig } from "../../demos";
import { ModelConfig } from "../../models";
import { PredictionCode } from "./usage";

const models: ModelConfig[] = [
  {
    id: "id-sea",
    desc: "This is a CRF-based model using XLM-R embeddings trained on the NER-GRIT dataset.",
    displayName: "Indonesian - SEACoreNLP (NER-GRIT)",
    usage: {
      prediction: PredictionCode({
        source: "pretrained",
        modelArguments: `"ner-id-nergrit-xlmr-best"`,
        text: "Joko Widodo adalah presiden ketujuh Republik Indonesia.",
        output: `# Output: [("Joko", "B-PER"), ("Widodo", "I-PER"), ("adalah", "O"), ("presiden", "O"), ("ketujuh", "O"), ("Republik", "B-LOC"), ("Indonesia", "I-LOC")]`,
      }),
    },
  },
  {
    id: "th",
    desc: "This is a CRF-based model provided by the PyThaiNLP library.",
    displayName: "Thai - PyThaiNLP",
    usage: {
      prediction: PredictionCode({
        source: "library",
        modelArguments: `"pythainlp"`,
        text: "ในปี พ.ศ. 2562 กรุงเทพมหานครประสบกับปัญหา",
        output: "# Output: [('ใน', 'O'), ('ปี', 'O'), (' ', 'O'), ('พ.ศ.', 'B-DATE'), (' ', 'I-DATE'), ('2562', 'I-DATE'), (' ', 'O'), ('กรุงเทพมหานคร', 'B-LOCATION'), ('ประสบ', 'O'), ('กับ', 'O'), ('ปัญหา', 'O')]",
      }),
    },
  },
  {
    id: "th-sea",
    desc: "This is a CRF-based model using XLM-R embeddings trained on the ThaiNER 1.3 dataset.",
    displayName: "Thai - SEACoreNLP (ThaiNER 1.3)",
    usage: {
      prediction: PredictionCode({
        source: "pretrained",
        modelArguments: `"ner-th-thainer-xlmr-best"`,
        text: "ในปี พ.ศ. 2562 กรุงเทพมหานครประสบกับปัญหา",
        output: "# Output: [('ใน', 'O'), ('ปี', 'O'), (' ', 'O'), ('พ.ศ.', 'B-DATE'), (' ', 'I-DATE'), ('2562', 'I-DATE'), (' ', 'O'), ('กรุงเทพมหานคร', 'B-LOCATION'), ('ประสบ', 'O'), ('กับ', 'O'), ('ปัญหา', 'O')]",
      }),
    },
  },
  {
    id: "vi",
    desc: "This is a CRF-based model provided by the UnderTheSea library.",
    displayName: "Vietnamese - UnderTheSea",
    usage: {
      prediction: PredictionCode({
        source: "library",
        modelArguments: `"underthesea"`,
        text: "Thủ tướng Trung Quốc Ôn Gia Bảo đã đến thăm Việt Nam vào năm 2004.",
        output: "# Output: [('Thủ tướng', 'O'), ('Trung Quốc', 'B-LOC'), ('Ôn', 'B-PER'), ('Gia Bảo', 'I-PER'), ('đã', 'O'), ('đến', 'O'), ('thăm', 'O'), ('Việt Nam', 'B-LOC'), ('vào', 'O'), ('năm', 'O'), ('2004', 'O'), ('.', 'O')]",
      })
    }
  },
];

const config: DemoConfig = {
  taskId: "sea-ner-tagger",
  title: "Named Entity Recognition",
  desc: "Named Entity Recognition is the task of identifying named entities (people, locations, organizations, etc.) in the input text.",
  models: models,
};

export default config;
