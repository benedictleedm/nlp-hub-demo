import { DemoConfig } from "../../demos";
import { ModelConfig } from "../../models";

const models: ModelConfig[] = [
  {
    id: "lif-3way-ap",
    desc: "This is a three way attentive pooling network. It is trained to consider up to three historical question and answer pairs.",
    displayName: "LIF3WayAP",
    usage: { fromBackend: true },
  },
];

const config: DemoConfig = {
  taskId: "identify-follow-up-question",
  title: "Identify Follow-Up Question",
  desc:
    "Identify follow-up question is a task of classifying whether a follow-up question is " +
    "valid given some context and  history of questions and answers.",
  models: models,
};

export default config;
