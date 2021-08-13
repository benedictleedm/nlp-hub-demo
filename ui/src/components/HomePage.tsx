import * as React from "react";
import styled from "styled-components";
import Title from "antd/lib/typography/Title";
import Paragraph from "antd/lib/typography/Paragraph";

import { CONTENT_TYPE } from "../constants";
import { COLORS, PAGE_WIDTH } from "../styles";
import sgnlpImage from "../assets/sgnlp.svg";

const MainPage = styled.div`
  padding: 50px;
  background-color: ${COLORS.BACKGROUND};
  width: ${PAGE_WIDTH};
  text-align: initial;
`;

const SgnlpImage = styled.img.attrs({
  src: sgnlpImage,
})`
  max-width: 100%;
  max-height: 500px;
  padding-bottom: 24px;
`;

const sgnlpHomePage = () => {
  return (
    <MainPage>
      <Title>Welcome to the SG-NLP Demo page.</Title>
      <SgnlpImage />
      <Paragraph>
        SG-NLP is an initiative by AI Singapore's NLP Hub. We aim to bridge the
        gap between research and industry, promote translational research, and
        encourage adoption of NLP techniques in the industry.
      </Paragraph>
      <Paragraph>
        This website hosts various models developed by Singapore's NLP research
        community. You can navigate the menu on the left to find the different
        models available.
      </Paragraph>
      <Paragraph>
        These models are also available in our sgnlp Python package. Please use{" "}
        <code>pip install sgnlp</code> to install the package. Documentation for
        the package can be accessed from the <code>Docs</code> link in the top
        right hand corner of this page.
      </Paragraph>
      <br></br>
      <Title level={4}>Licenses</Title>
      <Paragraph>
        Please note that the use of each model in the <code>sgnlp</code> package
        is governed by different licenses. The license information is available
        in the Model Card section of each model. Please contact us for any
        clarifications.
      </Paragraph>
      <br></br>
      <Title level={4}>For Enquiries / Collaborations</Title>
      <Paragraph>
        For all enquiries or potential collaborations, please email us at
        sg-nlp@aisingapore.org. For more information on AI Singapore and our
        initiatives, please visit{" "}
        <a href="https://aisingapore.org/" target="_blank" rel="noopener">
          our website
        </a>
        .
      </Paragraph>
    </MainPage>
  );
};

const seacorenlpHomePage = () => {
  return (
    <MainPage>
      <Title>Welcome to the SEACoreNLP Demo!</Title>
      <Paragraph>
        SEACoreNLP is an initiative by AI Singapore's NLP Hub that aims to provide a
        one-stop solution for Natural Language Processing (NLP) in Southeast Asia (SEA).
        We hope to lead the way in spearheading projects and gathering like-minded entities
        across the region to build a livelier NLP ecosystem for SEA.
      </Paragraph>
      <Paragraph>
        As the name suggests, SEACoreNLP focuses on "core" NLP tasks, such as part-of-speech
        tagging, syntactic parsing or semantic role labeling, as opposed to higher-level tasks
        such as machine translation or question answering.
      </Paragraph>
      <Paragraph>
        This demo hosts various models for core NLP tasks in the official languages of ASEAN.
        As this is still a work in progress, not all tasks or languages are supported yet.
        You may check out the available models through the navigation panel on the left.
      </Paragraph>
      <Paragraph>
        These models are also (mostly) available in our <code>seacorenlp</code> package.
        Please run <code>pip install seacorenlp</code> to install the package. Documentation
        for the package can be accessed via the <code>Docs</code> link in the top right
        hand corner of this page.
      </Paragraph>
      <Title level={4}>Licenses</Title>
      <Paragraph>
        Please note that the SEACoreNLP package is published under the GPL v3 license.
        Please contact us for any clarifications regarding the use of the models.
      </Paragraph>
      <Title level={4}>For Enquiries / Collaborations</Title>
      <Paragraph>
        For all enquiries or potential collaborations, please email us at weiqi@aisingapore.org.
        For more information on AI Singapore and our initiatives, please visit
        <a href="https://aisingapore.org/" target="_blank" rel="noopener">
          our website
        </a>
      </Paragraph>
    </MainPage>
  );
};

export const HomePage = {
  SGNLP: sgnlpHomePage,
  SEACORENLP: seacorenlpHomePage,
}[CONTENT_TYPE];
