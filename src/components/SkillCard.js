const SkillsCard = ({ skillstoShow }) => {
  return (
    <div className="mt-1">
      <p className="text-xs font-semibold text-gray-600">Skills</p>
      <div className="flex gap-2 mt-2">
        {skillstoShow?.map((skill) => {
          return (
            <span
              key={skill}
              className="bg-gray-50 rounded-xl shadow text-xs px-2 py-0.5 text-gray-600 font-semibold"
            >
              {skill}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsCard;
