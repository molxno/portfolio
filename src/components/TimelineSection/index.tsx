import React from "react";
import { ReactComponent as WorkIcon } from "../../images/work.svg";
import { ReactComponent as PythonIcon } from "../../images/python.svg";
import { ReactComponent as JavascriptIcon } from "../../images/js.svg";
import { ReactComponent as PhpIcon } from "../../images/php.svg";
import "../../App.css";

import TimelineData from "./TimelineData";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import {
  Heading,
  Company,
  Position,
  TimelineContainer,
  Description,
  BtnWrap,
  Button,
  TimelineWrapper,
} from "./TimelineElements";
import {useI18n} from "../../i18n";

const iconTimeline = (type: string) => {
  switch (type) {
    case "python":
      return {
        icon: <PythonIcon />,
        background: "#2b5b84",
      };

    case "javascript":
      return {
        icon: <JavascriptIcon />,
        background: "#f7b733",
      };

    case "php":
      return {
        icon: <PhpIcon />,
        background: "#7a86b8",
      };

    default:
      return {
        icon: <WorkIcon />,
        background: "#000",
      };
  }
};

const TimelineSection: React.FC = () => {
  const {t} = useI18n();

  return (
    <TimelineContainer id={t.sections.experience}>
      <TimelineWrapper>
        <Heading>{t.timeline.heading}</Heading>
        <VerticalTimeline lineColor="#010606">
          {TimelineData.map((element) => {
            const copy = t.timeline.items[element.id];

            return (
              <VerticalTimelineElement
                key={element.id}
                date={copy.date}
                dateClassName="date"
                iconStyle={{ background: iconTimeline(element.icon).background }}
                icon={iconTimeline(element.icon).icon}
              >
                <Company className="vertical-timeline-element-title">
                  {copy.title}
                </Company>
                <Position className="vertical-timeline-element-subtitle">
                  {copy.position}
                </Position>
                <Description>{copy.description}</Description>
                <BtnWrap>
                  <Button
                    href={element.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    primary={false}
                    dark={true}
                  >
                    {t.timeline.linkedIn}
                  </Button>
                </BtnWrap>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </TimelineWrapper>
    </TimelineContainer>
  );
};

export default TimelineSection;
