interface PredictionCodeProps {
  source: string;
  modelArguments: string;
  text: string;
  output: string;
}

export const PredictionCode = ({ source, modelArguments, text, output }: PredictionCodeProps) => {
  return `from seacorenlp.tagging import NERTagger

tagger = NERTagger.from_${source}(${modelArguments})
text = "${text}"
results = tagger.predict(text)

print(results)
${output}`
};
