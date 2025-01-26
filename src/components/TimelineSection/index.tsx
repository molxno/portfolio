import React from "react";
import {ReactComponent as WorkIcon} from "../../images/work.svg";
import {ReactComponent as BtgIcon} from "../../images/python.svg";
import {ReactComponent as SporttaIcon} from "../../images/js.svg";
import {ReactComponent as AlternovaIcon} from "../../images/php.svg";
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
        case "btg":
            return {
                icon: <BtgIcon/>,
                background: "#2b5b84",
            };

        case "sportta":
            return {
                icon: <SporttaIcon/>,
                background: "#f7b733",
            };

        case "alternova":
            return {
                icon: <AlternovaIcon/>,
                background: "#7a86b8",
            };

        default:
            return {
                icon: <WorkIcon/>,
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
                            iconStyle={{background: iconTimeline(element.icon).background}}
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