import React, {useState, useContext} from 'react'
import MintLoad from "../gifs/mintingLoading.gif"
import { ToggleContext } from '../contexts/ToggleContext.js'

const Mint = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [counter, setCounter] = useState(0)
    const {openShop, Difference, countDown} = useContext(ToggleContext)
   

    const handleMintLoading = () => {
        setIsOpen(true)
    }

    isOpen && setTimeout(() => {
        setIsOpen(false)
    }, 3000)

    const handleMainCounter = (action) => {
        if (action === "sub") {
            counter > 0 && setCounter(counter - 1)
        } else {
            counter < 2 && setCounter(counter + 1)
        }
    }

    return (
        <div className="mint">
            <div className={isOpen ? "img1 open" : "img1"}>
                <img src={MintLoad} alt="loading gif" />
            </div>
            <div>
                <p >The price per pirate is <span className="eth">0.069429 ETH</span>, max 2 per wallet, setting sail Jan 7th, 2022</p>

                {Difference < 0 ? <p>Launched</p> : <p>Launch in: <span>{countDown.days}D</span> </p>}

                <div>
                <div className="bar">
                                    <div style={{height: "100%", background:"red", width:"12%", position: "absolute"}}></div>
                                    <div>Gen 0</div>
                                    <div className="mid">20k $Booty</div>
                                    <div>40k $Booty</div>
                                </div>
                                <br></br>
                                <p>0/30,000 Minted</p>

                    <button onClick={()=>{handleMintLoading(); setTimeout(()=>{openShop()}, 3000)}} disabled>MINT</button>
                                                    <input type="checkbox"  defaultChecked/><label style={{marginLeft:"5px"}}>Stake at Mint</label>

                </div>
            </div>
        </div>
    )
}

export default Mint
