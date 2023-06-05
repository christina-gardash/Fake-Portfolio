import { useState } from "react"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import data from "./data/data.json"
import HomeSection from "./components/HomeSection"
import Projects from "./components/Projects"
import {Routes, Route} from 'react-router-dom'
import ProjectDescription from "./components/ProjectDescription"

function App() {
  const [projects, setProjects] = useState(data)
  const [project, setProject] = useState({})


  return (
    <div className='app'>
      <Nav />

      <Routes>
        <Route path="/" element={ <HomeSection />} />
        <Route path="/projects" element={ <Projects project={projects} setProject={setProject}/>} />
        <Route path="/project" element={ <ProjectDescription project={project}/>} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
