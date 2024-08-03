import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
} from './SidebarElements';

interface SidebarProps {
    isOpen: boolean;
    toggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="aboutme" onClick={toggle} href="#">
                        Who is Molxno?
                    </SidebarLink>
                    <SidebarLink to="experience" onClick={toggle} href="#">
                        Experience
                    </SidebarLink>
                    <SidebarLink to="projects" onClick={toggle} href="#">
                        Projects
                    </SidebarLink>
                    <SidebarLink to="skills" onClick={toggle} href="#">
                        Skills
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;