export const Usage = (modelName: string) => {
  return `from seacorenlp.parsing import ConstituencyParser

parser = ConstituencyParser.from_pretrained(${modelName})
text = "Saya pergi ke sekolah"
trees = parser.predict(text)

print(trees[0])
# Output:
# (TOP
#  (S
#    (NP-SBJ (PRP Saya))
#    (VP (VB pergi) (PP (IN ke) (NP (NN sekolah))))))`
};
