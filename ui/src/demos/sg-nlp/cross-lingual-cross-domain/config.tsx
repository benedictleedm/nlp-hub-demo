import * as React from "react";
import { DemoConfig } from "../../demos";
import { ModelConfig } from "../../models";

const models: ModelConfig[] = [
  {
    id: "ufd",
    desc: "This model is based on the Unsupervised Feature Decomposition method introduced in the accompanying paper.\
           The source language is always English while the source domain could be either Books, DVDs or Music reviews.\
           The source domain will be different from the selected target domain and automatically selected in the backend.\
           The target language and target domain selected in the dropdown lists must match the input\
           text's language and domain.",
    displayName: "Unsupervised Feature Decomposition (UFD) Model",
    usage: {
      prediction: `from sgnlp.models.ufd import UFDModelBuilder, UFDPreprocessor

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
output = model_groups['books_de_dvd'](**instance_features)`,
    },
  },
];

const config: DemoConfig = {
  taskId: "cross-lingual-cross-domain",
  title: "Cross Lingual Cross Domain",
  desc: `Cross-lingual cross-domain sentiment analysis is the task of using a model trained on one language and one domain
  to predict the sentiment of input texts that belong to a different language and a different domain. The language and domain 
  that the model was trained on is referred to as the source language and source domain. The language and domain of the
  input texts is the target language and target domain.`,
  models: models,
};

export default config;
