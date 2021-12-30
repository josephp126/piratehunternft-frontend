import React, {useState, useContext} from 'react'
import Items from "./Items.js"
import Web3 from "web3"
import PirateHunters from "../abi/PirateHunters.json"
import MintLoading from "../gifs/mintingLoading.gif"
import PurchaseLoading from "../gifs/purchaseLoading.gif"
import { ToggleContext } from '../contexts/ToggleContext.js'

const Description = () => {
    const [isMintOpen, setIsMintopen] = useState(false)
    const [isPurchaseOpen, setIsPurchaseopen] = useState(false)
    // const [counter, setCounter] = useState(0)
    const {isShopOpen, openShop, Difference, countDown} = useContext(ToggleContext)

    const handleMintLoading = async () =>{
        const web3 = new Web3(window.ethereum)
        const _account = await web3.eth.getAccounts()

        const contract = new web3.eth.Contract(
            PirateHunters.abi,
            PirateHunters["networks"]["5777"]["address"]
        )

        const _price = 0.05 * 10 ** 18;
        const amount = 2;
        const value = amount * _price;
        await contract.methods.mint(amount, false).send({
            from: _account[0],
            value: value,
        });
        //setIsMintopen(true)
    }

    isMintOpen  && setTimeout(()=>{
        setIsMintopen(false)
    }, 3000)

    const handlePurchaseLoading = ()=>{
        setIsPurchaseopen(false)
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
                            <p >The price per pirate is <span className="eth">0.08 ETH, 0.05 ETH</span> for WL, setting sail Jan 7th, 2022.</p>
                            {Difference < 0 ? <p>Launched</p> : <p>Launch in: <span>{countDown.days}D</span></p>}

                                <div className="bar">
                                    <div style={{height: "100%", background:"red", width:"0%", position: "absolute"}}></div>
                                    <div>Gen 0</div>
                                    <div className="mid">20k $Booty</div>
                                    <div>40k $Booty</div>
                                    <div className='one-third'><p>10,000</p> <p>10,000</p> <p>10,000</p></div>
                                </div>
                                <br></br>
                                <p>0/30,000 Minted</p>

                                <button  onClick={()=>{handleMintLoading();}} disabled>MINT</button>
                                <div><input type="checkbox" name="stake" defaultChecked/> <label htmlFor="stake" >Stake at Mint</label></div>

                               
                            {/* </div> */}
                        </div>
                    </div>
                    <button className='purchase' onClick={handlePurchaseLoading} disabled>PURCHASE</button>
                    <p className='act_text'>Items are activated immediately upon purchase to save gas fees. Duplicate items do not stack </p>
                </div>
    )
}

export default Description
