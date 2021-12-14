import React, {useState, useContext} from 'react'
import Items from "./Items.js"
import MintLoading from "../gifs/mintingLoading.gif"
import PurchaseLoading from "../gifs/purchaseLoading.gif"
import { ToggleContext } from '../contexts/ToggleContext.js'

const Description = () => {
    const [isMintOpen, setIsMintopen] = useState(false)
    const [isPurchaseOpen, setIsPurchaseopen] = useState(false)
    // const [counter, setCounter] = useState(0)
    const {isShopOpen, openShop, Difference, countDown} = useContext(ToggleContext)

    const handleMintLoading = () =>{
        setIsMintopen(true)
    }

    // const handleMainCounter = (action) =>{
    //     if(action === "sub"){
    //         counter > 0 && setCounter(counter-1)
    //     } else{
    //         counter < 2 && setCounter(counter+1)
    //     }
    // }

    isMintOpen  && setTimeout(()=>{
        setIsMintopen(false)
    }, 3000)

    const handlePurchaseLoading = ()=>{
        setIsPurchaseopen(true)
    }

    isPurchaseOpen && setTimeout(()=>{
        setIsPurchaseopen(false)
        
    }, 3000)

  

    return (
        <div className="level-1 description">
                    <div className={isMintOpen ? "img open" : "img"}>
                        <img  src={MintLoading} alt="loading gif"/>
                    </div>
                    <div className={isPurchaseOpen ? "img open" : "img"}>
                        <img  src={PurchaseLoading} alt="loading gif"/>
                    </div>

                    <div className="level-2">
                        <div className="level-3 left" style={{ overflowY: "scroll" }}>
                         {  isShopOpen ? <Items /> : <div><p> To view shop,</p> <h1>MINT</h1></div>}
                        </div>

                        <div className="level-3 right">
                            <p >The price per pirate is <span className="eth">0.069429 ETH</span>, max 2 per wallet, setting sail Jan 7th, 2022.</p>
                            {Difference < 0 ? <p>Launched</p> : <p>Launch in: <span>{countDown.days}D</span></p>}
                            

                            {/* <div> */}
                                
                                {/* <div className="counter">
                                    <div onClick={()=>{handleMainCounter("sub")}}>-</div>
                                    <div>{counter}</div>
                                    <div onClick={()=>{handleMainCounter("add")}}>+</div>
                                </div> */}

                                <div className="bar">
                                    <div style={{height: "100%", background:"red", width:"12%", position: "absolute"}}></div>
                                    <div>Gen 0</div>
                                    <div className="mid">20k $Booty</div>
                                    <div>40k $Booty</div>
                                </div>
                                <p>0/30,000 Minted</p>

                                <button  onClick={()=>{handleMintLoading(); setTimeout(()=>{openShop()}, 3000)}} disabled>MINT</button>
                                <label htmlFor="stake" style={{marginLeft:"5px"}}>Stake at Mint</label><input type="checkbox" name="stake"  defaultChecked/>
                               
                            {/* </div> */}
                        </div>
                    </div>
                    <button onClick={handlePurchaseLoading} disabled>PURCHASE</button>
                </div>
    )
}

export default Description
