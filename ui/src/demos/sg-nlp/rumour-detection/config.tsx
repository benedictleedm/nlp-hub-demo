import { DemoConfig } from "../../demos";
import { ModelConfig } from "../../models";

const models: ModelConfig[] = [
  {
    id: "rumour-detection-twitter",
    desc: "This model is based on the hierarchical transformer architecture introduced in the accompanying paper. The model assesses the first post based on its content and the tweets following it.",
    displayName: "Rumour Detection in Tweets",
  },
];

const config: DemoConfig = {
  taskId: "rumour-detection-twitter",
  title: "Rumour Detection",
  desc:
    "Rumour Detection is the task of determining whether a social media post contains a True Rumour, a False Rumour, an Unverified Rumour or a Non-Rumour. When the model is confident of the rumour's veracity, it will tag the post as a True Rumour or a False Rumour. Posts will be tagged as an Unverified Rumour when more information is required. Finally, a post will be tagged as a Non-Rumour if its content does not contain a rumour.",
  models: models,
};

export default config;
