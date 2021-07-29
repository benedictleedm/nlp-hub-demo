import { DemoConfig } from "../../demos";
import { ModelConfig } from "../../models";

const models: ModelConfig[] = [
  {
    id: "rumour-detection-twitter",
    desc: "This model is based on the hierarchical transformer architecture.",
    displayName: "Rumour Detection in Tweets",
  },
];

const config: DemoConfig = {
  taskId: "rumour-detection-twitter",
  title: "Rumour Detection",
  desc:
    "This model attempts to detect whether the first post in a thread of tweets contains a rumour by taking into account the responses in the thread. The model returns 1 of 4 possible categories - True, False, Unverified or Non-Rumour.",
  models: models,
};

export default config;
