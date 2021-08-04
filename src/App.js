import React from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [fetchState, setFetchState] = React.useState("");
  const link = "https://randomuser.me/api/?results=20";

  const apiFetch = async (link) => {
    const response = await fetch(link).then((res) => res.json());
    return response?.results;
  };

  const axiosFetch = async () => {
    const response = await axios
      .get("https://randomuser.me/api/?results=20")
      .then((res) => res)
      .catch((err) => err);
    return response?.data?.results;
  };

  const clickHandler = async () => {
    setFetchState("Loading...");
    const data = await axiosFetch("https://randomuser.me/api/?results=20");
    setFetchState(JSON.stringify(data));
  };
  return (
    <React.Fragment>
      <textarea value={fetchState}></textarea>
      <br></br>
      <button onClick={clickHandler}>Fetch</button>
    </React.Fragment>
  );
}

export default App;
