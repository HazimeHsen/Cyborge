import React from 'react'
import "./Browse.css"
import BrowseMost from '../../Section/BrowseMost/BrowseMost'
import HowStart from '../../Section/HowStart/HowStart'
import Draggable from '../../Section/Draggable/Draggable'
const Browse = () => {
    return (
    <>
        <Draggable/>
        <HowStart/>
        <BrowseMost/>
    </>
    )
}

export default Browse
