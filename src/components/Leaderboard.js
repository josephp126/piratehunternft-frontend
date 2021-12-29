import React from 'react'
import {Link} from "react-router-dom"

const Leaderboard = () => {
    return (
        <div>
            <div className="level-1 board">
                <div className="level-2">
                    <div className="level-3">
                        <h3>LEADERBOARD</h3>

                        <div className="status-desc-wrapper">
                            <div className="status-desc">
                                <p>PIRATES TOTAL $BOOTY CLAIMED:</p>
                                <p>______</p>
                            </div>
                            <div className="status-desc">
                                <p>BOUNTY HUNTER TOTAL $BOOTY CLAIMED:</p>
                                <p>______</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <div className='terms-service'>
                <Link to="/termsofservice"><button className="btn_term">TERMS OF SERVICES</button></Link>
            </div>
        </div>
        
    )
}

export default Leaderboard
