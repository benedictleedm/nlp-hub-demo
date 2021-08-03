import { DemoConfig } from "../../demos";
import { ModelConfig } from "../../models";

const models: ModelConfig[] = [
  {
    id: "nea",
    desc: "An automatic essay scoring system based on convolutional and recurrent neural networks, including GRU and\
           LSTM. Prompt 1 is used for scoring in this demo. Essay scored in this demo are assumed to be written for\
           Prompt 1.",
    displayName: "NEA",
    usage: {
        prediction: `from sgnlp.models.nea import (
    NEAArguments,
    NEAPreprocessor,
    NEAConfig,
    NEARegPoolingModel,
    NEATokenizer,
    download_tokenizer_files_from_azure)

# Download tokenizer files from azure
cfg = NEAArguments()
download_tokenizer_files_from_azure(cfg)

# Load model and preprocessor
config = NEAConfig.from_pretrained('https://sgnlp.blob.core.windows.net/models/nea/config.json')
model = NEARegPoolingModel.from_pretrained('https://sgnlp.blob.core.windows.net/models/nea/pytorch_model.bin',
                                                config=config)
tokenizer = NEATokenizer.from_pretrained(cfg.tokenizer_args["save_folder"])
preprocessor = NEAPreprocessor(tokenizer=tokenizer)

# Model predict
instance = """Dear @CAPS1 @CAPS2, I believe that using computers will benefit us in many ways like talking and becoming
            friends will others through websites like facebook and mysace. Using computers can help us find
            coordibates, locations, and able ourselfs to millions of information. Also computers will benefit us by
            helping with jobs as in planning a house plan and typing a @NUM1 page report for one of our jobs in less
            than writing it. Now lets go into the wonder world of technology. Using a computer will help us in life by
            talking or making friends on line. Many people have myspace, facebooks, aim, these all benefit us by
            having conversations with one another. Many people believe computers are bad but how can you make friends
            if you can never talk to them? I am very fortunate for having a computer that can help with not only
            school work but my social life and how I make friends. Computers help us with finding our locations,
            coordibates and millions of information online. If we didn't go on the internet a lot we wouldn't know how
            to go onto websites that @MONTH1 help us with locations and coordinates like @LOCATION1. Would you rather
            use a computer or be in @LOCATION3. When your supposed to be vacationing in @LOCATION2. Million of
            information is found on the internet. You can as almost every question and a computer will have it. Would
            you rather easily draw up a house plan on the computers or take @NUM1 hours doing one by hand with ugly
            erazer marks all over it, you are garrenteed that to find a job with a drawing like that. Also when
            appling for a job many workers must write very long papers like a @NUM3 word essay on why this job fits
            you the most, and many people I know don't like writing @NUM3 words non-stopp for hours when it could take
            them I hav an a computer. That is why computers we needed a lot now adays. I hope this essay has impacted
            your descion on computers because they are great machines to work with. The other day I showed my mom how
            to use a computer and she said it was the greatest invention sense sliced bread! Now go out and buy a
            computer to help you chat online with friends, find locations and millions of information on one click of
            the button and help your self with getting a job with neat, prepared, printed work that your boss will
            love."""

tokens = preprocessor([instance])
output = model(**tokens)`,
    },
  },
];

const config: DemoConfig = {
  taskId: "essay-scoring",
  title: "Essay Scoring",
  desc: "Essay Scoring is the task of evaluating the quality of writing given a passage of text.",
  models: models,
};

export default config;
