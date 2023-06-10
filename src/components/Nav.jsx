import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <div className='navStyle'>
      <div><h2>KRIS GARD</h2></div>

      <ul>
        <Link to={"/"}><li>Main</li></Link>
        <Link to={"/projects"}><li>Portfolio</li></Link>
        <Link to={"/about_me"}><li>About</li></Link>
        <Link to={"/contact"}><li className='contactStyle'>Contact</li></Link>
      </ul>
    </div>
  )
}

export default Nav