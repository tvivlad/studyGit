import React from 'react'
import classes from './Card.module.css'
import { useNavigate } from 'react-router-dom'
const Card = ({ product }) => {
  const navigate = useNavigate()

  return (
    <div className={classes.card}>
      <div className={classes.title}>{product.title}</div>
      <div className={classes.category}>{product.category}</div>
      <img className={classes.img} src={product.image} alt='' />
      <div className={classes.price}>Цена: {product.price}</div>

      <button onClick={() => navigate(`/products/${product.id}`)}>
        Подробнее
      </button>
    </div>
  )
}

export default Card
