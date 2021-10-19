import { DemoConfig } from "../../demos";
import { ModelConfig } from "../../models";

const models: ModelConfig[] = [
  {
    id: "nea",
    desc: "A model based on convolutional neural networks (CNNs), gated recurrent units (GRUs) and long-short\
           term memory units (LSTMs). This essay scoring model was developed for an essay which required students\
           to write a letter to their local newspaper discussing the effects that computers have on people.\
           Essays written for other essay prompts will generate non-meaningful scores.",
    displayName: "NEA",
    usage: { fromBackend: true },
  },
];

const config: DemoConfig = {
  taskId: "essay-scoring",
  title: "Essay Scoring",
  desc: "Essay Scoring is the task of automatically evaluating the quality of writing given a passage of text. Essay\
  scoring systems are developed for a specific essay prompt. New models will have to be developed for different essay\
  prompts.",
  models: models,
};

export default config;
