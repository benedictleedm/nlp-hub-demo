import * as React from "react";
import { DemoConfig } from "../../demos";
import { ModelConfig } from "../../models";

const models: ModelConfig[] = [
  {
    id: "roberta-base",
    desc: "This model is based on RoBERTa base, fine-tuned on RECCON dataset. For demo purposes, it is configured to detect the emotion 'anger'.",
    displayName: "RoBERTa base",
    usage: { fromBackend: true },
  },
];

const config: DemoConfig = {
  taskId: "emotion-entailment",
  title: "Emotion Entailment",
  desc: "Emotion entailment is the task of recognizing the cause behind emotions in conversations by identifying the utterance that caused the emotion.",
  models: models,
};

export default config;
