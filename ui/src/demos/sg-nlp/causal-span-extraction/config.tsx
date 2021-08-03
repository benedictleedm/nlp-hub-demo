import * as React from "react";
import { DemoConfig } from "../../demos";
import { ModelConfig } from "../../models";

const models: ModelConfig[] = [
  {
    id: "spanbert",
    desc: "This model is based on SPANBert, fine-tuned on RECCON dataset.",
    displayName: "SPANBert",
    usage: {
      prediction: `from sgnlp.models.span_extraction import (
    RecconSpanExtractionConfig,
    RecconSpanExtractionModel,
    RecconSpanExtractionTokenizer,
    RecconSpanExtractionPreprocessor,
    RecconSpanExtractionPostprocessor,
)

# Load model
config = RecconSpanExtractionConfig.from_pretrained(
    "https://sgnlp.blob.core.windows.net/models/reccon_span_extraction/config.json"
)
tokenizer = RecconSpanExtractionTokenizer.from_pretrained(
    "mrm8488/spanbert-finetuned-squadv2"
)
model = RecconSpanExtractionModel.from_pretrained(
    "https://sgnlp.blob.core.windows.net/models/reccon_span_extraction/pytorch_model.bin",
    config=config,
)
preprocessor = RecconSpanExtractionPreprocessor(tokenizer)
postprocessor = RecconSpanExtractionPostprocessor()

# Model predict
input_batch = {
  "emotion": ["surprise", "surprise"],
  "target_utterance": [
      "Hi George ! It's good to see you !",
      "Hi George ! It's good to see you !",
  ],
  "evidence_utterance": [
      "Linda ? Is that you ? I haven't seen you in ages !",
      "Hi George ! It's good to see you !",
  ],
  "conversation_history": [
      "Linda ? Is that you ? I haven't seen you in ages ! Hi George ! It's good to see you !",
      "Linda ? Is that you ? I haven't seen you in ages ! Hi George ! It's good to see you !",
  ],
}

tensor_dict, evidences, examples, features = preprocessor(input_batch)
raw_output = model(**tensor_dict)
context, evidence_span, probability = postprocessor(
    raw_output, evidences, examples, features)`,
    },
  },
];

const config: DemoConfig = {
  taskId: "span-extraction",
  title: "Causal Span Extraction",
  desc: "This demo is an implementation of causal span extraction for recognizing the cause behind emotions in text.",
  models: models,
};

export default config;
