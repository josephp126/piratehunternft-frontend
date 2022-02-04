import React from 'react'
import {Link} from "react-router-dom"

const Leaderboard = () => {
    return (
        <div>
            <div className="level-1 board">
                <div className="level-2">
                    <div className="level-3">
                        <form>
                            <div>
                                <input placeholder='Name' type='text' />
                            </div>
                            <div>
                                <input placeholder='Email' type='email' />
                            </div>
                            <div>
                                <textarea placeholder='Message' ></textarea>
                            </div>
                            <div style={{textAlign: "center"}}>
                                <button>Send Message</button>
                            </div>
                        </form>
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
