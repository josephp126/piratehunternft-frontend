import React from 'react'
import "../styles/whitepaper.css"
import { Link } from 'react-router-dom'


const WhitePaper = () => {
    return (

        <Link style={{textDecoration: "none"}} to="/">
        <div  className="whitepaper" >
            <div>
                <div><i className="far fa-times-circle"></i></div>
                <h1>White Paper: Pirate Hunter (v.1)</h1>
                <p>Intro:</p>

                    The Baron was a terrifying pirate that roamed the seas of the Metaverse. Over many decades he amassed a fabulous amount of treasure and $BOOTY, the greatest ever known. He had so much that by the end of his life, he spread his fortunes across the ocean floor, spreading the joy of plundering and treasure hunting, hoping that one day, the next pirate generation would earn his $BOOTY the same way.<br></br> <br></br>

                The time has come for Phase 1: the Age of Pirates. <br></br> <br></br>

                On <em>January 7th 2022</em>  , the next generation of 10,000 Pirates will be born into the Metaverse, hungry to strike rich. Half will change professions and turn on their crew. 5,000 greedy Bounty Hunters will be born, stopping at nothing to prevent the pirates from finding and keeping all the $BOOTY for themselves. Who will you be, a Pirate or a Bounty Hunter?<br></br> <br></br>

                <ul>
                    <li>
                        Pirate Hunters adds an element of the typical RPG to the novel idea of Tokenomics and risk protocol within a fully decentralized platform, using interactions between ERC-20 and ERC-721 tokens to create a compelling game of chicken between the Pirates and the Bounty Hunters.
                <br></br> <br></br>
                Pirate Hunters is 100% On-Chain, including our randomizers, which means our minting operation and risk protocol mechanics are secure, transparent, and fair to all players.
                    </li>

                </ul>
                <br></br> <br></br>
                <p>Rules:</p>
                
                Pirate Hunter’s is a collection of 30,000 NFTs where Pirates and Bounty Hunter’s fight for $BOOTY. Each wallet will be able to mint 2 NFT’s. 2500 total whitelist will be given out prior to launch. Each mint will be priced at 0.069420 per NFT. You will have a 50% chance of getting a Bounty Hunter or Pirate at mint, and have the option to stake immediately. Gen 0 will be mintable with ETH, and Gen 1 & 2 will be mintable with $BOOTY at the start of each new phase.
                <br></br> <br></br>
                All Pirates will start as Rank C. Rank B and Rank A will be earned through RANKUP, paid for by $BOOTY through the website. Bounty Hunters do not have ranks.
                <br></br> <br></br>
                <p>Pirates:</p>
                    Staked Pirates will accumulate 10,000 $BOOTY Tokens per day max. If $BOOTY is earned from other sources apart from daily salary, they may accumulate past the 10k limit per day. $BOOTY can be claimed without unstaking, with a minimum of 20,000 $BOOTY to unstake. However, there are great risks with claiming more than 50,000 $BOOTY.
                <br></br> <br></br>
                Claiming $BOOTY from a pirate  comes with many risks:
                <br></br>
                <ol>
                    <li> 40% $BOOTY to be taxed (90% recovered by all staked Bounty Hunters, split evenly, 10% burned)</li>
                    <li> If claiming from a pirate withmore than 50,000 $BOOTY, 50% chance that 60% of the $BOOTY will be given to the BH, 40% burned forever. </li>
                    <li>$BOOTY Utility & Rank UP: Details announced after Phase 1 begins. </li>
                </ol>
                <br></br> <br></br>

                <p>BountyHunters:</p>
                Staked Bounty Hunters will recover 90% of $BOOTY collected from Pirates' tax. In addition, they will each earn 3000 $BOOTY a day.

                <ul>
                    <li> Bounty hunters claiming with less than 50,000 $BOOTY pay 20% tax (100% burned)</li>
                </ul>

                <br></br> <br></br>
                Claiming from a Bounty Hunter holding more than 50,000 $BOOTY to your wallet comes with risks as well:

                <ul>
                    <li> BH claiming more than 50,000 $BOOTY are robbed back, with the pirates taking 50% of the $BOOTY held by the BH, distributed by rank of Pirate (Rank B's will earn 25% more than Rank C and Rank A's will earn 50% more than Rank C). Rank UP details announced after Phase 1 begins. All Pirates are minted at Rank C to start, therefore distribution will be even throughout. 
                    </li>
                    <li>$BOOTY Utility & Bounties: Details announced after Phase 1 begins.</li>
                </ul>

                <table className="white">
                    <thead>
                        <tr>
                            <th>Claiming / Unstaking to collect $BOOTY</th>
                            <th>Risk</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Pirate {">"} 20k but {"<"} 50k</td>
                            <td>40% tax (recovered by all staked BH, split evenly,)</td>
                        </tr>
                        <tr>
                            <td>Pirate {">"}</td>
                            <td>50% chance that all BOOTY is recovered by the BH’s. 60% split evenly among staked BH, 40% burned.</td>
                        </tr>
                        <tr>
                            <td>BH {"<"} 50k</td>
                            <td>20% tax (burned)</td>
                        </tr>
                        <tr>
                            <td>BH {">"} 50k</td>
                            <td>50% robbed back by the staked pirates (divided by ranks) 50% burned.
                                Rank UP system to be released shortly.
                            </td>

                        </tr>
                    </tbody>
                </table>

                <div>In this thrilling game of NFT chicken, the risks and rewards are spread evenly. $BOOTY will be earned through loyalty and perseverance.</div>
                <br></br>
                <div><b>Total $BOOTY in circulation and details to be announced on mint day. </b></div>
            </div>
        </div>
        </Link>
    )
}

export default WhitePaper
