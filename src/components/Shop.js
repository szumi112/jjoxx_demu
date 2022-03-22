import React from 'react'
import ShopProps from './ShopProps'
import autoSR from './autoSR.jpg'
import trendVwap from './trendVwap.jpg'
import indicator from './indicator.jpg'
import indicator2 from './indicator2.png'
import indicator3 from './indicator3.png'
import indicator4 from './indicator4.png'
import indicator5 from './indicator5.webp'
import indicator6 from './customreqimg.jpg'
import indicator7 from './customreqimg2.jpg'
import indicator8 from './customreqimg3.jpg'
import indicator9 from './customrequestsbg.jpg'


export const Shop = () => {
  return (
    <>
    <div className='shopwrapper'>
      <h1>TradingView Indicators</h1>
        <div className='itemWrapper'>
          
          <ShopProps
          url={indicator}
          name="Heiken Ashi Trend"
          price="29.99"
          >

          </ShopProps>

          <ShopProps
          url={indicator9}
          name="J-JO's Secret"
          price="99.99"
          >

          </ShopProps>

          <ShopProps
          url={indicator2}
          name="Bollinger Band Buy Sell"
          price="199.99"
          >

          </ShopProps>
        

          <ShopProps
          url={trendVwap}
          name="Trend Vwap Buy Sell Signal"
          price="79.99"
          >

          </ShopProps>

          <ShopProps
          url={indicator4}
          name="RSI Heatmap"
          price="459.99"
          >

          </ShopProps>

          <ShopProps
          url={indicator5}
          name="Macd Channel"
          price="79.99"
          >

          </ShopProps>
          <ShopProps
          url={autoSR}
          name="Auto Support Resistance"
          price="19.99"
          >

          </ShopProps>

          <ShopProps
          url={indicator7}
          name="Bollinger Band Trend"
          price="39.99"
          >

          </ShopProps>

          <ShopProps
          url={indicator6}
          name="SMI Signal"
          price="29.99"
          >

          </ShopProps>
          
          <ShopProps
           url={indicator8}
          name="Next Gen Mix"
          price="89.99"
          >

          </ShopProps>
          <ShopProps
          url={indicator3}
          name="Stochastic Divergence Trap"
          price="139.99"
          >

          </ShopProps>
          

        </div>
    </div>
    </>
  )
}
