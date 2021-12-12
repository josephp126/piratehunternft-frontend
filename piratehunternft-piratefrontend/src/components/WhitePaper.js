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

                On <em>mint day</em>  , the next generation of 10,000 Pirates will be born into the Metaverse, hungry to strike rich. Half will change professions and turn on their crew. 5,000 greedy Bounty Hunters will be born, stopping at nothing to prevent the pirates from finding and keeping all the $BOOTY for themselves. Who will you be, a Pirate or a Bounty Hunter?<br></br> <br></br>

                <ul>
                    <li>
                        Pirate Hunters adds an element of the typical RPG to the novel idea of Tokenomics and risk protocol within a fully decentralized platform, using interactions between ERC-20 and ERC-721 tokens to create a compelling game of tag between the Pirates and the Bounty Hunters.
                    </li>

                </ul>
                <br></br> <br></br>
                <p>Rules:</p>
                10000 total mintable, Max mint 2 Pirates per wallet. 2500 WL Gen 0 @ 0.069420 per. 50% will turn into Bounty hunters by chance.
                <br></br> <br></br>
                Pirate Hunter’s is a collection of 10,000 Gen 0 NFTs where Pirates and Bounty Hunter’s fight for $BOOTY. Each wallet will be able to mint 2 Pirates. 2500 total whitelist will be given out prior to launch. Each mint will be priced at 0.069420 per NFT. You will have a 50% chance of getting a Bounty Hunter or Pirate once reveal happens.
                <br></br> <br></br>
                All Pirates will start as Rank C. Rank B and Rank A will be earned through RANKUP, paid for by $BOOTY through the website.
                <br></br> <br></br>
                There will be a max cap of 1,000,000,000 (1 billion) $BOOTY tokens. The Baron has only released a map of where the first 250,000,000 (250 million) $BOOTY tokens are hidden. Each phase will unlock the next tranche of 250M, with 250M unlocked to the developers after 2 years. When the first tranche of $BOOTY tokens have been discovered, Phase 2 - The New World Order, shall begin.
                <br></br> <br></br>
                $BOOTY paid to the Shop, through Bounties, and through Bounty Hunters unstaking. Tax will be burned.
                <br></br> <br></br>
                <p>Pirates:</p>
                Staked Pirates will accumulate 10,000 $BOOTY Tokens per day max. If the pirates rob the Bounty hunters, they may accumulate past the 10k limit per day.
                $BOOTY can only be retrieved when unstaking, with a minimum of 20,000 $BOOTY to unstake. However, there are great risks with unstaking with more than 50,000 $BOOTY.
                <br></br> <br></br>
                Unstaking a pirate  comes with many risks:
                <br></br>
                <ol>
                    <li> 40% $BOOTY to be taxed (90% recovered by all staked Bounty Hunters, split evenly, 10% burned)</li>
                    <li>Unstaking holding more than 50,000 $BOOTY, 50% chance that 60% of the $BOOTY will be given to the BH, 40% burned forever. </li>
                    <li>$BOOTY Utility & Rank UP: Details announced after Phase 1 begins. </li>
                </ol>
                <br></br> <br></br>

                <p>BountyHunters:</p>
                Staked Bounty Hunters will recover 90% of $BOOTY collected from unstaking Pirates tax. In addition, they will each earn 3000 $BOOTY a day.

                <ul>
                    <li> Bounty hunters unstaking with less than 50,000 $BOOTY pay 20% tax (100% burned)</li>
                </ul>

                <br></br> <br></br>
                Unstaking a Bounty Hunter with more than 50,000 $BOOTY to your wallet comes with risks as well:

                <ul>
                    <li> BH with more than 50,000 $BOOTY get robbed back, with the pirates taking 50% of the $BOOTY held by the BH, distributed by rank of Pirate (Rank C: 20%, Rank B: 30%, Rank A: 50%). Rank UP details announced after Phase 1 begins.
                    </li>
                    <li>$BOOTY Utility & Bounties: Details announced after Phase 1 begins.</li>
                </ul>

                <table className="white">
                    <thead>
                        <tr>
                            <th>Unstake to collect $BOOTY to wallet</th>
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
                            <td>50% robbed back by the staked pirates (of which Rank C: 20%, Rank B: 30%, Rank A: 50%) 50% burned.
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
