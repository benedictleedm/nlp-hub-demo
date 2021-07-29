import { DemoConfig } from "../../demos";
import { ModelConfig } from "../../models";

const models: ModelConfig[] = [
  {
    id: "csgec",
    desc: "This model is based on the convolutional encoder-decoder architecture.",
    displayName: "Cross Sentence GEC",
  },
];

const config: DemoConfig = {
  taskId: "grammatical-error-correction",
  title: "Grammatical Error Correction",
  desc:
    "Grammatical Error Correction is the task of correcting spelling, punctuation, " +
    " grammatical, and word choice errors in text. The input is a potentially erroneous " +
    "sentence and the system is expected to output a corrected sentence.",
  models: models,
};

export default config;
