import React from 'react'
import secure from './secure.jpg'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='quicklinks' >
            <p>Quick Links</p>
            <ul>
                <a href="#"><li>Contact</li></a>
                <a href="#"><li>FAQ</li></a>
                <a href="#"><li>Refund Policy</li></a>
                <a href="#"><li>Terms Of Service</li></a>
            </ul>
        <hr></hr>
        </div>
        <hr></hr>

        <div className='footerend'>
        <hr className='displaynone'></hr>

        
        <p className='copyright'> © 2022 J-JO Trading. Made by MattMilos </p> 
        <p><a href="#">Privacy Policy</a></p>
        <p><a href="#">Terms Of Use</a> </p>
        <p>United States</p>
        <img src={secure} />

        </div>
        <div className='disclaimer'>
        <p>J-JO TRADING IS A TOOL PROVIDER. IT IS NOT INTENDED TO BE TRADING OR INVESTING ADVICE.
             WE DO NOT RECOMMEND STOCKS TO BUY OR SELL, WE PROVIDE TOOLS TO HELP YOU IN MAKING YOUR OWN DECISIONS. 
             OUR TRADING TOOLS ARE PROVIDED 'AS-IS' AND WITHOUT WARRANTY.
             <br></br>
See our Terms of Service and Customer Contract and Market Data Disclaimers for complete disclaimer language.
Invest wisely. Always do your own careful due diligence and research before trading or investing.</p>
    </div>
        

    </div>
    

  )
}
