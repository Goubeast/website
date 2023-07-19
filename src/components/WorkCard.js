import "./WorkCardStyles.css";

import React from 'react'



function dispayPublications(project)
{
    return (
        <div className="container-wrapper">
        <div class="container">
                <img src={project.icon} alt="" data-position="center center" width="300" height="300"/>
    <div class="content">
      <h2>{project.name}</h2>
      <p>{project.desc}</p>
      <a class="button" href={project.link} target="_blank">Read Paper</a>
    </div>
  </div>
  </div>
    )
}

const WorkCard = (props) => {
  return (
  <div className="project-title">
    <h1>{props.heading}</h1>
    <div className="card-container">
      {props.object.map(dispayPublications)}
    </div>
  </div>)
}

export default WorkCard
