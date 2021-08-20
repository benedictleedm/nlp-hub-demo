interface PredictionCodeProps {
  source: string;
  modelArguments: string;
  text: string;
  output: string;
}

export const PredictionCode = ({ source, modelArguments, text, output }: PredictionCodeProps) => {
  return `from seacorenlp.tagging import POSTagger

tagger = POSTagger.from_${source}(${modelArguments})
text = "${text}"
results = tagger.predict(text)

print(results)
${output}`
};
