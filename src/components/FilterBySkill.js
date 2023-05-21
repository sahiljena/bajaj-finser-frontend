const FilterBySkill = ({
  skills,
  setSkillQuery,
  skillQuery,
  filterEmployeesByName,
}) => {
  return (
    <div className="p-2">
      <p className="text-sm font-semibold text-gray-600">Skills</p>
      <div className="flex gap-2 flex-wrap">
        {skills?.map((skill) => {
          return (
            <div
              className={`text-xs ${
                skillQuery.indexOf(skill) === -1
                  ? "bg-gray-50 text-gray-500"
                  : "bg-blue-500 text-white"
              }  shadow  px-2 py-0.5 rounded-full hover:bg-blue-600 hover:text-white flex gap-2`}
            >
              <label>{skill}</label>
              <input
                type="checkbox"
                key={skill}
                onClick={() => {
                  let tempArray = [...skillQuery];
                  let skillIndex = tempArray.indexOf(skill);
                  if (skillIndex === -1) {
                    tempArray.push(skill);
                  } else {
                    tempArray.splice(skillIndex, 1);
                  }
                  setSkillQuery(tempArray);
                  filterEmployeesByName(-1, "skill", tempArray);
                }}
                value={skill}
                name={skill}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilterBySkill;
