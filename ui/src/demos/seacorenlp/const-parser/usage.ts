interface PredictionCodeProps {
  modelName: string;
  text: string;
  output: string;
}

export const PredictionCode = ({ modelName, text, output }: PredictionCodeProps) => {
  return `from seacorenlp.parsing import ConstituencyParser

parser = ConstituencyParser.from_pretrained("${modelName}")
text = "${text}"
trees = parser.predict(text)

print(trees[0])
${output}`
};
