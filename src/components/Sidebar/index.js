import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink exact='true' to="aboutme" onClick={toggle}>
            Who is Molxno?
          </SidebarLink>
          <SidebarLink exact='true' to="experience" onClick={toggle}>
            Experience
          </SidebarLink>
          <SidebarLink exact='true' to="projects" onClick={toggle}>
            Projects
          </SidebarLink>
          <SidebarLink exact='true' to="skills" onClick={toggle}>
            Skills
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
