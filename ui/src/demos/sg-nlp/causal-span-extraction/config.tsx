import { DemoConfig } from "../../demos";
import { ModelConfig } from "../../models";

const models: ModelConfig[] = [
  {
    id: "spanbert",
    desc: "This model is based on SPANBert, fine-tuned on RECCON dataset. For demo purposes, it is configured to detect the emotion 'anger'.",
    displayName: "SPANBert",
    usage: { fromBackend: true },
  },
];

const config: DemoConfig = {
  taskId: "span-extraction",
  title: "Causal Span Extraction",
  desc: "Causal span extraction is the task of recognizing the cause behind emotions in conversation by identifying spans that caused the emotion.",
  models: models,
};

export default config;
