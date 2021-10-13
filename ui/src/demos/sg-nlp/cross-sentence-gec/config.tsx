import { DemoConfig } from "../../demos";
import { ModelConfig } from "../../models";

const models: ModelConfig[] = [
  {
    id: "csgec",
    desc:
      "This model is based on the convolutional encoder-decoder architecture and also " +
      "incorporates cross-sentence context. The two preceding sentences are used as the " +
      "cross-sentence context. If there is only one sentence, no context will be included.",
    displayName: "Cross Sentence GEC",
    usage: {
      fromBackend: true,
    },
  },
];

const config: DemoConfig = {
  taskId: "grammatical-error-correction",
  title: "Grammatical Error Correction",
  desc:
    "Grammatical Error Correction is the task of correcting spelling, punctuation, " +
    " grammatical, and word choice errors in text. The input is a potentially erroneous " +
    "sentence and the system is expected to output a corrected sentence. For this demo, you " +
    'may specify more than one sentence in the "Original Sentences" section and the demo ' +
    "will automatically split the paragraph into sentences.",
  models: models,
};

export default config;
