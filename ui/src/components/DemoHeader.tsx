import * as React from "react";
import { Button, Dropdown, Layout, Menu } from "antd";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import aisgLogo from "../assets/aisg_horizontal_logo.png";
import { COLORS } from "../styles";
import { CONTENT_TYPE } from "../constants";

const { Header } = Layout;

const HEADER_HEIGHT = 6.5;
const BANNER_HEIGHT = 2.5;
export const COMBINED_HEIGHT = HEADER_HEIGHT + BANNER_HEIGHT;

const Logo = styled.img.attrs({
  src: aisgLogo,
})`
  max-height: 70%;
`;

const StyledHeader = styled(Header)`
  height: ${HEADER_HEIGHT}vh;
  background-color: ${COLORS.BLACK};
  display: flex;
  align-items: center;
  width: 100%;
  position: fixed;
  z-index: 1;
  padding-left: 24px;
  padding-right: 24px;
  line-height: 0px;
  justify-content: space-between;
`;

const MiniBanner = styled(Header)`
  height: ${BANNER_HEIGHT}vh;
  background-color: ${COLORS.PRIMARY};
  display: flex;
  align-items: center;
  width: 100%;
  position: fixed;
  z-index: 1;
  padding-left: 24px;
  line-height: 0px;
  justify-content: space-between;
  margin-top: ${HEADER_HEIGHT}vh;
  font-size: 11px;
  color: #eeeeee;
`;

const HomeNavLink = styled(NavLink)`
  &:hover {
    opacity: 0.7;
  }
  height: 100%;
  display: flex;
  align-items: center;
`;

const HeaderButton = styled(Button)`
  background: transparent;
  color: #eeeeee;
  border: none;
  font-weight: bold;
  font-size: 16px;
`;

const SgnlpBanner = () => <MiniBanner>SG-NLP by AI Singapore</MiniBanner>;
const SeacorenlpBanner = () => (
  <MiniBanner>SEACoreNLP by AI Singapore</MiniBanner>
);

const Banner = {
  SGNLP: SgnlpBanner,
  SEACORENLP: SeacorenlpBanner,
}[CONTENT_TYPE];

const dropdownMenu = (
  <Menu>
    <Menu.Item key="0">
      <a href="https://aisingapore.org/nlp-hub/" target="_blank" rel="noopener">
        NLP Hub Page
      </a>
    </Menu.Item>
    <Menu.Item key="1">
      <a
        href="https://community.aisingapore.org/groups/natural-language-processing/forum/"
        target="_blank"
        rel="noopener"
      >
        Discussion Forum
      </a>
    </Menu.Item>
  </Menu>
);

const DemoHeader = () => {
  return (
    <>
      <StyledHeader>
        <HomeNavLink to="/">
          <Logo />
        </HomeNavLink>
        <div>
          <HeaderButton ghost>
            <a href="/docs" target="_blank" rel="noopener">
              Docs
            </a>
          </HeaderButton>
          <Dropdown overlay={dropdownMenu} trigger={["click"]}>
            <HeaderButton ghost>Community</HeaderButton>
          </Dropdown>
        </div>
      </StyledHeader>
      <Banner />
    </>
  );
};

export default DemoHeader;
