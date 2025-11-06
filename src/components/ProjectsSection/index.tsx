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
import Reverb from "../../images/reverb.png";

interface Project {
  name: string;
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
    name: "Real-time Orders",
    background: Reverb,
    link: "https://reverb.molxno.dev/",
  },
  {
    name: "CRM",
    background: Crm,
    link: "https://crm.molxno.dev/",
  },
  {
    name: "Landing Page",
    background: Origen,
    link: "https://origen.molxno.dev/",
  },
  {
    name: "Cryptocurrency",
    background: Cripto,
    link: "https://crypto.molxno.dev/",
  },
  {
    name: "Veterinary",
    background: Veterinaria,
    link: "https://veterinary.molxno.dev/",
  },
  {
    name: "Landing Page",
    background: Boo,
    link: "https://boo.molxno.dev/",
  },
  {
    name: "Controls costs",
    background: Gastos,
    link: "https://costs.molxno.dev/",
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <>
      <ProjectsContainer id="projects">
        <ProjectsWrapper>
          <Heading>Projects</Heading>
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
            {projects.map((project, index) => {
              return (
                <article key={index}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={project.background} alt="project image" />
                  </a>
                  <h5>{project.name}</h5>
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
