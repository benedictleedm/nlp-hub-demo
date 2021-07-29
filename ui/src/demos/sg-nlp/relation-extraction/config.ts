import { DemoConfig } from "../../demos";
import { ModelConfig } from "../../models";

const models: ModelConfig[] = [
  {
    id: "lsr",
    desc: "This is a model that uses Latent Structure Refinement to perform document-level relation extraction.",
    displayName: "LSR",
    usage: {
      prediction: `from sgnlp_models.models.lsr import LsrModel, LsrConfig, LsrPreprocessor, LsrPostprocessor
from transformers import cached_path

# Download files from azure blob storage
rel2id_path = cached_path('https://sgnlp.blob.core.windows.net/models/lsr/rel2id.json')
word2id_path = cached_path('https://sgnlp.blob.core.windows.net/models/lsr/word2id.json')
ner2id_path = cached_path('https://sgnlp.blob.core.windows.net/models/lsr/ner2id.json')
rel_info_path = cached_path('https://sgnlp.blob.core.windows.net/models/lsr/rel_info.json')

PRED_THRESHOLD = 0.3
preprocessor = LsrPreprocessor(rel2id_path=rel2id_path, word2id_path=word2id_path, ner2id_path=ner2id_path)
postprocessor = LsrPostprocessor.from_file_paths(rel2id_path=rel2id_path, rel_info_path=rel_info_path,
                                                 pred_threshold=PRED_THRESHOLD)

# Load model
config = LsrConfig.from_pretrained('https://sgnlp.blob.core.windows.net/models/lsr/config.json')
model = LsrModel.from_pretrained('https://sgnlp.blob.core.windows.net/models/lsr/pytorch_model.bin', config=config)
model.eval()

# DocRED-like instance
instance = {
    "vertexSet": [...],
    "labels": [...],
    "title": "Lark Force",
    "sents": [...]
}

tensor_doc = preprocessor([instance])
output = model(**tensor_doc)

result = postprocessor(output.prediction[0], instance)`,
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
