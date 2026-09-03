import React from 'react'
import image from "../assets/react.svg"
import "./Item.css"

const Item = ({product}) => {
  return (
    <div className='card'>
        <img src={product.image} alt="item image" height={50} width={50}/>
        <h2>title:{product.title}</h2>
        <h3>price:{product.price}$</h3>
        <button className='btn'>AddToCart</button>
    </div>
  )
}

export default Item