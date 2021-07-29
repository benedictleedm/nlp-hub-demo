import * as React from "react";
import { Button, Layout } from "antd";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import aisgLogo from "../assets/aisg_horizontal_logo.png";
import { COLORS } from "../styles";

const { Header } = Layout;

export const HEADER_HEIGHT = 8;

const Logo = styled.img.attrs({
  src: aisgLogo,
})`
  max-height: 50%;
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
  line-height: 0px;
  justify-content: space-between;
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

const DemoHeader = () => {
  return (
    <StyledHeader>
      <HomeNavLink to="/">
        <Logo />
      </HomeNavLink>
      <HeaderButton ghost>
        <a href="/docs" target="_blank" rel="noopener noreferrer">
          Docs
        </a>
      </HeaderButton>
    </StyledHeader>
  );
};

export default DemoHeader;
