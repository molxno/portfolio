import React, {FC} from "react";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";
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
import {useI18n} from "../../i18n";

const Footer: FC = () => {
  const {t} = useI18n();

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <SocialIcons>
                <SocialIconLink
                  href="https://x.com/molxno"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t.footer.x}
                >
                  <FaXTwitter/>
                </SocialIconLink>
                <SocialIconLink
                  href="https://www.linkedin.com/in/molanosantiago/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t.footer.linkedIn}
                >
                  <FaLinkedin/>
                </SocialIconLink>
                <SocialIconLink
                  href="https://github.com/molxno"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t.footer.gitHub}
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
              {t.footer.rights}
              <br/>
              {t.footer.madeWith}
            </WebsiteRights>
          </FooterTextWrap>
        </FooterText>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;