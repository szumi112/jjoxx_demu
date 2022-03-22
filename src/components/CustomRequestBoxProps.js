import React from 'react'

export const CustomRequestBoxProps = (props) => {
  return (
    <>
        <div className='requestBox'>
            <h1>{props.name}</h1>
            <img src={props.url}></img>
            <p>{props.desc}</p>

        </div>
</>
  )
}
