import React from 'react'
import autoSR from './autoSR.jpg';
import trendVwap from './trendVwap.jpg';
import OfferProps from './OffersProps';

export const Offers = () => {
  return (
    <>
    <OfferProps 
    url={trendVwap}
    name="SOPHISTICATED TREND VWAP BAND EMA"
    review="
    Are you ready to unleash the power of Artificial Intelligence?
    Fully automated and backtested buy and sell signals. Just let the software 
    do its job - and the trades will show up in front of your eyes.
    "

    ></OfferProps>

    <OfferProps 
    url={autoSR}
    name="AUTOMATIC SUPPORT AND RESISTANCE"
    review="
    We would like to share with you our innovative algorithms that we have been using,
    testing and refining for long weeks and months. They work in ANY market and timeframe!
    Traders tend to really appreciate their simplicity."

    ></OfferProps>
    
    
    </>
  )
}
