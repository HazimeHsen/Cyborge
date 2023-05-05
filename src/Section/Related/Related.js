import React from 'react'
import "./Related.css"
import Components from '../Popular/components/Components'
import Game1 from "../../assets/images/game-01.jpg"
import Game2 from "../../assets/images/game-02.jpg"
import Game3 from "../../assets/images/game-03.jpg"
const Related = () => {
    return (
    <div className='related-container Project-container'>
        <Components img = {Game1} name = "Dota 2" nickName = "Sandbox"/>
        <Components img = {Game2} name = "Dota 2" nickName = "Sandbox"/>
        <Components img = {Game3} name = "Dota 2" nickName = "Sandbox"/>
        <Components img = {Game1} name = "Dota 2" nickName = "Sandbox"/>
        <Components img = {Game2} name = "Dota 2" nickName = "Sandbox"/>
        <Components img = {Game3} name = "Dota 2" nickName = "Sandbox"/>
    </div>
    )
}

export default Related
