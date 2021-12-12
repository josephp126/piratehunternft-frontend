import React, {useState, useContext} from 'react'
import MintLoad from "../gifs/mintingLoading.gif"
import { ToggleContext } from '../contexts/ToggleContext.js'



const Mint = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [counter, setCounter] = useState(0)
    const {openShop} = useContext(ToggleContext)
   

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

                <p>Launch in: <span>2D</span> <span>15H</span> <span>19M</span> <span>12S</span></p>

                <div>
                    <p>{counter}/10,000</p>
                    <div className="counter">
                        <div onClick={() => { handleMainCounter("sub") }}>-</div>
                        <div>{counter}</div>
                        <div onClick={() => { handleMainCounter("add") }}>+</div>
                    </div>

                    <button onClick={()=>{handleMintLoading(); setTimeout(()=>{openShop()}, 3000)}}>MINT</button>
                                                    <input type="checkbox"  defaultChecked/><label style={{marginLeft:"5px"}}>Stake at Mint</label>

                </div>
            </div>
        </div>
    )
}

export default Mint
