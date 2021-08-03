import * as React from "react";
import { Menu } from "antd";
import Sider from "antd/lib/layout/Sider";
import { NavLink } from "react-router-dom";

import { demoGroups } from "../demos/demos";
import { COMBINED_HEIGHT } from "./DemoHeader";
import styled from "styled-components";

const { Item, SubMenu } = Menu;

const SIDE_MENU_WIDTH = 300;

const DemoSider = styled(Sider)`
  overflow: auto;
  height: ${100 - COMBINED_HEIGHT}vh;
  position: fixed;
  left: 0;
  margin-top: ${COMBINED_HEIGHT}vh;
  background-color: white;
`;

const SideMenu = () => {
  return (
    <DemoSider width={SIDE_MENU_WIDTH}>
      <Menu
        mode="inline"
        selectable={false}
      >
        {demoGroups.map((group) => (
          <SubMenu key={group.label} icon={<group.icon />} title={group.label}>
            {group.demos.map((task) => (
              <Item
                style={{ backgroundColor: "white", margin: "0px" }}
                key={task.config.taskId}
              >
                <NavLink style={{color: "#aaaaaa"}} to={"/" + task.config.taskId}>
                  {task.config.title}
                </NavLink>
              </Item>
            ))}
          </SubMenu>
        ))}
      </Menu>
    </DemoSider>
  );
};

export default SideMenu;
