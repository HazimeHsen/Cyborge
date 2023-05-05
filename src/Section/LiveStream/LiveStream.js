import React from 'react'
import "./LiveStream.css"
import Components from '../BrowseMost/Components/Components'
import Stream1 from "../../assets/images/stream-04.jpg"
import Stream2 from "../../assets/images/stream-05.jpg"
import Stream3 from "../../assets/images/stream-06.jpg"
import Stream4 from "../../assets/images/stream-07.jpg"
import Avatar1 from "../../assets/images/avatar-01.jpg"
import Avatar2 from "../../assets/images/avatar-02.jpg"
import Avatar3 from "../../assets/images/avatar-03.jpg"
import Avatar4 from "../../assets/images/avatar-04.jpg"
const LiveStream = () => {
    return (
    <div className='live-container container Project-container'>
        <Components CardImage = {Stream1} AvatarImage = {Avatar1} title = "Kengan Omeg" info = "Just Talking With Fans"/>
        <Components CardImage = {Stream2} AvatarImage = {Avatar2} title = "LahutaMalc" info = "CS-GO 36 Hours Live Stream"/>
        <Components CardImage = {Stream3} AvatarImage = {Avatar3} title = "Areluwa" info = "Maybe Nathej Allnight Chillin'"/>
        <Components CardImage = {Stream4} AvatarImage = {Avatar4} title = "NewGangTeam" info = "Live Streaming Till Morning"/>
        <Components CardImage = {Stream2} AvatarImage = {Avatar2} title = "Kengan Omeg" info = "Just Talking With Fans"/>
        <Components CardImage = {Stream1} AvatarImage = {Avatar1} title = "LahutaMalc" info = "CS-GO 36 Hours Live Stream"/>
        <Components CardImage = {Stream4} AvatarImage = {Avatar4} title = "Areluwa" info = "Maybe Nathej Allnight Chillin'"/>
        <Components CardImage = {Stream3} AvatarImage = {Avatar3} title = "NewGangTeam" info = "Live Streaming Till Morning"/>
    </div>
    )
}

export default LiveStream
