import { useState, useEffect } from "react";
import "./Projects.scss";

function Projects(data) {
  const [GetId, setGetId] = useState("");

  function handleClick(id) {
    setGetId(id);
  }
  useEffect(() => {
    console.log(GetId);

    fetch(`http://localhost:5500/api/project/delete/${GetId}`, {
      method: "DELETE",
      body: JSON.stringify({ GetId }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
      },
    });
  }, [GetId]);

  const [TheId, setTheId] = useState("");
  const [NewGithub, setNewGithub] = useState("");
  const [NewCloudinary, setNewCloudinary] = useState("");

  function TargetId(id) {
    setTheId(id);
  }

  useEffect(() => {
    fetch(`http://localhost:5500/api/project/update/${TheId}`, {
      method: "PUT",
      body: JSON.stringify({ NewGithub, NewCloudinary }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
      },
    });
    console.log(TheId);
    console.log(NewGithub);
    console.log(NewCloudinary);
  }, [TheId]);

  return (
    <div>
      <div className="MyProjetcs">
        {data.data.map((element, index) => {
          return (
            <>
              <div key={index} className="MyProject">
                <img className="MyProject__Image" src={element.cloudinary} />
                <div className="Button">
                  <a className="Button__Link" href={element.github}>
                    Open
                  </a>
                  <button
                    className="Button__Link"
                    onClick={() => handleClick(element.id)}
                  >
                    Delete
                  </button>

                  <button className="Button__Link">Modify</button>

                  <div className="Modify">
                    <label>Github</label>
                    <input
                      type="url"
                      onChange={(e) => setNewGithub(e.target.value)}
                    />
                    <label>Cloudinary</label>
                    <input
                      type="url"
                      onChange={(e) => setNewCloudinary(e.target.value)}
                    />
                    <button onClick={() => TargetId(element.id)}>Update</button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
