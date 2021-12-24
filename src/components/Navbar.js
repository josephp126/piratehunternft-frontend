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
                <div className="wrapper">
                    <div  className="left">
                        <Link style={{fontSize:"15px", textDecoration:"none", fontWeight:"bold"}} to="/whitepaper"><p>WHITEPAPER </p></Link>
                        <p  onClick={handleMapOpen}>ROADMAP</p>
                    </div>

                    <Link to="/">
                    <div  className="center">
                            <img src={Logo} alt="Logo"/> 
                    </div>  
                    </Link>
                    <div  className="right">
                        <p><a href="https://twitter.com/PirateHunters_/"><i className="fab fa-twitter"></i></a></p>
                        <p><a href="https://discord.gg/KS6aSgbsUr"><img src="https://img.icons8.com/ios-filled/30/ffffff/discord-logo.png" alt="discord"/></a></p>
                        <p><a href="https://www/opensea.io"><img src={Ship} alt="Ship"/></a></p>
                    </div>  
                    </div> 
        </div>
    )
}

export default Navbar
