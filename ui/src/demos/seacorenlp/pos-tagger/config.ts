import { DemoConfig } from "../../demos";
import { ModelConfig } from "../../models";

const models: ModelConfig[] = [
  {
    id: "id",
    desc: "Bi-LSTM + Deep Biaffine Attention model trained on Google Universal Dependencies dataset.",
    displayName: "Indonesian - Stanza (UPOS - UD-GSD)",
  },
  {
    id: "id-sea",
    desc: "XLM-R Embeddings + Feedforward Layer model trained on Google Universal Dependencies dataset.",
    displayName: "Indonesian - SEACoreNLP (UPOS - UD-GSD)",
  },
  {
    id: "th-orchid",
    desc: "Averaged perceptron model trained on the Orchid corpus with 47 XPOS categories.",
    displayName: "Thai - PyThaiNLP (XPOS - Orchid Corpus)",
  },
  {
    id: "th-orchid-ud",
    desc: "Averaged perceptron model trained on the Orchid corpus with XPOS mapped to 15 UPOS categories, not including SYM and X.",
    displayName: "Thai - PyThaiNLP (UPOS - Orchid Corpus)",
  },
  {
    id: "th-sea",
    desc: "XLM-R Embeddings + Feedforward Layer model trained on Parallel Universal Dependencies dataset.",
    displayName: "Thai - SEACoreNLP (UPOS - UD-PUD)",
  },
  {
    id: "ta",
    desc: "Bi-LSTM + Deep Biaffine Attention model trained on the TTB treebank.",
    displayName: "Tamil - Stanza (UPOS - UD-TTB)",
  },
  {
    id: "vi",
    desc: "CRF-based model trained on Vietnamese Dependency Treebank.",
    displayName: "Vietnamese - UnderTheSea (XPOS - VnDT)",
  },
  {
    id: "vi-sea",
    desc: "XLM-R Embeddings + Feedforward Layer model trained on Universal Dependencies dataset.",
    displayName: "Vietnamese - SEACoreNLP (UPOS - UD-VTB)",
  },
];

const config: DemoConfig = {
  taskId: "sea-pos-tagger",
  title: "POS Tagging",
  desc: "Part-of-speech (POS) Tagging is the task of disambiguating the POS of a token in a given text.",
  models: models,
};

export default config;
