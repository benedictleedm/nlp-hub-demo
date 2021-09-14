interface PredictionCodeProps {
  source: string;
  modelArguments: string;
  text: string;
  output: string;
}

export const PredictionCode = ({ source, modelArguments, text, output }: PredictionCodeProps) => {
  return `from seacorenlp.data.tokenizers import Tokenizer

tokenizer = Tokenizer.from_${source}(${modelArguments})
text = "${text}"
results = tokenizer.tokenize(text)

print(results)
${output}`
};
