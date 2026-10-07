import React, {useEffect, useRef, useState} from "react";
import {MARQUEE_SPEED_PX, Project, projects, resolveProjectHref} from "../../data/projects";
import {useI18n} from "../../i18n";
import {
  Card,
  CardBody,
  CardSlot,
  Description,
  Heading,
  Links,
  Media,
  Origin,
  PauseButton,
  ProjectName,
  ProjectsContainer,
  ProjectsWrapper,
  Set,
  TextLink,
  Toolbar,
  Track,
  Viewport,
} from "./ProjectsElements";

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

const ProjectCover: React.FC<{project: Project; inert?: boolean}> = ({project, inert}) => {
  const {t} = useI18n();
  const copy = t.projects.items[project.id];
  const {image} = project;
  const imageEl = (
    <img
      data-cover-shot
      src={image.png}
      alt={inert ? "" : copy.alt}
      width={image.width}
      height={image.height}
      loading="lazy"
    />
  );

  if (!image.webp) {
    return imageEl;
  }

  return (
    <picture>
      <source type="image/webp" srcSet={image.webp} />
      {imageEl}
    </picture>
  );
};

const ProjectCard: React.FC<{
  project: Project;
  inert?: boolean;
}> = ({project, inert}) => {
  const {t, language} = useI18n();
  const copy = t.projects.items[project.id];
  const tabIndex = inert ? -1 : undefined;
  const href = resolveProjectHref(project, language);

  return (
    <CardSlot aria-hidden={inert || undefined}>
      <Card data-project-card={project.id}>
        <Media data-project-cover>
          <ProjectCover project={project} inert={inert} />
        </Media>
        <CardBody>
          <Origin>{t.projects.origin[project.origin]}</Origin>
          <ProjectName>{copy.name}</ProjectName>
          <Description>{copy.description}</Description>
          <Links>
            <TextLink
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={tabIndex}
            >
              {t.projects.visitSite}
            </TextLink>
            {project.repoHref ? (
              <TextLink
                href={project.repoHref}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={tabIndex}
              >
                {t.projects.viewRepo}
              </TextLink>
            ) : null}
          </Links>
        </CardBody>
      </Card>
    </CardSlot>
  );
};

const ProjectsSection: React.FC = () => {
  const {t} = useI18n();
  const reducedMotion = usePrefersReducedMotion();
  const [playing, setPlaying] = useState(true);
  const [duration, setDuration] = useState(40);
  const setRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = setRef.current;
    if (!element || reducedMotion) {
      return;
    }

    const measure = () => {
      const width = element.scrollWidth;
      if (width > 0) {
        setDuration(width / MARQUEE_SPEED_PX);
      }
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [reducedMotion]);

  return (
    <ProjectsContainer id={t.sections.projects}>
      <ProjectsWrapper>
        <Heading>{t.projects.heading}</Heading>
        {reducedMotion ? null : (
          <Toolbar>
            <PauseButton
              type="button"
              $pressed={!playing}
              aria-pressed={!playing}
              data-marquee-state={playing ? "playing" : "paused"}
              onClick={() => setPlaying((value) => !value)}
            >
              {playing ? t.projects.pause : t.projects.play}
            </PauseButton>
          </Toolbar>
        )}
        <Viewport role="region" aria-label={t.projects.region} $reduced={reducedMotion}>
          <Track
            data-marquee-track
            data-marquee-playing={playing && !reducedMotion ? "true" : "false"}
            $duration={duration}
            $paused={!playing || reducedMotion}
            $reduced={reducedMotion}
          >
            <Set ref={setRef}>
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </Set>
            {reducedMotion ? null : (
              <Set>
                {projects.map((project) => (
                  <ProjectCard key={`clone-${project.id}`} project={project} inert />
                ))}
              </Set>
            )}
          </Track>
        </Viewport>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default ProjectsSection;
