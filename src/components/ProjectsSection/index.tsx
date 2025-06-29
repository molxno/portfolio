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
  hover: string;
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
    hover:
      "https://files.svgcdn.io/devicon/livewire.svg",
    link: "https://reverb.molxno.dev/",
  },
  {
    name: "CRM",
    background: Crm,
    hover:
      "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
    link: "https://crm.molxno.dev/",
  },
  {
    name: "Landing Page",
    background: Origen,
    hover:
      "https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png",
    link: "https://origen.molxno.dev/",
  },
  {
    name: "Cryptocurrency",
    background: Cripto,
    hover:
      "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
    link: "https://cripto-valor.netlify.app/",
  },
  {
    name: "Veterinary",
    background: Veterinaria,
    hover: "https://vitejs.dev/logo-with-shadow.png",
    link: "https://agendador-veterinaria.netlify.app/",
  },
  {
    name: "Landing Page",
    background: Boo,
    hover: "https://astro.build/assets/press/astro-icon-light-gradient.png",
    link: "https://boo.molxno.dev/",
  },
  {
    name: "Controls costs",
    background: Gastos,
    hover:
      "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
    link: "https://administra-gastos.netlify.app/",
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
          >
            {projects.map((project, index) => {
              return (
                <article key={index}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={project.background} alt="first img" />
                    <img src={project.hover} alt="second img" />
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
