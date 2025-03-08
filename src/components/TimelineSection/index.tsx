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

interface TimelineElement {
  date: string;
  icon: string;
  title: string;
  position: string;
  description: string;
  link: string;
}

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
  return (
    <TimelineContainer id="experience">
      <TimelineWrapper>
        <Heading>Timeline</Heading>
        <VerticalTimeline lineColor="#010606">
          {TimelineData.map((element: TimelineElement, index: number) => (
            <VerticalTimelineElement
              key={index}
              date={element.date}
              dateClassName="date"
              iconStyle={{ background: iconTimeline(element.icon).background }}
              icon={iconTimeline(element.icon).icon}
            >
              <Company className="vertical-timeline-element-title">
                {element.title}
              </Company>
              <Position className="vertical-timeline-element-subtitle">
                {element.position}
              </Position>
              <Description>{element.description}</Description>
              <BtnWrap>
                <Button
                  href={element.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  primary={false}
                  dark={true}
                >
                  LinkedIn
                </Button>
              </BtnWrap>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </TimelineWrapper>
    </TimelineContainer>
  );
};

export default TimelineSection;
