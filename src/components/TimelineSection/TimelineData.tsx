import {Dictionary} from "../../i18n/en";

export type TimelineItemId = keyof Dictionary["timeline"]["items"];

interface TimelineItem {
  id: TimelineItemId;
  icon: string;
  link: string;
}

const TimelineData: TimelineItem[] = [
  {
    id: "btg",
    icon: "python",
    link: "https://www.linkedin.com/company/btg-pactual-col/",
  },
  {
    id: "sportta",
    icon: "javascript",
    link: "https://www.linkedin.com/company/grupo-sportta/",
  },
  {
    id: "alternovaPhp",
    icon: "php",
    link: "https://www.linkedin.com/company/alternova-inc/mycompany/",
  },
  {
    id: "alternovaPython",
    icon: "python",
    link: "https://www.linkedin.com/company/alternova-inc/mycompany/",
  },
];

export default TimelineData;
