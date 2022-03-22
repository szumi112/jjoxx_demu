import React from 'react'

export default function UserReview(props) {
  return (
    <div className='userReview'>
        <div className='reviewTop'>
            <img src={props.url}></img>
            <p>{props.name}</p>

        </div>
        <div className='reviewBot'>
            <p>"{props.review}"</p>

        </div>
        
    </div>
  )
}
