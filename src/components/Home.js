import "../styles/home.css"
import Description from "./Description"
import GameStatus from "./GameStatus"
import Leaderboard from "./Leaderboard"
import Mint from "./Mint"
import Stake from "./Stake"

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
           

        </div>
    )
}

export default Home
