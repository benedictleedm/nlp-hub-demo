import * as React from "react";
import { DemoConfig } from "../../demos";
import { ModelConfig } from "../../models";

const models: ModelConfig[] = [
  {
    id: "ufd",
    desc: "This model is based on the Unsupervised Feature Decomposition method.",
    displayName: "Unsupervised Feature Decomposition (UFD) Model",
    usage: {
      prediction: `from sgnlp_models.models.ufd import UFDModelBuilder, UFDPreprocessor

# Instantiate model builder and preprocessor
model_builder = UFDModelBuilder(
    source_domains=['books'],
    target_languages=['de'],
    target_domains=['dvd'])
preprocessor = UFDPreprocessor()

# Build pretrained model groups
model_groups = model_builder.build_model_group()

# Model predict ('books_de_dvd' model example)
instance = """Wolverine is BACK Der Film ist im Grunde wie alle Teile der X-Men für Comic-Fans auf jeden Fall ein muss.
              Hugh Jackman spielt seine Rolle wie immer so gut was ich von den ein oder anderen Darsteller leider nicht 
              sagen kann. Story und Action sind aber genug Gründe um sich die Blu-ray zu kaufen."""

instance_features = preprocessor([instance])
output = model_groups['books_de_dvd'](instance_features)`,
    },
  },
];

const config: DemoConfig = {
  taskId: "cross-lingual-cross-domain",
  title: "Cross Lingual Cross Domain",
  desc: `Cross-lingual cross-domain is the task of predicting on a target language and a target domain 
  when there is no labelled data of the target domain in the source and target language.`,
  models: models,
};

export default config;
