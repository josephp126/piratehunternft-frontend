import React, { useState} from 'react'
import StakeLoading from "../gifs/stakeLoading.gif"
import ConnectLoading from "../gifs/mintingLoading.gif"
import TradeLoading from "../gifs/tradeLoad.gif"


const Stake = () => {
    const [isStakeOpen, setIsStakeopen] = useState(false)
    const [isConnectOpen, setIsConnectopen] = useState(false)
    const [isTradeOpen, setIsTradeopen] = useState(false)

    const handleStakeLoading = () => {
        setIsStakeopen(true)
    }
    const handleConnectLoading = () => {
        setIsConnectopen(true)
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

        <div className=" stake-container">
            <div className={isStakeOpen ? "img open" : "img"}>
                <img src={StakeLoading} alt="loading gif" />
            </div>
            <div className={isConnectOpen ? "img open" : "img"}>
                <img src={ConnectLoading} alt="loading gif" />
            </div>
            <div className={isTradeOpen ? "img open" : "img"}>
                <img src={TradeLoading} alt="loading gif" />
            </div>
            <div className="stake-1">
                <div className="stake-2">
                    <div className="stake-3">
                        <div className="stake-3-left">
                            <div className="top">
                                <h3>UNSTAKED:</h3>
                                <button onClick={handleConnectLoading} disabled>CONNECT WALLET</button>
                            </div>
                            <div className="bottom">
                                <h3>STAKED:</h3>
                            </div>

                        </div>
                        <div className="stake-3-right">
                            <div className="top">
                                <h3>ACTIVE ITEMS:</h3>
                            </div>
                            <div className="bottom">
                                <div>
                                    <p>TOTAL $BOOTY IN WALLET:</p>
                                    <h1>0</h1>
                                </div>
                                <div>
                                    <p>TOTAL $BOOTY UNCLAIMED:</p>
                                    <h1>0</h1>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="btn">
            <div className="button" >
                <button onClick={handleStakeLoading} disabled>STAKE</button>
                <button onClick={handleStakeLoading} disabled>CLAIM</button>
                <button onClick={handleStakeLoading} disabled>UNSTAKE</button>
            </div>
            {/* <div className="button">
                <button onClick={handleTradeLoading} disabled>TRADE</button>
            </div> */}
            </div>
        </div>
    )
}

export default Stake
