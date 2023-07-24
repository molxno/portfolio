import React from "react";
import {
  ProjectsContainer,
  Heading,
  ProjectsWrapper,
} from "./ProjectsElements";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
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

const projects = [
  {
    name: "Landing Page",
    background:
      "https://i.ibb.co/WxxSq0q/Screenshot-from-2023-07-09-17-31-12.png",
    hover:
      "https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png",
    link: "https://molanosantiago.github.io/origen/",
  },
  {
    name: "Cryptocurrency",
    background:
      "https://i.ibb.co/S0jnx2q/Screenshot-from-2023-07-09-17-32-58.png",
    hover:
      "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
    link: "https://criptoomonedas-react.netlify.app/",
  },
  {
    name: "To Do Website",
    background:
      "https://i.ibb.co/xmk7MyC/Screenshot-from-2023-07-09-17-34-11.png",
    hover:
      "https://www.freepnglogos.com/uploads/php-logo-png/php-logo-parental-advisory-explicit-content-logo-png-transparent-3.png",
    link: "http://chrono.rf.gd/",
  },
  {
    name: "Controls costs",
    background:
      "https://i.ibb.co/ts5xdh8/Screenshot-from-2023-07-09-17-35-44.png",
    hover:
      "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
    link: "https://administra-gastos.netlify.app/",
  },
  {
    name: "Veterinary",
    background:
      "https://i.ibb.co/r2zHh2m/Screenshot-from-2023-07-09-17-36-38.png",
    hover:
      "https://vitejs.dev/logo-with-shadow.png",
    link: "https://veterinaria-admin-react.netlify.app/",
  },
];

const ProjectsSection = () => {
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
