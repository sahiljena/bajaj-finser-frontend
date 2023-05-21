import { useEffect, useState } from "react";
import EmployeeCard from "./components/EmployeeCard";
import SearchBar from "./components/SearchBar";
import staticEmployeeData from "./sampleTest.json";
import FilterBySkill from "./components/FilterBySkill";
function App() {
  const [employeeData, setEmployeeData] = useState([]);
  const [filteredEmployeeData, setFilteredEmployeeList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchCategory, setSearchCategory] = useState("name");

  const [query, setQuery] = useState("");

  const [skillQuery, setSkillQuery] = useState([]);

  const [skillSet, setSkillSet] = useState([]);

  const fetchData = () => {
    setLoading(true);
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://raw.githubusercontent.com/dixitsoham7/dixitsoham7.github.io/main/index.json",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setEmployeeData(result?.employees);
        setFilteredEmployeeList(result?.employees);

        let skillSetTemp = [];
        result?.employees.map((employee) => {
          employee?.skills?.map((skill) => {
            skillSetTemp.push(skill);
          });
        });

        let tempSet = new Set(skillSetTemp);
        skillSetTemp = [...tempSet];
        setSkillSet(skillSetTemp);
        setLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
        //console.log(staticEmployeeData?.employees);
        setEmployeeData(staticEmployeeData?.employees);
        setFilteredEmployeeList(staticEmployeeData?.employees);
        setLoading(false);
      });
  };

  const filterEmployeesByName = (event, searchCategory, tempArray) => {
    const query = event === -1 ? "" : event.target.value;
    var updatedList =
      skillQuery.length > 0 ? [...filteredEmployeeData] : [...employeeData];
    if (searchCategory === "name") {
      updatedList = updatedList?.filter((employee) => {
        console.log(skillQuery, event.target.value);
        return (
          employee?.name &&
          employee?.name
            ?.toLowerCase()
            .indexOf(event.target.value.toLowerCase()) !== -1
        );
      });
    } else if (searchCategory === "designation") {
      updatedList = updatedList?.filter((employee) => {
        return (
          employee?.designation &&
          employee?.designation?.toLowerCase().indexOf(query.toLowerCase()) !==
            -1
        );
      });
    } else if (searchCategory === "skill") {
      updatedList = employeeData.filter((employee) => {
        if (tempArray.length === 0) return true;
        const skills = employee.skills || [];
        console.log(skills, skills.includes(tempArray));

        for (var i = 0; i < skills.length; i++) {
          for (var j = 0; j < tempArray.length; j++) {
            if (skills[i] == tempArray[j]) return true;
          }
        }
        return false;
        // return skills.some((skill) => {
        //   //console.log(skill, tempArray.indexOf(skill));
        //   //tempArray.includes(skill.toLowerCase());
        //   return skill == tempArray.indexOf(skill);
        // });
      });
      console.log(updatedList);
      //setFilteredEmployeeList(updatedList);
    }

    setFilteredEmployeeList(updatedList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <div>
        <SearchBar
          query={query}
          setQuery={setQuery}
          filterEmployeesByName={filterEmployeesByName}
          searchCategory={searchCategory}
          setSearchCategory={setSearchCategory}
        />

        <FilterBySkill
          setSkillQuery={setSkillQuery}
          skillQuery={skillQuery}
          skills={skillSet}
          filterEmployeesByName={filterEmployeesByName}
        />
      </div>
      <div className="mt-2  p-2 rounded">
        {loading && <p>loading...</p>}
        {filteredEmployeeData?.map((employee) => {
          return (
            <EmployeeCard
              key={employee?.id}
              name={employee?.name}
              designation={employee?.designation}
              skills={employee?.skills}
              projects={employee?.projects}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
