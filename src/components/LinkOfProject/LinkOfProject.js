import React from 'react'
import "./LinkOfProject.css"

const LinkOfProject = (props) => {
    return (
    <div className='our-link'>
        <a href='/#'>{props.children}</a>
    </div>
    )
}

export default LinkOfProject
