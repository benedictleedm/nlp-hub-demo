import { DemoConfig } from "../../demos";
import { ModelConfig } from "../../models";

const models: ModelConfig[] = [
  {
    id: "lsr",
    desc: "This is a model that uses Latent Structure Refinement to perform document-level relation extraction.",
    displayName: "LSR",
    usage: {
      fromBackend: true,
    },
  },
];

const config: DemoConfig = {
  taskId: "relation-extraction",
  title: "Relation Extraction",
  desc: "Relation extraction is the task of predicting attributes and relations for entities in a document.",
  models: models,
};

export default config;
