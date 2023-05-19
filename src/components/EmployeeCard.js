import { useState } from "react";
import ProjectCard from "./Projects";
import SkillsCard from "./SkillCard";

const EmployeeCard = ({ name, designation, skills, projects, tasks }) => {
  const [showProjects, setShowProjects] = useState(false);

  return (
    <div className="shadow-sm rounded border-2 mt-4 p-3 px-4">
      <div className="flex gap-4">
        <div>
          <img
            className="h-10 w-10 rounded-full"
            src={`https://ui-avatars.com/api/?background=random&name=${name}`}
          />
        </div>
        <div>
          <p className="text-xl font-semibold text-blue-600">
            {name ? name : "No Name"}
          </p>
          <span className="text-xs text-gray-600 font-semibold underline decoration-dotted underline-offset-4">
            {designation}
          </span>
        </div>
      </div>
      <SkillsCard skillstoShow={skills} />
      <br />
      <div className="flex gap-2">
        <button
          className="bg-blue-600 text-white rounded px-2 py-1 text-sm"
          onClick={() => setShowProjects(!showProjects)}
        >
          Show Projects
        </button>
      </div>
      {showProjects && <ProjectCard projects={projects} />}
    </div>
  );
};

export default EmployeeCard;
