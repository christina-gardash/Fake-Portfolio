import React from 'react'
import {useNavigate} from 'react-router-dom'

function Projects({project, setProject}) {
    const navigate = useNavigate()

    function clickHandler (i) {
        setProject(i)
        navigate('/project')
    }

  return (
    <div className="projects-section grow">
        {project.map(i => <div className='card' onClick={() => clickHandler(i)}>
            <img src={i.pics} alt=""/>
            <h2>{i.name}</h2>
            <h3>Stack used:</h3>
            <ul>
                {i.stack.map(representedAs => <li>{representedAs}</li>)}
            </ul>

        </div>)}
  </div>
  )
}

export default Projects