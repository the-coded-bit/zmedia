import React from 'react'
import './components.css'

const Card = ({heading, price, percentage, bgcolor}) => {
  return (
    <div className='card-container' style={{backgroundColor: bgcolor}}>
        <p className='card-heading'>{heading}</p>
        <p className='card-price'>$ {price}</p>
        <p className='card-percentage'>saved {percentage}%</p>
    </div>
  )
}

export default Card