import { useEffect, useState } from "react";
import EmployeeCard from "./components/EmployeeCard";
import SearchBar from "./components/SearchBar";

function App() {
  const [employeeData, setEmployeeData] = useState([]);
  const [filteredEmployeeData, setFilteredEmployeeList] = useState([]);
  const [searchCategory, setSearchCategory] = useState("name");

  const [query, setQuery] = useState("");

  const fetchData = () => {
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
      })
      .catch((error) => console.log("error", error));
  };

  const filterEmployeesByName = (event, searchCategory) => {
    const query = event.target.value;
    var updatedList = [...employeeData];
    if (searchCategory === "name") {
      updatedList = updatedList?.filter((employee) => {
        return (
          employee?.name &&
          employee?.name?.toLowerCase().indexOf(query.toLowerCase()) !== -1
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
        const skills = employee.skills || [];
        return skills.some((skill) =>
          skill.toLowerCase().includes(query.toLowerCase())
        );
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
      </div>
      <div className="mt-2  p-2 rounded">
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
