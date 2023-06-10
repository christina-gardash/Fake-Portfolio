import React from "react";
import { Link } from "react-router-dom";

function HomeSection() {
  return (
    <main className="main-section grow">
      <article>
        <p>INTRO</p>
        <h1>Hello, I'm Christina Gardash.</h1>
        <h2>
          I am an aspiring UI/UX designer and a web-developer living in Munich,
          Germany. Let's work together.
        </h2>
        <Link className="buttonAbout" to={"/about"}><button>Read more about me</button></Link>
      </article>

      <img src="https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt=""/>
    </main>
  );
}

export default HomeSection;
