import React, {useContext} from 'react'
import "../styles/navbar.css"
import Logo from "../imgs/logo/title.png"
import Ship from "../imgs/logo/ship.png"
import { ToggleContext } from '../contexts/ToggleContext'
import {Link} from "react-router-dom"




const Navbar = () => {
    const {openMap} = useContext(ToggleContext)

    const handleMapOpen = () =>{
        openMap()
    }
    
    return (
        <div className="navbar">
            <p style={{textDecoration:"none", fontWeight:"bold", fontSize:"36px", textAlign:"center", width:"100%"}}>Generate Tokens</p> 
        </div>
    )
}

export default Navbar
