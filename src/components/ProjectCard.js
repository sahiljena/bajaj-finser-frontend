import { useState } from "react";
import Tasks from "./Taks";
const ProjectCard = ({ project }) => {
  const [showTeam, setShowTeam] = useState(false);
  const [showTasks, setShowTasks] = useState(false);
  return (
    <>
      <div key={project?.name} className="shadow rounded border-2 p-2 mt-2">
        <p className="font-semibold">{project?.name}</p>
        <p className="text-xs">{project?.description}</p>
        <div className="flex gap-2">
          <button
            className="bg-cyan-800 text-white rounded px-2 py-1 text-xs mt-2"
            onClick={() => setShowTeam(!showTeam)}
          >
            Show Team
          </button>
          <button
            className="bg-pink-600 text-white rounded px-2 py-1 text-xs mt-2"
            onClick={() => setShowTasks(!showTasks)}
          >
            Show Tasks
          </button>
        </div>
        {showTeam && (
          <div className="gap-1">
            <p className="font-semibold">Team</p>

            {project?.team?.map((member, i) => {
              return (
                <div
                  key={i}
                  className="text-xs text-gray-600 rounded px-2 py-1 font-semibold"
                >
                  {i + 1}. {member?.name} - {member?.role}
                </div>
              );
            })}
          </div>
        )}
        {showTasks && <Tasks tasks={project?.tasks} />}
      </div>
    </>
  );
};

export default ProjectCard;
