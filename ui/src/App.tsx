import * as React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { Layout } from "antd";
import "antd/dist/antd.less";
import styled from "styled-components";
import { Footer } from "antd/lib/layout/layout";

import DemoHeader from "./components/DemoHeader";
import SideMenu from "./components/SideMenu";
import { demos } from "./demos/demos";
import { COLORS } from "./styles";
import { HomePage } from "./components/HomePage";
import DrawerMenu from "./components/DrawerMenu";
import MobileMessage from "./components/MobileMessage";

export const App = () => (
  <React.Fragment>
    <BrowserRouter>
      <DemoLayout />
    </BrowserRouter>
  </React.Fragment>
);

const { Content } = Layout;

const StyledContent = styled(Content)`
  background-color: ${COLORS.BACKGROUND};
  text-align: center;
`;

const StyledFooter = styled(Footer)`
  background-color: ${COLORS.BACKGROUND};
`;

const ContentDiv = styled.div`
  display: inline-block;
`;

const BodyLayout = styled(Layout)`
  flex-direction: row;
`;

const FloatingDiv = styled.div`
  float: left;
  margin-left: 16px;
  margin-top: 16px;
  position: absolute;
  font-size: 24px;
`;

const DemoLayout = () => {
  return (
    <Layout>
      <DemoHeader />
      <BodyLayout>
        <SideMenu />
        <StyledContent>
          <FloatingDiv>
            <DrawerMenu />
          </FloatingDiv>
          <ContentDiv>
            <Route exact path="/">
              <HomePage />
            </Route>
            {demos.map((demo) => (
              <Route path={"/" + demo.config.taskId} key={demo.config.taskId}>
                <demo.component />
              </Route>
            ))}
          </ContentDiv>
          <StyledFooter>
            <div>
              © Copyright 2021, AI Singapore. All Rights Reserved. |{" "}
              <a
                href="https://aisingapore.org/privacy/"
                target="_blank"
                rel="noopener"
              >
                Privacy Policy
              </a>{" "}
              |
            </div>
          </StyledFooter>
        </StyledContent>
      </BodyLayout>
      <MobileMessage />
    </Layout>
  );
};
