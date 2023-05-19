import { useState } from "react";

const Tasks = ({ tasks }) => {
  return (
    <div>
      <p className="font-semibold text-md font-semibold">Tasks </p>
      <div className="flex gap-2">
        {tasks?.map((task) => {
          return (
            <div key={task?.id} className="shadow rounded-lg border-2 p-2 mt-2">
              <p className="text-xs font-semibold">{task?.name}</p>
              <p className="text-xs">{task?.status}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tasks;
