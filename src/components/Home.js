import "../styles/home.css"
import Description from "./Description"
import GameStatus from "./GameStatus"
import Leaderboard from "./Leaderboard"
import Mint from "./Mint"
import Stake from "./Stake"
import {Link} from "react-router-dom"
// import {useContext} from "react"
// import { ToggleContext } from '../contexts/ToggleContext.js'

const Home = () => {
    // const {isShopOpen, openShop} = useContext(ToggleContext)
    return (
        <div className="home">
            <div className="wrapper">
                <Mint/>
                <GameStatus />
                <Stake/>
                <Leaderboard/>
                <Description/>
            </div>
            <Link to="/termsofservice"><button className="btn_term">TERMS OF SERVICES</button></Link>

        </div>
    )
}

export default Home
