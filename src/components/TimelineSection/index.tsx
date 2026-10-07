import React, {useEffect, useRef, useState} from "react";
import {FaLinkedin} from "react-icons/fa";
import {companies, Company, techChips} from "../../data/companies";
import {useI18n} from "../../i18n";
import {
  AchievementItem,
  AchievementList,
  CardDate,
  CardHeader,
  Chip,
  ChipIcon,
  ChipRow,
  CompanyCard,
  CompanyName,
  CurrentBadge,
  CurrentDot,
  Heading,
  LinkedInLink,
  OppositeDate,
  RoleLine,
  RoleList,
  RoleMeta,
  TimelineContainer,
  TimelineItem,
  TimelineList,
  TimelineNode,
} from "./TimelineElements";

const usePrefersReducedMotion = () => {
  const [reduced, setReduced] = useState(() =>
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(media.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return reduced;
};

const TimelineEntry: React.FC<{
  company: Company;
  index: number;
  reducedMotion: boolean;
}> = ({company, index, reducedMotion}) => {
  const {t} = useI18n();
  const ref = useRef<HTMLLIElement>(null);
  const [visible, setVisible] = useState(reducedMotion);
  const copy = t.timeline.items[company.id];
  const side = index % 2 === 0 ? "left" : "right";

  useEffect(() => {
    if (reducedMotion) {
      setVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {threshold: 0.18, rootMargin: "0px 0px -8% 0px"},
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [reducedMotion]);

  return (
    <TimelineItem
      ref={ref}
      $side={side}
      $visible={visible}
      style={{"--stagger": `${index * 80}ms`} as React.CSSProperties}
    >
      {side === "right" ? <OppositeDate $side={side}>{copy.period}</OppositeDate> : null}
      <TimelineNode $current={Boolean(company.current)} aria-hidden="true" />
      <CompanyCard $side={side}>
        <CardDate>{copy.period}</CardDate>
        <CardHeader>
          <CompanyName>{copy.title}</CompanyName>
          {company.current ? (
            <CurrentBadge>
              <CurrentDot aria-hidden="true" />
              {t.timeline.current}
            </CurrentBadge>
          ) : null}
        </CardHeader>
        <RoleList>
          {copy.roles.map((role) => (
            <RoleLine key={`${company.id}-${role.position}`}>
              {role.position}
              {copy.roles.length > 1 ? <RoleMeta>{`, ${role.date}`}</RoleMeta> : null}
            </RoleLine>
          ))}
        </RoleList>
        <AchievementList>
          {copy.achievements.map((achievement) => (
            <AchievementItem key={achievement}>{achievement}</AchievementItem>
          ))}
        </AchievementList>
        <ChipRow>
          {company.chips.map((chipId) => {
            const chip = techChips[chipId];
            return (
              <Chip key={chipId}>
                {chip.icon ? <ChipIcon src={chip.icon} alt="" /> : null}
                {chip.label}
              </Chip>
            );
          })}
        </ChipRow>
        <LinkedInLink
          href={company.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${copy.title}, ${t.timeline.linkedIn}`}
        >
          <FaLinkedin aria-hidden="true" />
          {t.timeline.linkedIn}
        </LinkedInLink>
      </CompanyCard>
      {side === "left" ? <OppositeDate $side={side}>{copy.period}</OppositeDate> : null}
    </TimelineItem>
  );
};

const TimelineSection: React.FC = () => {
  const {t} = useI18n();
  const reducedMotion = usePrefersReducedMotion();

  return (
    <TimelineContainer id={t.sections.experience} aria-label={t.timeline.region}>
      <Heading>{t.timeline.heading}</Heading>
      <TimelineList>
        {companies.map((company, index) => (
          <TimelineEntry
            key={company.id}
            company={company}
            index={index}
            reducedMotion={reducedMotion}
          />
        ))}
      </TimelineList>
    </TimelineContainer>
  );
};

export default TimelineSection;
