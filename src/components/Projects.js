import ProjectCard from "./ProjectCard";

const Projects = ({ projects }) => {
  return (
    <div>
      <p className="font-semibold text-md font-semibold">Projects </p>
      {projects?.map((project) => {
        return <ProjectCard project={project} />;
      })}
    </div>
  );
};

export default Projects;
