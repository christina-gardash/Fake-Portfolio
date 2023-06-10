import React from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

function ProjectDescription({project}) {
  return (
    <div className="one_project_section grow">
      <div>
        <img src={project.pics} alt="" />
      </div>

      <div>
        <h2>{project.name}</h2>

        <ul>
          {project.stack.map((i) => (
            <li>{i}</li>
          ))}
        </ul>
        <p>{project.desc}</p>
      </div>

    </div>
  );
}

export default ProjectDescription