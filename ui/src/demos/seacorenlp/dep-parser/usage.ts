interface PredictionCodeProps {
  source: string;
  modelArguments: string;
  text: string;
  output: string;
}

export const PredictionCode = ({ source, modelArguments, text, output }: PredictionCodeProps) => {
  return `from seacorenlp.parsing import DependencyParser

parser = DependencyParser.from_${source}(${modelArguments})
text = "${text}"
results = parser.predict(text)

print(results[0])
${output}`
};
