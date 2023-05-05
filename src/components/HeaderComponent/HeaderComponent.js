import React from 'react'
import "./HeaderComponent.css"

const HeaderComponent = ({mySpan,myHeading}) => {
    return (
    <>
        <div className='title'>
            <h1 className='heading'><span className='underline'>{mySpan}</span> {myHeading}</h1>
        </div>
    </>
    )
}

export default HeaderComponent
