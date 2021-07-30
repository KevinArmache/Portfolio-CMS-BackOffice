import "./App.css";
import { useState, useEffect } from "react";
import Form from "./Components/Form/Form.jsx";
import Projects from "./Components/Projects/Projects.jsx";

function App() {
  const [Project, setProject] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_PROJECT}`, { method: "GET" })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setProject(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <h1>Back Office Portfolio CMS</h1>
      <h2>Add More Projects</h2>
      <Form />
      <h2>All my projects</h2>
      <Projects data={Project} />
    </div>
  );
}

export default App;
