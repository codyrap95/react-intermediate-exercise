import React from "react";
import axios from "axios";
import "./App.css";
import Table from "./components/Table";

const link = "https://randomuser.me/api/?results=20";

const apiFetch = async (link) => {
  const response = await fetch(link).then((res) => res.json());
  return response?.results;
};

const axiosFetch = (link) => {
  return axios
    .get(link)
    .then((res) => res.data.results)
    .catch((err) => err);
};

function App() {
  const [people, setPeople] = React.useState([]);
  const flattenLocations = (people) => {
    const newPeople = [];
    for (let user of people) {
      const updatedLocation = {};
      for (let key in user.location) {
        if (typeof user.location[key] === "object")
          updatedLocation[key] = Object.values(user.location[key]).join(" ");
        else updatedLocation[key] = user.location[key];
      }
      newPeople.push({ ...user, location: updatedLocation });
    }
    console.log("nl", newPeople);
    return newPeople;
  };
  const sortField = (fieldName) => {
    setPeople((prev) => [
      ...prev.sort((a, b) => {
        if (a.location[fieldName] < b.location[fieldName]) return -1;
        if (a.location[fieldName] > b.location[fieldName]) return 1;
        return 0;
      }),
    ]);
  };
  React.useEffect(() => {
    axiosFetch(link).then((apiPeople) =>
      setPeople(flattenLocations(apiPeople))
    );
  }, []);
  console.log("rerun", people);
  return (
    <React.Fragment>
      <br></br>
      <button
        onClick={() => {
          console.log(people);
        }}
      >
        LOG
      </button>
      <Table users={people} fieldToBeSorted={sortField}></Table>
    </React.Fragment>
  );
}

export default App;
