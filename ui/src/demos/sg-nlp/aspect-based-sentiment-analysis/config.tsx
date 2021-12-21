import { DemoConfig } from "../../demos";
import { ModelConfig } from "../../models";

const models: ModelConfig[] = [
  {
    id: "asgcn",
    desc: "Placeholder description",
    displayName: "ASGCN",
    usage: {
      fromBackend: true,
    },
  },
];

const config: DemoConfig = {
  taskId: "aspect-based-sentiment-analysis",
  title: "Aspect-Based Sentiment Analysis",
  desc:
    "Aspect-based sentiment analysis aims to classify the sentiment polarities of aspects found within the text. " +
    "An aspect is a term that is relevant for sentiment analysis, for example a product's attributes or feature. " +
    "A typical use case for to use it to analyze product reviews to understand which specific features in a product " +
    "bring about positive/negative feedback from the consumers." +
    "There are also models that aim to perform the aspect extraction and sentiment analysis in an end-to-end fashion.",
  models: models,
};

export default config;
