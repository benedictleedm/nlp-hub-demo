import * as React from "react";
import Sider from "antd/lib/layout/Sider";

import styled from "styled-components";
import DemoMenu from "./DemoMenu";

const SIDE_MENU_WIDTH = 300;

const DemoSider = styled(Sider)`
  height: 100%;
  background-color: white;
`;

const SideMenu = () => {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <DemoSider
      width={SIDE_MENU_WIDTH}
      trigger={null}
      breakpoint="lg"
      collapsible
      collapsed={collapsed}
      onCollapse={() => setCollapsed(!collapsed)}
      collapsedWidth={0}
    >
      <DemoMenu />
    </DemoSider>
  );
};

export default SideMenu;
