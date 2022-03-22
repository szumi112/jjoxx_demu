import React from 'react'



const ShopProps = (props) => {
  return (<>
                <div className='shopitem'>
                    <img src={props.url} />
                    <p>{props.name}</p>
                    <p>${props.price}</p>
                </div>
        </>
  )
}

export default ShopProps