import React from 'react'
import "./BrowseMost.css"
import Components from './Components/Components'
import Stream1 from "../../assets/images/stream-01.jpg"
import Stream2 from "../../assets/images/stream-02.jpg"
import Stream3 from "../../assets/images/stream-03.jpg"
import Stream4 from "../../assets/images/stream-04.jpg"
import Avatar1 from "../../assets/images/avatar-01.jpg"
import Avatar2 from "../../assets/images/avatar-02.jpg"
import Avatar3 from "../../assets/images/avatar-03.jpg"
import Avatar4 from "../../assets/images/avatar-04.jpg"
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent'
import ProjectButton from '../../components/ProjectButton/ProjectButton'
const BrowseMost = () => {
    return (
    <div className='Project-container'>
        <HeaderComponent mySpan = "Most Popular" myHeading = "Live Stream"/>
        <div className='all-stream-cards'>
            <Components CardImage = {Stream1} AvatarImage = {Avatar1} title = "KenganC" info = "Just Talking With Fans"/>
            <Components CardImage = {Stream2} AvatarImage = {Avatar2} title = "LunaMa" info = "CS-GO 36 Hours Live Stream"/>
            <Components CardImage = {Stream3} AvatarImage = {Avatar3} title = "Areluwa" info = "Maybe Nathej Allnight Chillin'"/>
            <Components CardImage = {Stream4} AvatarImage = {Avatar4} title = "GangTm" info = "Live Streaming Till Morning"/>
        </div>
        <ProjectButton btnValue="Discover All Streams"/>
    </div>
    )
}

export default BrowseMost
