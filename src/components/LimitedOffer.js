import React from 'react'
import discordchat from './discordchat.png';

export const LimitedOffer = () => {
  return (
    <div className='limitedofferContainer'>
    <div className='limitedoffer'>
        <div className='limitedofferWrapper'>
        <h4>Limited Time Offer</h4>
        <h3>Keep more for your Trades</h3>

        <p>Get up to 25% off Automatic Support Resistance and the TREND VWAP EMA Band 
        with extra savings on other tools.
        </p>
        <a href="#"><p className='discordnote'>Instructions on how to receive the tools on Discord &gt;</p></a>
        </div>

        <div className='limitedofferDiscord'>
            <img src={discordchat} />
            <p>
                Additionally with this bundle you get access to our discord for 1 month. 
                Come chat with us and other traders.
            </p>
        </div>
        
    </div>
    <a href="#"><button>BUY NOW</button></a>
    </div>
  )
}
