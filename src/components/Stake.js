import React, { useState } from 'react'
import StakeLoading from "../gifs/stakeLoading.gif"
import ConnectLoading from "../gifs/mintingLoading.gif"
import TradeLoading from "../gifs/tradeLoad.gif"
import { useEthers, useEtherBalance } from "@usedapp/core"
import {Link} from "react-router-dom"
import Web3 from "web3"
import bootychest from "../abi/BootyChest.json"

const Stake = () => {
    const [isStakeOpen, setIsStakeopen] = useState(false)
    const [isConnectOpen, setIsConnectopen] = useState(false)
    const [isTradeOpen, setIsTradeopen] = useState(false)
    const { activateBrowserWallet, account } = useEthers()


    const handleStakeLoading = async() => {
        const web3 = new Web3(window.ethereum)
        const _account = await web3.eth.getAccounts()

        const contract = new web3.eth.Contract(
            bootychest.abi,
            bootychest["networks"]["5777"]["address"]
        )

        const tokenIds = [1, 2, 3];
        const value = 10 * 2;
        await contract.methods.addTokensToStake(_account[0], ).send({
            from: _account[0],
            value: value,
        });
    }
    const handleConnectLoading = () => {
        activateBrowserWallet()
        // setIsConnectopen(true)
    }
    // const handleTradeLoading = () => {
    //     setIsTradeopen(true)
    // }

    isStakeOpen && setTimeout(() => {
        setIsStakeopen(false)
    }, 3000)

    isConnectOpen && setTimeout(() => {
        setIsConnectopen(false)
    }, 3000)

    isTradeOpen && setTimeout(() => {
        setIsTradeopen(false)
    }, 3000)

    return (
        <>
            <h1 style={{textAlign:"center"}}>Create your own tokens in few steps</h1>
            <div className=" stake-container">
                <div className="stake-1">
                    <div className="stake-2">
                        <div className="stake-3">
                            <div className="btn">
                                <div>
                                    <Link to="/whitepaper">
                                        <button style={{marginLeft: "0px"}}>ERC20</button>
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/whitepaper">
                                        <button>BEP20</button>
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/whitepaper">
                                        <button>POLYGON</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default Stake