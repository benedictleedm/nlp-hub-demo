import { DemoConfig } from "../../demos";
import { ModelConfig } from "../../models";
import { PredictionCode } from "./usage";

const models: ModelConfig[] = [
  {
    id: "id",
    desc: "Bi-LSTM + Deep Biaffine Attention model trained on Google Universal Dependencies dataset.",
    displayName: "Indonesian - Stanza (UPOS - UD-GSD)",
    usage: {
      prediction: PredictionCode({
        source: "library",
        modelArguments: `"stanza", lang="id"`,
        text: "Saya pergi ke sekolah",
        output: "# Output: [('Saya', 'PRON'), ('pergi', 'VERB'), ('ke', 'ADP'), ('sekolah', 'NOUN')]",
      }),
    },
  },
  {
    id: "id-sea",
    desc: "XLM-R Embeddings + Feedforward Layer model trained on Google Universal Dependencies dataset.",
    displayName: "Indonesian - SEACoreNLP (UPOS - UD-GSD)",
    usage: {
      prediction: PredictionCode({
        source: "pretrained",
        modelArguments: `"pos-id-ud-xlmr-best"`,
        text: "Saya pergi ke sekolah",
        output: "# Output: [('Saya', 'PRON'), ('pergi', 'VERB'), ('ke', 'ADP'), ('sekolah', 'NOUN')]",
      }),
    },
  },
  {
    id: "th-orchid",
    desc: "Averaged perceptron model trained on the Orchid corpus with 47 XPOS categories.",
    displayName: "Thai - PyThaiNLP (XPOS - Orchid Corpus)",
    usage: {
      prediction: PredictionCode({
        source: "library",
        modelArguments: `"pythainlp", corpus="orchid"`,
        text: "ผมอยากกินข้าว",
        output: "# Output: [('ผม', 'PPRS'), ('อยาก', 'XVMM'), ('กิน', 'VACT'), ('ข้าว', 'NCMN')]",
      }),
    },
  },
  {
    id: "th-orchid-ud",
    desc: "Averaged perceptron model trained on the Orchid corpus with XPOS mapped to 15 UPOS categories, not including SYM and X.",
    displayName: "Thai - PyThaiNLP (UPOS - Orchid Corpus)",
    usage: {
      prediction: PredictionCode({
        source: "library",
        modelArguments: `"pythainlp", corpus="orchid_ud"`,
        text: "ผมอยากกินข้าว",
        output: "# Output: [('ผม', 'PRON'), ('อยาก', 'VERB'), ('กิน', 'VERB'), ('ข้าว', 'NOUN')]",
      }),
    },
  },
  {
    id: "th-sea",
    desc: "XLM-R Embeddings + Feedforward Layer model trained on Parallel Universal Dependencies dataset.",
    displayName: "Thai - SEACoreNLP (UPOS - UD-PUD)",
    usage: {
      prediction: PredictionCode({
        source: "pretrained",
        modelArguments: `"pos-th-ud-xlmr-best"`,
        text: "ผมอยากกินข้าว",
        output: "# Output: [('ผม', 'PRON'), ('อยาก', 'VERB'), ('กิน', 'VERB'), ('ข้าว', 'NOUN')]",
      }),
    },
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
    usage: {
      prediction: PredictionCode({
        source: "library",
        modelArguments: `"underthesea"`,
        text: "Tôi muốn ăn cơm.",
        output: "# Output: : [('Tôi', 'P'), ('muốn', 'V'), ('ăn', 'V'), ('cơm', 'N'), ('.', 'CH')]",
      }),
    },
  },
  {
    id: "vi-sea",
    desc: "XLM-R Embeddings + Feedforward Layer model trained on Universal Dependencies dataset.",
    displayName: "Vietnamese - SEACoreNLP (UPOS - UD-VTB)",
    usage: {
      prediction: PredictionCode({
        source: "pretrained",
        modelArguments: `"pos-vi-ud-xlmr-best"`,
        text: "Tôi muốn ăn cơm.",
        output: "# Output: [('Tôi', 'PROPN'), ('muốn', 'VERB'), ('ăn', 'VERB'), ('cơm', 'NOUN'), ('.', 'PUNCT')]",
      }),
    },
  },
];

const config: DemoConfig = {
  taskId: "sea-pos-tagger",
  title: "POS Tagging",
  desc: "Part-of-speech (POS) Tagging is the task of disambiguating the POS of a token in a given text.",
  models: models,
};

export default config;
