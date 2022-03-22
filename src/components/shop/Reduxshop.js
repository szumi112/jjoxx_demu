import React from "react"
import { ReduxshopProps } from "./ReduxshopProps"
import shopdata from "./shopdata"



export default function ReduxShop() {


    const cards = shopdata.map(props => {
        return (
            <ReduxshopProps 
            id={props.id}
            title={props.title}
            price={props.price}
            url={props.url} 
        
            />
        )
    })
    return (
    <div className='shopwrapper'>
      <h1>TradingView Indicators</h1>
        <div className='itemWrapper'>
             {cards}
        </div>
    </div>
    )
}