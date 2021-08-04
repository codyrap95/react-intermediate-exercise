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
  React.useEffect(() => {
    axiosFetch(link).then((apiPeople) => setPeople(apiPeople));
  }, []);
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
      <Table users={people}></Table>
    </React.Fragment>
  );
}

export default App;
