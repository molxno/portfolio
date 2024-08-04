import React, {FC} from "react";
import {FaTwitter, FaGithub, FaLinkedin} from "react-icons/fa";
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterText,
    FooterTextWrap,
    WebsiteRights,
    SocialIconLink,
    SocialIcons,
} from "./FooterElements";

const Footer: FC = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <SocialIcons>
                                <SocialIconLink
                                    href="https://twitter.com/molxno"
                                    target="_blank"
                                    aria-label="Twitter"
                                >
                                    <FaTwitter/>
                                </SocialIconLink>
                                <SocialIconLink
                                    href="https://www.linkedin.com/in/molanosantiago/"
                                    target="_blank"
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedin/>
                                </SocialIconLink>
                                <SocialIconLink
                                    href="https://github.com/molxno"
                                    target="_blank"
                                    aria-label="GitHub"
                                >
                                    <FaGithub/>
                                </SocialIconLink>
                            </SocialIcons>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <FooterText>
                    <FooterTextWrap>
                        <WebsiteRights>
                            © molxno.dev, Property of a Backend Magician.
                            <br/>
                            Made with ❤️
                        </WebsiteRights>
                    </FooterTextWrap>
                </FooterText>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;