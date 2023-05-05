import React from 'react'
import './Component.css'

const Components = (props) => {
    return (
    <div className='card my-card'>
        <img className='my-img card-img-top' src={props.img} alt='' />
        <div className='my-body card-body'>
                <div className='name'>
                    <p className='first'>{props.name}</p>
                    <p className='nick-name'>{props.nickName}</p>
                </div>
                <div className='icons'>
                    <ul>
                        <li><i className="material-icons star">star</i> <span>4.8</span></li>
                        <li><i className="material-icons download">download</i><span>2.3M</span></li>
                    </ul>
                </div>
        </div>
    </div>
    )
}

export default Components
