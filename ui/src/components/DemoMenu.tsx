import * as React from "react";
import { Menu } from "antd";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { COLORS } from "../styles";
import { demoGroups } from "../demos/demos";

const { Item, SubMenu } = Menu;

const StyledMenu = styled(Menu)`
  .ant-menu-item a {
    color: #aaaaaa;
  }

  .ant-menu-item:hover,
  .ant-menu-item-active,
  .ant-menu-item-selected a,
  .ant-menu-item-selected a:hover,
  .ant-menu-item a:hover,
  .ant-menu-submenu:hover,
  .ant-menu-submenu-active,
  .ant-menu-submenu-selected,
  .ant-menu-submenu-title:hover {
    color: ${COLORS.BR.PRIMARY};
  }

  .ant-menu-item::after {
    border-color: ${COLORS.BR.PRIMARY};
  }

  .ant-menu-submenu-arrow::before,
  .ant-menu-submenu-arrow::after {
    background: black;
  }

  .ant-menu-submenu-title:active {
    background: ${COLORS.BR.LIGHT};
  }
`;

const DemoMenu = () => (
  <StyledMenu mode="inline">
    {demoGroups.map((group) => (
      <SubMenu key={group.label} icon={<group.icon />} title={group.label}>
        {group.demos.map((task) => (
          <Item
            style={{ backgroundColor: "white", margin: "0px" }}
            key={task.config.taskId}
          >
            <NavLink to={"/" + task.config.taskId}>{task.config.title}</NavLink>
          </Item>
        ))}
      </SubMenu>
    ))}
  </StyledMenu>
);

export default DemoMenu;
