import { DemoConfig } from "../../demos";
import { ModelConfig } from "../../models";
import { PredictionCode } from "./usage";

const models: ModelConfig[] = [
  {
    id: "id",
    desc: "Benepar (XLM-R Base + 8 Self-Attention Layers) [F1: 82.85%]",
    displayName: "Indonesian - SEACoreNLP",
    usage: {
      prediction: PredictionCode({
        modelName: "cp-id-kethu-benepar-xlmr-best",
        text: "Saya pergi ke sekolah",
        output: `
# Output:
# (TOP
#  (S
#    (NP-SBJ (PRP Saya))
#    (VP (VB pergi) (PP (IN ke) (NP (NN sekolah))))))`
      }),
    },
  },
  {
    id: "my",
    desc: "Benepar (XLM-R Base + 8 Self-Attention Layers) [F1: 81.76%]",
    displayName: "Burmese - SEACoreNLP",
  },
];

const config: DemoConfig = {
  taskId: "sea-const-parser",
  title: "Constituency Parsing",
  desc: "Constituency parsing is the task of breaking a text into sub-phrases, or constituents. Non-terminals in the parse tree are types of phrases, the terminals are the words in the sentence.",
  models: models,
};

export default config;
