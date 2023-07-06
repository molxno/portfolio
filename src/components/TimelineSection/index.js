import { ReactComponent as WorkIcon } from "../../images/work.svg";
import { ReactComponent as BtgIcon } from "../../images/btg.svg";
import { ReactComponent as SporttaIcon } from "../../images/sportta.svg";
import { ReactComponent as AlternovaIcon } from "../../images/alternova.svg";
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

function TimelineSection() {
  const iconTimeline = (type) => {
    switch (type) {
      case "btg":
        return <BtgIcon />;

      case "sportta":
        return <SporttaIcon />;

      case "alternova":
        return <AlternovaIcon />;

      default:
        return <WorkIcon />;
    }
  };

  return (
    <>
      <TimelineContainer id="experience">
        <TimelineWrapper>
          <Heading>Timeline</Heading>
          <VerticalTimeline lineColor="#df2935">
            {TimelineData.map((element) => {
              return (
                <VerticalTimelineElement
                  key={element.key}
                  date={element.date}
                  dateClassName="date"
                  iconStyle={{ background: "#d9dcd9" }}
                  icon={iconTimeline(element.icon)}
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
                      More about it
                    </Button>
                  </BtnWrap>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </TimelineWrapper>
      </TimelineContainer>
    </>
  );
}

export default TimelineSection;
