import { createServer, Response } from "miragejs";

export default function () {
  createServer({
    routes() {
      /* =============
         SG-NLP Models
         =============

         1. Relation Extraction
         2. Cross-lingual Cross-domain: UFD
         3. RECCON: Causal Span Extraction
         4. Emotion Entailment
         5. Identity Follow-Up Questions
         6. Essay Scoring
         7. Cross Sentence GEC
         8. Rumour Detection
         9. Discourse Parsing

         -------------- */

      // Relation extraction
      this.post("/api/relation-extraction/lsr/predict", () => {
        return new Response(
          200,
          {},
          {
            clusters: [
              [
                [0, 4],
                [153, 155],
                [171, 174],
              ],
              [
                [34, 36],
                [53, 54],
                [96, 97],
              ],
              [
                [80, 82],
                [169, 170],
                [191, 193],
              ],
              [
                [10, 12],
                [103, 105],
              ],
              [
                [38, 39],
                [111, 112],
                [125, 135],
                [140, 148],
              ],
              [
                [72, 73],
                [120, 124],
              ],
              [
                [6, 8],
                [183, 185],
              ],
              [[13, 16]],
              [[25, 30]],
              [[31, 33]],
              [[55, 56]],
              [[57, 58]],
              [[164, 168]],
              [[194, 196]],
            ],
            document: [
              "Zest",
              "Airways",
              ",",
              "Inc.",
              "operated",
              "as",
              "AirAsia",
              "Zest",
              "(",
              "formerly",
              "Asian",
              "Spirit",
              "and",
              "Zest",
              "Air",
              ")",
              ",",
              "was",
              "a",
              "low",
              "-",
              "cost",
              "airline",
              "based",
              "at",
              "the",
              "Ninoy",
              "Aquino",
              "International",
              "Airport",
              "in",
              "Pasay",
              "City",
              ",",
              "Metro",
              "Manila",
              "in",
              "the",
              "Philippines",
              ".",
              "It",
              "operated",
              "scheduled",
              "domestic",
              "and",
              "international",
              "tourist",
              "services",
              ",",
              "mainly",
              "feeder",
              "services",
              "linking",
              "Manila",
              "and",
              "Cebu",
              "with",
              "24",
              "domestic",
              "destinations",
              "in",
              "support",
              "of",
              "the",
              "trunk",
              "route",
              "operations",
              "of",
              "other",
              "airlines",
              ".",
              "In",
              "2013",
              ",",
              "the",
              "airline",
              "became",
              "an",
              "affiliate",
              "of",
              "Philippines",
              "AirAsia",
              "operating",
              "their",
              "brand",
              "separately",
              ".",
              "Its",
              "main",
              "base",
              "was",
              "Ninoy",
              "Aquino",
              "International",
              "Airport",
              ",",
              "Manila",
              ".",
              "The",
              "airline",
              "was",
              "founded",
              "as",
              "Asian",
              "Spirit",
              ",",
              "the",
              "first",
              "airline",
              "in",
              "the",
              "Philippines",
              "to",
              "be",
              "run",
              "as",
              "a",
              "cooperative",
              ".",
              "On",
              "August",
              "16",
              ",",
              "2013",
              ",",
              "the",
              "Civil",
              "Aviation",
              "Authority",
              "of",
              "the",
              "Philippines",
              "(",
              "CAAP",
              ")",
              ",",
              "the",
              "regulating",
              "body",
              "of",
              "the",
              "Government",
              "of",
              "the",
              "Republic",
              "of",
              "the",
              "Philippines",
              "for",
              "civil",
              "aviation",
              ",",
              "suspended",
              "Zest",
              "Air",
              "flights",
              "until",
              "further",
              "notice",
              "because",
              "of",
              "safety",
              "issues",
              ".",
              "Less",
              "than",
              "a",
              "year",
              "after",
              "AirAsia",
              "and",
              "Zest",
              "Air",
              "'s",
              "strategic",
              "alliance",
              ",",
              "the",
              "airline",
              "has",
              "been",
              "rebranded",
              "as",
              "AirAsia",
              "Zest",
              ".",
              "The",
              "airline",
              "was",
              "merged",
              "into",
              "AirAsia",
              "Philippines",
              "in",
              "January",
              "2016",
              ".",
            ],
            relations: [
              {
                score: 0.7705950140953064,
                relation: "country",
                object_idx: 0,
                subject_idx: 4,
              },
              {
                score: 0.7438603043556213,
                relation: "headquarters location",
                object_idx: 0,
                subject_idx: 9,
              },
              {
                score: 0.8671950101852417,
                relation: "country",
                object_idx: 1,
                subject_idx: 4,
              },
              {
                score: 0.506489634513855,
                relation: "contains administrative territorial entity",
                object_idx: 1,
                subject_idx: 9,
              },
              {
                score: 0.4552365839481354,
                relation: "country",
                object_idx: 2,
                subject_idx: 4,
              },
              {
                score: 0.3873765468597412,
                relation: "contains administrative territorial entity",
                object_idx: 4,
                subject_idx: 1,
              },
              {
                score: 0.31146663427352905,
                relation: "owned by",
                object_idx: 6,
                subject_idx: 2,
              },
              {
                score: 0.5645918250083923,
                relation: "country",
                object_idx: 6,
                subject_idx: 4,
              },
              {
                score: 0.5823311805725098,
                relation: "country",
                object_idx: 8,
                subject_idx: 4,
              },
              {
                score: 0.5698578357696533,
                relation: "located in the administrative territorial entity",
                object_idx: 9,
                subject_idx: 1,
              },
              {
                score: 0.9171241521835327,
                relation: "country",
                object_idx: 9,
                subject_idx: 4,
              },
              {
                score: 0.6013875007629395,
                relation: "country",
                object_idx: 10,
                subject_idx: 4,
              },
            ],
          }
        );
      });
      // Cross-lingual Cross-domain: UFD
      this.post("/api/cross-lingual-cross-domain/ufd/predict", () => {
        return new Response(
          200,
          {},
          {
            music: {
              sentiment: 1,
              probability: 0.893,
              target_language: "de",
              target_domain: "books",
            },
            dvd: {
              sentiment: 1,
              probability: 0.921,
              target_language: "de",
              target_domain: "books",
            },
          }
        );
      });
      // RECCON: Causal Span Extraction
      this.post("/api/span-extraction/spanbert/predict", () => {
        return new Response(
          200,
          {},
          {
            utterances: [
              ["Why don 't you", "watch where you 're going ?"],
              ["Me?"],
              ["You 're the one who pulled out in front of me !"],
              ["There was plenty of room for me to pull out ."],
              ["You didn 't have to stay in the lane you were in ."],
              [
                "Hey , listen . I had every right to stay in the lane I was in .",
              ],
              ["You were supposed to wait until I passed to pull out ."],
              [
                "And anyhow , ",
                "you didn 't give me any time to change lanes.",
              ],
              [
                "All of a sudden",
                "--BANG--",
                "there you are right in front of me .",
              ],
            ],
            evidence_span: [
              [1, 0],
              [0],
              [1],
              [1],
              [0],
              [0],
              [0],
              [0, 1],
              [0, 1, 0],
            ],
            probability: [
              [0.8, -1],
              [-1],
              [0.89],
              [0.75],
              [-1],
              [-1],
              [-1],
              [-1, 0.91],
              [-1, 0.7, -1],
            ],
            emotion: "anger",
          }
        );
      });
      // RECCON: Emotion Entailment
      this.post("/api/emotion-entailment/roberta-base/predict", () => {
        return new Response(
          200,
          {},
          {
            utterances: [
              "David , why didn ' t you clean the room ?",
              "I ' m not in the mood .",
              "Why are you feeling depressed ?",
              "I was told my girlfriend was speaking ill of me .",
              "That ' s a real let-down .",
            ],
            causal_idx: [0, 0, 0, 1, 1],
            emotion: "sadness",
          }
        );
      });
      // Identify Follow-Up Questions
      this.post("/api/identify-follow-up-question/lif-3way-ap/predict", () => {
        return new Response(200, {}, { probability: 0.9 });
      });
      // Essay Scoring
      this.post("/api/essay-scoring/nea/predict", () => {
        return new Response(200, {}, { predictions: [0.1] });
      });
      // Cross Sentence GEC
      this.post("/api/grammatical-error-correction/csgec/predict", () => {
        return new Response(
          200,
          {},
          {
            original_text:
              "Machines have replaced a bunch of coolies and heavy labor. Cars and trucks diminish the redundancy of long time shipment. " +
              "As a result, people have more time to enjoy advantage of modern life. One can easily travel to the other half of the globe " +
              "to see beautiful scenery that one dreams for his lifetime. One can also easily see his deeply loved one through internet from miles away.",
            corrected_text:
              "Machines have replaced a bunch of coolies and heavy laborers. Cars and trucks diminish the redundancy of long time shipments. " +
              "As a result, people have more time to enjoy the advantage of modern life. One can easily travel to the other half of the globe " +
              "to see beautiful scenery that one dreams for his life. One can also easily see his deeply loved one through the internet from miles away.",
          }
        );
      });
      // Rumour Detection
      this.post(
        "/api/rumour-detection-twitter/rumour-detection-twitter/predict",
        () => {
          return new Response(
            200,
            {},
            { predicted_y: "a true rumour", predicted_prob: 99.8 }
          );
        }
      );
      // Discourse Parsing
      this.post("/api/discourse-parsing/rst-pointer/predict", () => {
        return new Response(
          200,
          {},
          {
            tree: {
              root: {
                attributes: ["root"],
                children: [
                  {
                    attributes: ["Joint"],
                    link: "Nucleus",
                    word: "Thumbs began to be troublesome about 4 months ago",
                  },
                  {
                    attributes: ["Joint"],
                    children: [
                      {
                        attributes: ["span"],
                        link: "Nucleus",
                        word: "and I made an appointment with the best hand surgeon in the Valley",
                      },
                      {
                        attributes: ["Enablement"],
                        children: [
                          {
                            attributes: ["Attribution"],
                            link: "Satellite",
                            word: "to see",
                          },
                          {
                            attributes: ["span"],
                            link: "Nucleus",
                            word: "if my working activities were the problem.",
                          },
                        ],
                        link: "Satellite",
                        word: "to see if my working activities were the problem.",
                      },
                    ],
                    link: "Nucleus",
                    word: "and I made an appointment with the best hand surgeon in the Valley to see if my working activities were the problem.",
                  },
                ],
                word: "Thumbs began to be troublesome about 4 months ago and I made an appointment with the best hand surgeon in the Valley to see if my working activities were the problem.",
              },
              text: "Thumbs began to be troublesome about 4 months ago and I made an appointment with the best hand surgeon in the Valley to see if my working activities were the problem.",
            },
          }
        );
      });
      /* =================
         SEACoreNLP Models
         =================

         1. Tokenizer
         2. POS Tagger
         3. NER Tagger
         4. Dependency Parser
         5. Constituency Parser

         ------------------------ */

      // Tokenizer
      this.post("/api/sea-tokenizer/**", () => {
        return new Response(
          200,
          {},
          {
            words: [
              "กรุงเทพมหานคร",
              "เป็น",
              "เมืองหลวง",
              "และ",
              "นคร",
              "ที่",
              "มี",
              "ประชากร",
              "มาก",
              "ที่สุด",
              "ของ",
              "ประเทศไทย",
            ],
          }
        );
      });
      // POS Tagger
      this.post("/api/sea-pos-tagger/**", () => {
        return new Response(
          200,
          {},
          {
            words: [
              "Semua",
              " manusia dilahirkan",
              " ",
              "bebas",
              " ",
              "dan",
              " ",
              "samarata dari",
              " ",
              "segi",
              " kemuliaan",
              " ",
              "dan",
              " hak-hak",
              ".",
            ],
            tags: [
              "NCMN",
              "NCMN",
              "PUNC",
              "NCMN",
              "PUNC",
              "NCMN",
              "PUNC",
              "NCMN",
              "PUNC",
              "NCMN",
              "NCMN",
              "PUNC",
              "NCMN",
              "NCMN",
              "PUNC",
            ],
          }
        );
      });
      // NER Tagger
      this.post("/api/sea-ner-tagger/**", () => {
        return new Response(
          200,
          {},
          {
            words: [
              "ใน",
              "ปี",
              " ",
              "พ.ศ.",
              " ",
              "2561",
              " ",
              "และ",
              " ",
              "พ.ศ.",
              " ",
              "2562",
              " ",
              "กรุงเทพมหานคร",
              "ประสบ",
              "กับ",
              "ปัญหา",
              "ค่า",
              "ฝุ่นละออง",
              "เกิด",
              "มาตรา",
              "ฐาน",
            ],
            tags: [
              "O",
              "O",
              "O",
              "B-DATE",
              "I-DATE",
              "L-DATE",
              "O",
              "O",
              "O",
              "B-DATE",
              "I-DATE",
              "L-DATE",
              "O",
              "U-LOC",
              "O",
              "O",
              "O",
              "O",
              "O",
              "O",
              "O",
              "O",
            ],
          }
        );
      });
      // Dependency Parser
      this.post("/api/sea-dep-parser/**", () => {
        return new Response(200, {}, [
          {
            tree: {
              text: "All human beings are born free and equal in dignity and rights.",
              root: {
                word: "born",
                nodeType: "ROOT",
                attributes: ["VERB"],
                link: "ROOT",
                spans: [{ start: 21, end: 25 }],
                children: [
                  {
                    word: "beings",
                    nodeType: "nsubjpass",
                    attributes: ["NOUN"],
                    link: "nsubjpass",
                    spans: [{ start: 10, end: 16 }],
                    children: [
                      {
                        word: "All",
                        nodeType: "det",
                        attributes: ["DET"],
                        link: "det",
                        spans: [{ start: 0, end: 3 }],
                      },
                      {
                        word: "human",
                        nodeType: "amod",
                        attributes: ["ADJ"],
                        link: "amod",
                        spans: [{ start: 4, end: 9 }],
                      },
                    ],
                  },
                  {
                    word: "are",
                    nodeType: "auxpass",
                    attributes: ["AUX"],
                    link: "auxpass",
                    spans: [{ start: 17, end: 20 }],
                  },
                  {
                    word: "free",
                    nodeType: "advcl",
                    attributes: ["ADJ"],
                    link: "advcl",
                    spans: [{ start: 26, end: 30 }],
                    children: [
                      {
                        word: "and",
                        nodeType: "cc",
                        attributes: ["CCONJ"],
                        link: "cc",
                        spans: [{ start: 31, end: 34 }],
                      },
                      {
                        word: "equal",
                        nodeType: "conj",
                        attributes: ["ADJ"],
                        link: "conj",
                        spans: [{ start: 35, end: 40 }],
                        children: [
                          {
                            word: "in",
                            nodeType: "prep",
                            attributes: ["ADP"],
                            link: "prep",
                            spans: [{ start: 41, end: 43 }],
                            children: [
                              {
                                word: "dignity",
                                nodeType: "pobj",
                                attributes: ["NOUN"],
                                link: "pobj",
                                spans: [{ start: 44, end: 51 }],
                                children: [
                                  {
                                    word: "and",
                                    nodeType: "cc",
                                    attributes: ["CCONJ"],
                                    link: "cc",
                                    spans: [{ start: 52, end: 55 }],
                                  },
                                  {
                                    word: "rights",
                                    nodeType: "conj",
                                    attributes: ["NOUN"],
                                    link: "conj",
                                    spans: [{ start: 56, end: 62 }],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    word: ".",
                    nodeType: "punct",
                    attributes: ["PUNCT"],
                    link: "punct",
                    spans: [{ start: 62, end: 63 }],
                  },
                ],
              },
            },
            sentence:
              "All human beings are born free and equal in dignity and rights.",
          },
          {
            tree: {
              text: "They are endowed with reason and conscience and should act towards one another in a spirit of brotherhood.",
              root: {
                word: "endowed",
                nodeType: "ROOT",
                attributes: ["VERB"],
                link: "ROOT",
                spans: [{ start: 9, end: 16 }],
                children: [
                  {
                    word: "They",
                    nodeType: "nsubjpass",
                    attributes: ["PRON"],
                    link: "nsubjpass",
                    spans: [{ start: 0, end: 4 }],
                  },
                  {
                    word: "are",
                    nodeType: "auxpass",
                    attributes: ["AUX"],
                    link: "auxpass",
                    spans: [{ start: 5, end: 8 }],
                  },
                  {
                    word: "with",
                    nodeType: "prep",
                    attributes: ["ADP"],
                    link: "prep",
                    spans: [{ start: 17, end: 21 }],
                    children: [
                      {
                        word: "reason",
                        nodeType: "pobj",
                        attributes: ["NOUN"],
                        link: "pobj",
                        spans: [{ start: 22, end: 28 }],
                        children: [
                          {
                            word: "and",
                            nodeType: "cc",
                            attributes: ["CCONJ"],
                            link: "cc",
                            spans: [{ start: 29, end: 32 }],
                          },
                          {
                            word: "conscience",
                            nodeType: "conj",
                            attributes: ["NOUN"],
                            link: "conj",
                            spans: [{ start: 33, end: 43 }],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    word: "and",
                    nodeType: "cc",
                    attributes: ["CCONJ"],
                    link: "cc",
                    spans: [{ start: 44, end: 47 }],
                  },
                  {
                    word: "act",
                    nodeType: "conj",
                    attributes: ["VERB"],
                    link: "conj",
                    spans: [{ start: 55, end: 58 }],
                    children: [
                      {
                        word: "should",
                        nodeType: "aux",
                        attributes: ["VERB"],
                        link: "aux",
                        spans: [{ start: 48, end: 54 }],
                      },
                      {
                        word: "towards",
                        nodeType: "prep",
                        attributes: ["ADP"],
                        link: "prep",
                        spans: [{ start: 59, end: 66 }],
                        children: [
                          {
                            word: "one",
                            nodeType: "pobj",
                            attributes: ["NUM"],
                            link: "pobj",
                            spans: [{ start: 67, end: 70 }],
                            children: [
                              {
                                word: "another",
                                nodeType: "det",
                                attributes: ["DET"],
                                link: "det",
                                spans: [{ start: 71, end: 78 }],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        word: "in",
                        nodeType: "prep",
                        attributes: ["ADP"],
                        link: "prep",
                        spans: [{ start: 79, end: 81 }],
                        children: [
                          {
                            word: "spirit",
                            nodeType: "pobj",
                            attributes: ["NOUN"],
                            link: "pobj",
                            spans: [{ start: 84, end: 90 }],
                            children: [
                              {
                                word: "a",
                                nodeType: "det",
                                attributes: ["DET"],
                                link: "det",
                                spans: [{ start: 82, end: 83 }],
                              },
                              {
                                word: "of",
                                nodeType: "prep",
                                attributes: ["ADP"],
                                link: "prep",
                                spans: [{ start: 91, end: 93 }],
                                children: [
                                  {
                                    word: "brotherhood",
                                    nodeType: "pobj",
                                    attributes: ["NOUN"],
                                    link: "pobj",
                                    spans: [{ start: 94, end: 105 }],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    word: ".",
                    nodeType: "punct",
                    attributes: ["PUNCT"],
                    link: "punct",
                    spans: [{ start: 105, end: 106 }],
                  },
                ],
              },
            },
            sentence:
              "They are endowed with reason and conscience and should act towards one another in a spirit of brotherhood.",
          },
        ]);
      });
      // Constituency Parsing
      this.post("/api/sea-const-parser/**", () => {
        return new Response(200, {}, [
          {
            tree: {
              text: "Semua manusia dilahirkan bebas dan samarata dari segi kemuliaan dan hak-hak",
              root: {
                word: "Semua manusia dilahirkan bebas dan samarata dari segi kemuliaan dan hak-hak",
                nodeType: "ROOT",
                attributes: ["NOUN"],
                link: "ROOT",
                children: [
                  {
                    word: "Semua manusia dilahirkan bebas dan",
                    nodeType: "NOUN",
                    attributes: ["NOUN"],
                    link: "NOUN",
                    children: [
                      {
                        word: "Semua manusia dilahirkan",
                        nodeType: "NOUN",
                        attributes: ["NOUN"],
                        link: "NOUN",
                        children: [
                          {
                            word: "Semua",
                            nodeType: "POS",
                            attributes: ["conj"],
                            link: "POS",
                          },
                          {
                            word: "manusia dilahirkan",
                            nodeType: "NOUN",
                            attributes: ["NOUN"],
                            link: "NOUN",
                            children: [
                              {
                                word: "manusia",
                                nodeType: "POS",
                                attributes: ["noun"],
                                link: "POS",
                              },
                              {
                                word: "dilahirkan",
                                nodeType: "POS",
                                attributes: ["adv"],
                                link: "POS",
                              },
                            ],
                          },
                        ],
                      },
                      {
                        word: "bebas dan",
                        nodeType: "NOUN",
                        attributes: ["NOUN"],
                        link: "NOUN",
                        children: [
                          {
                            word: "bebas",
                            nodeType: "POS",
                            attributes: ["verb"],
                            link: "POS",
                          },
                          {
                            word: "dan",
                            nodeType: "POS",
                            attributes: ["conj"],
                            link: "POS",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    word: "samarata dari segi kemuliaan dan hak-hak",
                    nodeType: "POS",
                    attributes: [null],
                    link: "POS",
                    children: [
                      {
                        word: "samarata dari segi kemuliaan dan",
                        nodeType: "NOUN",
                        attributes: ["NOUN"],
                        link: "NOUN",
                        children: [
                          {
                            word: "samarata dari segi kemuliaan",
                            nodeType: "NOUN",
                            attributes: ["NOUN"],
                            link: "NOUN",
                            children: [
                              {
                                word: "samarata",
                                nodeType: "POS",
                                attributes: ["verb"],
                                link: "POS",
                              },
                              {
                                word: "dari segi kemuliaan",
                                nodeType: "NOUN",
                                attributes: ["NOUN"],
                                link: "NOUN",
                                children: [
                                  {
                                    word: "dari",
                                    nodeType: "POS",
                                    attributes: ["verb"],
                                    link: "POS",
                                  },
                                  {
                                    word: "segi kemuliaan",
                                    nodeType: "NOUN",
                                    attributes: ["NOUN"],
                                    link: "NOUN",
                                    children: [
                                      {
                                        word: "segi",
                                        nodeType: "POS",
                                        attributes: ["verb"],
                                        link: "POS",
                                      },
                                      {
                                        word: "kemuliaan",
                                        nodeType: "POS",
                                        attributes: ["noun"],
                                        link: "POS",
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            word: "dan",
                            nodeType: "POS",
                            attributes: ["conj"],
                            link: "POS",
                          },
                        ],
                      },
                      {
                        word: "hak-hak",
                        nodeType: "POS",
                        attributes: ["noun"],
                        link: "POS",
                      },
                    ],
                  },
                ],
              },
            },
            sentence:
              "Semua manusia dilahirkan bebas dan samarata dari segi kemuliaan dan hak-hak",
          },
        ]);
      });
      /*
      Other routes
      */
      // Model Card
      this.get("/api/**/model-card", () => {
        return new Response(
          200,
          {},
          {
            name: "LIF3WayAP",
            languages: "English",
            description:
              "This is a neural network that applies attention mechanism and pooling to 3 sets of inputs: context, candidate question, previous questions and answers. It then classifies whether a candidate question is a follow-up question.",
            paper: {
              text: "Kundu, S., Lin, Q., and Ng. H. T (2020). Learning to Identify Follow-Up Questions in Conversational Question Answering. Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics, July 2020 (pp. 959-968).",
              url: "https://aclanthology.org/2020.acl-main.90/",
            },
            trainingDataset: {
              text: "Custom dataset derived from QuAC. Can be downloaded from the author's github repository.",
              url: "https://github.com/nusnlp/LIF",
            },
            evaluationDataset: {
              text: "Custom dataset derived from QuAC. Can be downloaded from the author's github repository.",
              url: "https://github.com/nusnlp/LIF",
            },
            evaluationScores: "0.81 F1 on development set.",
            trainingConfig: {
              text: "Not available.",
            },
            trainingTime: "~13 hours for 25 epochs on a single V100 GPU.",
            modelWeights: {
              text: "https://sgnlp.blob.core.windows.net/models/lif_3way_ap/pytorch_model.bin",
              url: "https://sgnlp.blob.core.windows.net/models/lif_3way_ap/pytorch_model.bin",
            },
            modelConfig: {
              text: "https://sgnlp.blob.core.windows.net/models/lif_3way_ap/config.json",
              url: "https://sgnlp.blob.core.windows.net/models/lif_3way_ap/config.json",
            },
            modelInput:
              "Context, historical questions and answers pairs, and candidate question.",
            modelOutput:
              "Probability score of whether candidate question is a valid follow-up question.",
            modelSize: "~130MB",
            inferenceInfo: "Not available.",
            usageScenarios: "Chatbots",
            originalCode: {
              text: "https://github.com/nusnlp/LIF",
              url: "https://github.com/nusnlp/LIF",
            },
            license: {
              text: "For non-commercial use: GNU GPLv3. For commercial use, please contact us.",
              url: "https://choosealicense.com/licenses/gpl-3.0",
            },
            contact: "Not available.",
            additionalInfo: "Not available.",
          }
        );
      });
      this.get("/api/**/model-usage", () => {
        return new Response(
          200,
          {},
          {
            usage:
              'from sgnlp.models.lsr import LsrModel, LsrConfig, LsrPreprocessor, LsrPostprocessor\nfrom transformers import cached_path\n\n# Download files from azure blob storage\nrel2id_path = cached_path(\'https://sgnlp.blob.core.windows.net/models/lsr/rel2id.json\')\nword2id_path = cached_path(\'https://sgnlp.blob.core.windows.net/models/lsr/word2id.json\')\nner2id_path = cached_path(\'https://sgnlp.blob.core.windows.net/models/lsr/ner2id.json\')\nrel_info_path = cached_path(\'https://sgnlp.blob.core.windows.net/models/lsr/rel_info.json\')\n\nPRED_THRESHOLD = 0.3\npreprocessor = LsrPreprocessor(rel2id_path=rel2id_path, word2id_path=word2id_path, ner2id_path=ner2id_path)\npostprocessor = LsrPostprocessor.from_file_paths(rel2id_path=rel2id_path, rel_info_path=rel_info_path,\n                                                 pred_threshold=PRED_THRESHOLD)\n\n# Load model\nconfig = LsrConfig.from_pretrained(\'https://sgnlp.blob.core.windows.net/models/lsr/config.json\')\nmodel = LsrModel.from_pretrained(\'https://sgnlp.blob.core.windows.net/models/lsr/pytorch_model.bin\', config=config)\nmodel.eval()\n\n# DocRED-like instance\ninstance = {\n    "vertexSet": [[{"name": "Lark Force", "pos": [0, 2], "sent_id": 0, "type": "ORG"},\n                   {"sent_id": 3, "type": "ORG", "pos": [2, 4], "name": "Lark Force"},\n                   {"name": "Lark Force", "pos": [3, 5], "sent_id": 4, "type": "ORG"}],\n                  [{"name": "Australian Army", "pos": [4, 6], "sent_id": 0, "type": "ORG"}],\n                  [{"pos": [9, 11], "type": "TIME", "sent_id": 0, "name": "March 1941"}],\n                  [{"name": "World War II", "pos": [12, 15], "sent_id": 0, "type": "MISC"}],\n                  [{"name": "New Britain", "pos": [18, 20], "sent_id": 0, "type": "LOC"}],\n                  [{"name": "New Ireland", "pos": [21, 23], "sent_id": 0, "type": "LOC"}],\n                  [{"name": "John Scanlan", "pos": [6, 8], "sent_id": 1, "type": "PER"}],\n                  [{"name": "Australia", "pos": [13, 14], "sent_id": 1, "type": "LOC"}],\n                  [{"name": "Rabaul", "pos": [17, 18], "sent_id": 1, "type": "LOC"},\n                   {"name": "Rabaul", "pos": [12, 13], "sent_id": 3, "type": "LOC"}],\n                  [{"name": "Kavieng", "pos": [19, 20], "sent_id": 1, "type": "LOC"},\n                   {"name": "Kavieng", "pos": [14, 15], "sent_id": 3, "type": "LOC"}],\n                  [{"pos": [22, 24], "type": "MISC", "sent_id": 1, "name": "SS Katoomba"}],\n                  [{"pos": [25, 27], "type": "MISC", "sent_id": 1, "name": "MV Neptuna"}],\n                  [{"name": "HMAT Zealandia", "pos": [28, 30], "sent_id": 1, "type": "MISC"}],\n                  [{"name": "Imperial Japanese Army", "pos": [8, 11], "sent_id": 3, "type": "ORG"}],\n                  [{"pos": [18, 20], "type": "TIME", "sent_id": 3, "name": "January 1942"}],\n                  [{"name": "Japan", "pos": [8, 9], "sent_id": 4, "type": "LOC"}],\n                  [{"pos": [12, 13], "type": "MISC", "sent_id": 4, "name": "NCOs"}],\n                  [{"name": "USS Sturgeon", "pos": [20, 22], "sent_id": 4, "type": "MISC"}],\n                  [{"sent_id": 4, "type": "MISC", "pos": [27, 29], "name": "Montevideo Maru"}],\n                  [{"name": "Japanese", "pos": [5, 6], "sent_id": 5, "type": "LOC"}],\n                  [{"pos": [15, 16], "type": "NUM", "sent_id": 5, "name": "1,050"}],\n                  [{"pos": [17, 18], "type": "NUM", "sent_id": 5, "name": "1,053"}]],\n    "labels": [\n        {"r": "P607", "h": 1, "t": 3, "evidence": [0]},\n        {"r": "P17", "h": 1, "t": 7, "evidence": [0, 1]},\n        {"r": "P241", "h": 6, "t": 1, "evidence": [0, 1]},\n        {"r": "P607", "h": 6, "t": 3, "evidence": [0, 1]},\n        {"r": "P27", "h": 6, "t": 7, "evidence": [0, 1]},\n        {"r": "P1344", "h": 7, "t": 3, "evidence": [0, 1]},\n        {"r": "P607", "h": 13, "t": 3, "evidence": [0, 3]},\n        {"r": "P17", "h": 13, "t": 15, "evidence": [3, 4, 5]},\n        {"r": "P17", "h": 13, "t": 19, "evidence": [3, 4, 5]},\n        {"r": "P1344", "h": 15, "t": 3, "evidence": [0, 3, 4, 5]},\n        {"r": "P172", "h": 15, "t": 19, "evidence": [4, 5]},\n        {"r": "P607", "h": 17, "t": 3, "evidence": [0, 4]},\n        {"r": "P17", "h": 11, "t": 7, "evidence": [1]},\n        {"r": "P17", "h": 12, "t": 7, "evidence": [0, 1]},\n        {"r": "P137", "h": 0, "t": 1, "evidence": [0, 1]},\n        {"r": "P571", "h": 0, "t": 2, "evidence": [0]},\n        {"r": "P607", "h": 0, "t": 3, "evidence": [0]},\n        {"r": "P17", "h": 0, "t": 7, "evidence": [0, 1]}],\n    "title": "Lark Force",\n    "sents": [\n        ["Lark", "Force", "was", "an", "Australian", "Army", "formation", "established", "in", "March", "1941",\n         "during", "World", "War", "II", "for", "service", "in", "New", "Britain", "and", "New", "Ireland", "."],\n        ["Under", "the", "command", "of", "Lieutenant", "Colonel", "John", "Scanlan", ",", "it", "was", "raised", "in",\n         "Australia", "and", "deployed", "to", "Rabaul", "and", "Kavieng", ",", "aboard", "SS", "Katoomba", ",", "MV",\n         "Neptuna", "and", "HMAT", "Zealandia", ",", "to", "defend", "their", "strategically", "important", "harbours",\n         "and", "airfields", "."],\n        ["The", "objective", "of", "the", "force", ",", "was", "to", "maintain", "a", "forward", "air", "observation",\n         "line", "as", "long", "as", "possible", "and", "to", "make", "the", "enemy", "fight", "for", "this", "line",\n         "rather", "than", "abandon", "it", "at", "the", "first", "threat", "as", "the", "force", "was", "considered",\n         "too", "small", "to", "withstand", "any", "invasion", "."],\n        ["Most", "of", "Lark", "Force", "was", "captured", "by", "the", "Imperial", "Japanese", "Army", "after",\n         "Rabaul", "and", "Kavieng", "were", "captured", "in", "January", "1942", "."],\n        ["The", "officers", "of", "Lark", "Force", "were", "transported", "to", "Japan", ",", "however", "the", "NCOs",\n         "and", "men", "were", "unfortunately", "torpedoed", "by", "the", "USS", "Sturgeon", "while", "being",\n         "transported", "aboard", "the", "Montevideo", "Maru", "."],\n        ["Only", "a", "handful", "of", "the", "Japanese", "crew", "were", "rescued", ",", "with", "none", "of", "the",\n         "between", "1,050", "and", "1,053", "prisoners", "aboard", "surviving", "as", "they", "were", "still",\n         "locked", "below", "deck", "."]\n    ]\n}\n\ntensor_doc = preprocessor([instance])\noutput = model(**tensor_doc)\n\nresult = postprocessor(output.prediction, [instance])\n',
          }
        );
      });
    },
  });
}
