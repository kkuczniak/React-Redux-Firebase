import React from 'react'

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  console.log(props)

  return(
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
  <span className="card-title">Project Titel{id}</span>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed voluptatibus maxime blanditiis vel deleniti placeat, delectus consequuntur nobis exercitationem quam facilis, non similique sint consectetur, deserunt officia! Possimus, ratione. Repellendus.</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Postet by Net Ninja</div>
          <div>2nd Sept, 3am</div>
        </div>
      </div>
    </div>
  )
}



export default ProjectDetails