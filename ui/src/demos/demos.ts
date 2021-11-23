import * as React from "react";
import {
  ReadOutlined,
  ApartmentOutlined,
  EditOutlined,
  WechatOutlined,
  DeploymentUnitOutlined,
  TwitterOutlined,
  ScissorOutlined,
  SmileOutlined,
} from "@ant-design/icons";

import { ModelConfig } from "./models";
import { CONTENT_TYPE } from "../constants";

// SG-NLP Demos
import RelationExtractionDemo from "./sg-nlp/relation-extraction/RelationExtractionDemo";
import EmotionEntailmentDemo from "./sg-nlp/emotion-entailment/EmotionEntailmentDemo";
import CasualSpanExtractionDemo from "./sg-nlp/causal-span-extraction/CausalSpanExtractionDemo";
import CrossSentenceGECDemo from "./sg-nlp/cross-sentence-gec/CrossSentenceGECDemo";
import RumourDetectionDemo from "./sg-nlp/rumour-detection/RumourDetectionDemo";
import DiscourseParsingDemo from "./sg-nlp/discourse-parsing/DiscourseParsingDemo";
import CrossLingualCrossDomainDemo from "./sg-nlp/cross-lingual-cross-domain/CrossLingualCrossDomainDemo";

// SEACoreNLP Demos
import TokenizerDemo from "./seacorenlp/tokenizer/TokenizerDemo";
import POSTaggerDemo from "./seacorenlp/pos-tagger/POSTaggerDemo";
import NERTaggerDemo from "./seacorenlp/ner-tagger/NERTaggerDemo";
import ConstituencyParserDemo from "./seacorenlp/const-parser/ConstituencyParserDemo";
import DependencyParserDemo from "./seacorenlp/dep-parser/DependencyParserDemo";

export interface DemoConfig {
  taskId: string;
  title: string;
  desc: string;
  models: ModelConfig[];
}

export interface Demo {
  component: React.ReactNode;
  config: DemoConfig;
}

interface DemoGroup {
  label: string;
  icon: any;
  demos: Demo[];
}

const sgnlpConversationalToolsDemos = [
  EmotionEntailmentDemo,
  CasualSpanExtractionDemo,
];
const sgnlpGrammarCorrectionDemos = [CrossSentenceGECDemo];
const sgnlpKnowledgeMiningDemos = [RelationExtractionDemo];
const sgnlpSocialMediaAnalysisDemos = [RumourDetectionDemo];
const sgnlpDiscourseParsingDemos = [DiscourseParsingDemo];
const sgnlpSentimentAnalysisDemos = [CrossLingualCrossDomainDemo];

export const sgnlpGroups: DemoGroup[] = [
  {
    label: "Conversational Tools",
    icon: WechatOutlined,
    demos: sgnlpConversationalToolsDemos,
  },
  {
    label: "Grammar Correction",
    icon: EditOutlined,
    demos: sgnlpGrammarCorrectionDemos,
  },
  {
    label: "Knowledge Mining",
    icon: DeploymentUnitOutlined,
    demos: sgnlpKnowledgeMiningDemos,
  },
  {
    label: "Social Media Analysis",
    icon: TwitterOutlined,
    demos: sgnlpSocialMediaAnalysisDemos,
  },
  {
    label: "Document Analysis",
    icon: ReadOutlined,
    demos: sgnlpDiscourseParsingDemos,
  },
  {
    label: "Sentiment Analysis",
    icon: SmileOutlined,
    demos: sgnlpSentimentAnalysisDemos,
  },
];

export const sgnlpDemos = [
  EmotionEntailmentDemo,
  CasualSpanExtractionDemo,
  CrossSentenceGECDemo,
  RelationExtractionDemo,
  RumourDetectionDemo,
  DiscourseParsingDemo,
  CrossLingualCrossDomainDemo
];

const seaSegmentationDemos = [TokenizerDemo];
const seaTaggingDemos = [POSTaggerDemo, NERTaggerDemo];
const seaParsingDemos = [ConstituencyParserDemo, DependencyParserDemo];
const seacorenlpDemos = seaSegmentationDemos.concat(
  seaTaggingDemos,
  seaParsingDemos
);

const seacorenlpGroups: DemoGroup[] = [
  {
    label: "Text Segmentation",
    icon: ScissorOutlined,
    demos: seaSegmentationDemos,
  },
  {
    label: "Token-level Tagging",
    icon: EditOutlined,
    demos: seaTaggingDemos,
  },
  {
    label: "Syntactic Parsing",
    icon: ApartmentOutlined,
    demos: seaParsingDemos,
  },
];

export const demos = {
  SGNLP: sgnlpDemos,
  SEACORENLP: seacorenlpDemos,
}[CONTENT_TYPE];

export const demoGroups = {
  SGNLP: sgnlpGroups,
  SEACORENLP: seacorenlpGroups,
}[CONTENT_TYPE];
