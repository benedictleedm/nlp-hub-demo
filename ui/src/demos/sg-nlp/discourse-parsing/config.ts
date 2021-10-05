import { DemoConfig } from "../../demos";
import { ModelConfig } from "../../models";

const models: ModelConfig[] = [
  {
    id: "rst-pointer",
    desc: "This is a pointer network-based segmenter and parser that is trained to identify the relations between different sections of texts according to rhetorical structure theory (RST).",
    displayName: "RST-Pointer",
    usage: {
      fromBackend: true,
    },
  },
];

const config: DemoConfig = {
  taskId: "discourse-parsing",
  title: "Discourse Parsing",
  desc: "Discourse parsing is the task of determining coherent relations between different sections of texts.",
  models: models,
};

export default config;
