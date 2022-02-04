import React from 'react'
import "../styles/whitepaper.css"
import { Link } from 'react-router-dom'


const WhitePaper = () => {
    return (

        <Link style={{textDecoration: "none"}} to="/">
            <div  className="whitepaper" >
                <div>
                    <input placeholder='Token Name' />
                </div>
                <div>
                    <input placeholder='Package' />
                </div>
                <div>
                    <input placeholder='Supply' />
                </div>
                <div>
                    <input placeholder='Decimals' />
                </div>
            </div>
        
        </Link>
    )
}

export default WhitePaper
