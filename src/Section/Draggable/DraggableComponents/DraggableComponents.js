import React from 'react'
import "./DraggableComponents.css"
const DraggableComponents = ({img}) => {
    return (
    <div className='draggable-card'>
        <img src={img} alt=""/>
    </div>
    )
}

export default DraggableComponents
