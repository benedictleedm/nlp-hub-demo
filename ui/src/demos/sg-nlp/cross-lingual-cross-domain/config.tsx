import * as React from "react";
import { DemoConfig } from "../../demos";
import { ModelConfig } from "../../models";

const models: ModelConfig[] = [
  {
    id: "ufd",
    desc: "This model is based on the Unsupervised Feature Decomposition method introduced in the accompanying paper.\
           For this demo, users have to select the target language and target domain which matches the input text's \
           language and domain. The source language is always English while the source domain will always be different\
           from the target domain. For example, if the target domain is product reviews for books, the demo will only \
           use models trained on DVD or Music reviews.",
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
  desc: `Labelling data for supervised learning is a challenge on its own, especially if the domain is uncommon or
  if few fluent speakers are available. Cross-lingual cross-domain sentiment analysis addressed this issue by training
  the sentiment analysis model on a different language and domain that has more labelled data, usually referred to as
  the source language and source domain. The source language is usually one of the major languages (eg, English, Chinese,
  French, etc). The language and domain that the model will be evaluated against and used to predict on is referred to as
  the target language and target domain.`,
  models: models,
};

export default config;
