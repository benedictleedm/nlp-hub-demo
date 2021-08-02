import { DemoConfig } from "../../demos";
import { ModelConfig } from "../../models";

const models: ModelConfig[] = [
  {
    id: "lif-3way-ap",
    desc: "This is a three way attentive pooling network. It is trained to consider up to three historical question and answer pairs.",
    displayName: "LIF3WayAP",
    usage: {
      prediction: `from sgnlp.models.lif_3way_ap import LIF3WayAPModel, LIF3WayAPConfig, LIF3WayAPPreprocessor
from transformers import cached_path

# Load model
config = LIF3WayAPConfig.from_pretrained('https://sgnlp.blob.core.windows.net/models/lif_3way_ap/config.json')
model = LIF3WayAPModel.from_pretrained('https://sgnlp.blob.core.windows.net/models/lif_3way_ap/pytorch_model.bin',
                                       config=config)
model.eval()

# Load preprocessor
word_vocab_path = cached_path('https://sgnlp.blob.core.windows.net/models/lif_3way_ap/word_vocab.pt')
char_vocab_path = cached_path('https://sgnlp.blob.core.windows.net/models/lif_3way_ap/char_vocab.pt')

preprocessor = LIF3WayAPPreprocessor(min_word_padding_size=config.char_embedding_args["kernel_size"])
preprocessor.load_vocab(word_vocab_path, char_vocab_path)

# Model predict
instance = {
    "questions_and_answers": [{"question": "where was he born?", "answer": "Maynardville, Tennessee,"}],
    "context": "Acuff was born on September 15, 1903 in Maynardville, Tennessee, to Ida...",
    "candidate": "who were his parents"
}

tensor_dict = preprocessor([instance])
output = model(**tensor_dict)`,
    },
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
