import * as React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { Layout } from "antd";
import "antd/dist/antd.less";
import styled from "styled-components";

import DemoHeader, { HEADER_HEIGHT } from "./components/DemoHeader";
import SideMenu from "./components/SideMenu";
import { demos } from "./demos/demos";
import { COLORS } from "./styles";
import { HomePage } from "./components/HomePage";
import { Footer } from "antd/lib/layout/layout";

export const App = () => (
  <React.Fragment>
    <BrowserRouter>
      <DemoLayout />
    </BrowserRouter>
  </React.Fragment>
);

const { Content } = Layout;

const StyledContent = styled(Content)`
  margin-left: 300px;
  margin-top: ${HEADER_HEIGHT}vh;
  height: ${100 - HEADER_HEIGHT}vh;
  background-color: ${COLORS.BACKGROUND};
`;

const StyledFooter = styled(Footer)`
  background-color: ${COLORS.BACKGROUND};
`;

const DemoLayout = () => {
  return (
    <Layout>
      <DemoHeader />
      <SideMenu />
      <StyledContent>
        <Route exact path="/">
          <HomePage />
        </Route>
        {demos.map((demo) => (
          <Route path={"/" + demo.config.taskId} key={demo.config.taskId}>
            <demo.component />
          </Route>
        ))}
        <StyledFooter>
          <div>
            © Copyright 2021, AI Singapore. All Rights Reserved. |{" "}
            <a href="https://aisingapore.org/privacy/" target="_blank">
              Privacy Policy
            </a>{" "}
            |
          </div>
        </StyledFooter>
      </StyledContent>
    </Layout>
  );
};
