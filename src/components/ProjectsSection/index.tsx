import React from "react";
import {
  ProjectsContainer,
  Heading,
  ProjectsWrapper,
} from "./ProjectsElements";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Boo from "../../images/boo.png";
import Cripto from "../../images/cripto.png";
import Origen from "../../images/origen.png";
import Gastos from "../../images/gastos.png";
import Veterinaria from "../../images/veterinaria.png";
import Crm from "../../images/crm-react.png";
import {Dictionary, useI18n} from "../../i18n";

type ProjectId = keyof Dictionary["projects"]["items"];

interface Project {
  id: ProjectId;
  background: string;
  link: string;
}

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const projects: Project[] = [
  {
    id: "crm",
    background: Crm,
    link: "https://crm.molxno.dev/",
  },
  {
    id: "origen",
    background: Origen,
    link: "https://origen.molxno.dev/",
  },
  {
    id: "crypto",
    background: Cripto,
    link: "https://crypto.molxno.dev/",
  },
  {
    id: "veterinary",
    background: Veterinaria,
    link: "https://veterinary.molxno.dev/",
  },
  {
    id: "boo",
    background: Boo,
    link: "https://boo.molxno.dev/",
  },
  {
    id: "costs",
    background: Gastos,
    link: "https://costs.molxno.dev/",
  },
];

const ProjectsSection: React.FC = () => {
  const {t} = useI18n();

  return (
    <>
      <ProjectsContainer id={t.sections.projects}>
        <ProjectsWrapper>
          <Heading>{t.projects.heading}</Heading>
          <Carousel
            responsive={responsive}
            autoPlay={true}
            swipeable={true}
            draggable={true}
            showDots={true}
            infinite={true}
            partialVisible={false}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            arrows={false}
            renderButtonGroupOutside={true}
            dotListClass="custom-dot-list-style"
            autoPlaySpeed={2000}
          >
            {projects.map((project) => {
              const copy = t.projects.items[project.id];

              return (
                <article key={project.id}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={project.background} alt={copy.alt} />
                  </a>
                  <h5>{copy.name}</h5>
                </article>
              );
            })}
          </Carousel>
        </ProjectsWrapper>
      </ProjectsContainer>
    </>
  );
};

export default ProjectsSection;
