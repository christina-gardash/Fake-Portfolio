import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Projects({ project, setProject }) {
  const navigate = useNavigate();

  function clickHandler(i) {
    setProject(i);
    navigate("/project");
  }

  return (

    <div className="projects-section grow">
      <h2 className="projectsHeading">MY RECENT WORK...</h2>


      {project.map((i) => (
        <div className="card" onClick={() => clickHandler(i)}>
          <div className="cardImage">
            <img src={i.pics} alt="" />
          </div>

          <div className="cardText">
            <h2>{i.name}</h2>
            <h3>Stack used:</h3>
            <ul>
              {i.stack.map((representedAs) => (
                <li>{representedAs}</li>
              ))}
            </ul>

            <Link to={"/project"}><button>View</button></Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
