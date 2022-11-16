import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="sobrenosotros" onClick={toggle}>
            Sobre nosotros
          </SidebarLink>
          <SidebarLink to="colaboraciones" onClick={toggle}>
            Colaboraciones
          </SidebarLink>
          <SidebarLink to="servicios" onClick={toggle}>
            Servicios
          </SidebarLink>
          <SidebarLink to="contacto" onClick={toggle}>
            Contacto
          </SidebarLink>
        </SidebarMenu>
        <SidebarBtnWrap>
          <SidebarRoute to="/cotizar">Cotizar</SidebarRoute>
        </SidebarBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
