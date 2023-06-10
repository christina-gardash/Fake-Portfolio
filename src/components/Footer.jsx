import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footerStyle'>
      <p>FIND ME HERE:</p>
      <Link to={"https://www.linkedin.com/in/christina-gardash-26150a1a5/"}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEUAAAD///+Hh4fs7Ozm5uadnZ2Ojo6EhIR5eXmrq6uTk5Ph4eGIiIikpKR8fHzw8PD5+fnIyMjPz8/V1dW2tra+vr5sbGxQUFAWFhYxMTEpKSnCwsJlZWWlpaU/Pz9JSUkgICA4ODhYWFhycnIlJSVAQECBfPBeAAAD1klEQVR4nO2da1vCMAxGqTBhVETGxQuggvr//6KiIOguyWhC1j3v+UxdzjPWdmmCnQ4AAAAAAAAAAAAAAAAAAAAAAAAAALDi/S2d+F6357N08GQdjAJD707xN9YBCZO6PIl1UIIs7goEnRu/WAcmxajQb8ebdWgyzEsFnbu1Dk6CokfwyMo6vHAWlYLOPVgHGEzxJHNkYh1gKNXf0R331iEGQgq6zDrEMPq0oXu1DjKIjGHYtw4yCGqe2RH1XLNhCLqxdZQhrDiGzjrKEG5ZhjEv+pyp1LlH6zADGLAMX63DDGDLMrSOMoRHjuCddZRBjBmGcW/blgzDoXWQQbwxDCPPLLb9S9rpDEnD6BNu1FyztA4wmPtqwbiXih+SSsPYcxjfVKVqFtbByVB+F7fWoUmxLZ5uslfrwARJ8ukM35obuKc//eM3b5vfN6tknk2n2STtb6xDAQAAAAAAQI3nwXA2mXrvv/a+y3X/2ToeWT6Sae79zPVmF8gh3I8SgvyYFTXm+t+Ax1F5Ri/Trp27Kb30gfyY8kq/Pd0/H38hyiHuUtUj2KszDKuzc1/0Tj78NCGv4NysYYZknvzEkLzfe/RKknUN3z310V+81lm6qiGv1OPAID5DXqXHkXVjDK95hrxCj1PmcRnWvYM7NA661AzrPYMHFO6iliGryqMA+SYPLcPumYbyp11KhlUdDrWv10BDz6u1KmYahSGnEKkU4ZeNcwzp95EghEsHGmgoPJ+eY0iPCaT9hqPWG4o+iecY1t9S10WyKbCZhpJrYjMNJSs+G2oouGBcwtDP0yRZzzynBekwJCLD5cnLwnbGHvYei2Eu2Ut3dP4gl5ZSNex+5AdveLtyuRyxpmFJhXiPM7ZXPPZChswcU2nOhXUXTQ153VLljZmsHI5Y5aCaYTc/7hfyaMcJ9uaqGVYeQzBWRrGpRsuwelNCd3nIdR8rGVLvP/RfEJtMlQz/n3P/hz42FeuvVjKkLstYcJptSD5ET7Sh1AuUzopPT/X0qi9Va65jSBcD0Q+iVM+cjiF9XXrRl9rUqBgycmX07l3qEErFsGrHtoc+u5F6Q1QxZKzWG/K6UhtTK8OH1hvS+zYYahqS8yAMYQhDGMKQNCTHwLDxhmS1CQxhaG7IrIKGIQxhCEMYwhCGMIShqWGdHlIYwhCGMIQhDGEIw6Ya1vrlDxjCEIYwhCEMW2pI/vYTDGFobriGYfSGZB8oDGEIQ3VDsucchjAUNTznN2gvY3glZHg77hLkx6TEmDHnx1eoy45b8Y/rAQAAAAAAAAAAAAAAAAAAAAAAAADi4ROq8EbESHvjyAAAAABJRU5ErkJggg==" alt="" /></Link>
      <Link to={"https://github.com/christina-gardash"}><img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg" alt="" /></Link>
      <Link to={"https://www.behance.net/"}><img src="https://cdn-icons-png.flaticon.com/512/51/51916.png" alt="" /></Link>
      <Link to={"https://app.netlify.com/teams/christina-gardash/overview"}><img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3219986/netlify-icon-md.png" alt="" /></Link>
    </div>
  )
}

export default Footer