import React from 'react'
import "./ProjectContainer.css"
const ProjectContainer = (props) => {
    return (
    <div className='Project-container'>
        {props.Children}
    </div>
    )
}

export default ProjectContainer
