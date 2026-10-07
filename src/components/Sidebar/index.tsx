import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SidebarLanguage,
} from './SidebarElements';
import {useI18n} from '../../i18n';
import LanguageToggle from '../LanguageToggle';

interface SidebarProps {
    isOpen: boolean;
    toggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({isOpen, toggle}) => {
    const {t} = useI18n();

    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon type="button" onClick={toggle} aria-label={t.nav.closeMenu}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to={t.sections.about} onClick={toggle} href={`#${t.sections.about}`} spy={true} hashSpy={true} smooth={true} offset={-60}>
                        {t.nav.about}
                    </SidebarLink>
                    <SidebarLink to={t.sections.experience} onClick={toggle} href={`#${t.sections.experience}`} spy={true} hashSpy={true} smooth={true} offset={-60}>
                        {t.nav.experience}
                    </SidebarLink>
                    <SidebarLink to={t.sections.projects} onClick={toggle} href={`#${t.sections.projects}`} spy={true} hashSpy={true} smooth={true} offset={-60}>
                        {t.nav.projects}
                    </SidebarLink>
                    <SidebarLink to={t.sections.skills} onClick={toggle} href={`#${t.sections.skills}`} spy={true} hashSpy={true} smooth={true} offset={-60}>
                        {t.nav.skills}
                    </SidebarLink>
                </SidebarMenu>
                <SidebarLanguage onClick={(event) => event.stopPropagation()}>
                    <LanguageToggle/>
                </SidebarLanguage>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;