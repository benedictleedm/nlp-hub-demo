import * as React from "react";
import {
  ApartmentOutlined,
  EditOutlined,
  CheckOutlined,
  WechatOutlined,
  DeploymentUnitOutlined,
  SmileOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

import { ModelConfig } from "./models";
import { CONTENT_TYPE } from "../constants";

// SG-NLP Demos
import RelationExtractionDemo from "./sg-nlp/relation-extraction/RelationExtractionDemo";
import CrossLingualCrossDomainDemo from "./sg-nlp/cross-lingual-cross-domain/CrossLingualCrossDomainDemo";
import EmotionEntailmentDemo from "./sg-nlp/emotion-entailment/EmotionEntailmentDemo";
import CasualSpanExtractionDemo from "./sg-nlp/causal-span-extraction/CausalSpanExtractionDemo";
import IdentifyFollowUpQuestionDemo from "./sg-nlp/identify-follow-up-question/IdentifyFollowUpQuestionDemo";
import EssayScoringDemo from "./sg-nlp/essay-scoring/EssayScoringDemo";
import CrossSentenceGECDemo from "./sg-nlp/cross-sentence-gec/CrossSentenceGECDemo";
import RumourDetectionDemo from "./sg-nlp/rumour-detection/RumourDetectionDemo";

// SEACoreNLP Demos
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
  // IdentifyFollowUpQuestionDemo,
];
const sgnlpGrammarCorrectionDemos = [CrossSentenceGECDemo];
const sgnlpKnowledgeMiningDemos = [RelationExtractionDemo];
const sgnlpSentimentAnalysisDemos = [CrossLingualCrossDomainDemo];
const sgnlpSocialMediaAnalysisDemos = [RumourDetectionDemo];
const sgnlpOtherDemos = [EssayScoringDemo];

export const sgnlpGroups: DemoGroup[] = [
  // {
  //   label: "Automated Scoring Systems",
  //   icon: CheckOutlined,
  //   demos: sgnlpOtherDemos,
  // },
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
    label: "Sentiment Analysis",
    icon: SmileOutlined,
    demos: sgnlpSentimentAnalysisDemos,
  },
  {
    label: "Social Media Analysis",
    icon: TwitterOutlined,
    demos: sgnlpSocialMediaAnalysisDemos,
  },
];

export const sgnlpDemos = [
  EmotionEntailmentDemo,
  CasualSpanExtractionDemo,
  IdentifyFollowUpQuestionDemo,
  CrossSentenceGECDemo,
  RelationExtractionDemo,
  CrossLingualCrossDomainDemo,
  RumourDetectionDemo,
  EssayScoringDemo,
];

const seaTaggingDemos = [POSTaggerDemo, NERTaggerDemo];
const seaParsingDemos = [ConstituencyParserDemo, DependencyParserDemo];
const seacorenlpDemos = seaTaggingDemos.concat(seaParsingDemos);

const seacorenlpGroups: DemoGroup[] = [
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
