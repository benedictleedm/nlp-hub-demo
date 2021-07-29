import { DemoConfig } from "../../demos";
import { ModelConfig } from "../../models";

const models: ModelConfig[] = [
  {
    id: "id-sea",
    desc: "This is a CRF-based model using XLM-R embeddings trained on the NER-GRIT dataset.",
    displayName: "Indonesian - SEACoreNLP (NER-GRIT)",
  },
  {
    id: "th",
    desc: "This is a CRF-based model provided by the PyThaiNLP library.",
    displayName: "Thai - PyThaiNLP",
  },
  {
    id: "th-sea",
    desc: "This is a CRF-based model using XLM-R embeddings trained on the ThaiNER 1.3 dataset.",
    displayName: "Thai - SEACoreNLP (ThaiNER 1.3)",
  },
  {
    id: "vi",
    desc: "This is a CRF-based model provided by the UnderTheSea library.",
    displayName: "Vietnamese - UnderTheSea",
  },
];

const config: DemoConfig = {
  taskId: "sea-ner-tagger",
  title: "Named Entity Recognition",
  desc: "Named Entity Recognition is the task of identifying named entities (people, locations, organizations, etc.) in the input text.",
  models: models,
};

export default config;
