import * as React from "react";
import { Button, Drawer } from "antd";
import DemoMenu from "./DemoMenu";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import styled from "styled-components";

const StyledDiv = styled.div`
  @media (min-width: 992px) {
    display: none;
  }
`;

const DrawerMenu = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <StyledDiv>
      <Button shape={"circle"}>
        <MenuUnfoldOutlined onClick={() => setVisible(true)} />
      </Button>
      <Drawer
        title="Demos"
        placement="left"
        onClose={() => setVisible(false)}
        width={300}
        visible={visible}
      >
        <DemoMenu />
      </Drawer>
    </StyledDiv>
  );
};

export default DrawerMenu;
