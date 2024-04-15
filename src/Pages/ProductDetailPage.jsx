// @ts-nocheck
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import classes from './ProductDetailPage.module.css'
const ProductDetailPage = () => {
  const param = useParams()
  const [product, setProduct] = useState({})
  const getProduct = async () => {
    const response = await axios.get(
      `https://fakestoreapi.com/products/${param.id}`
    )
    console.log('Полученная информация: ', response.data.rating)
    setProduct(response.data)
  }

  useEffect(() => {
    getProduct()
  }, [])
  return (
    <div className={classes.page}>
      <div className={classes.category}>{product.category}</div>
      <div className={classes.title}>{product.title}</div>
      <img className={classes.image} src={product.image} alt='' />
      <div className={classes.descript}>{product.description}</div>
      {/* <div className={classes.count}>В наличии: {product.rating.count}</div>
      <div className={classes.rating}>
        Рейтинг товара: {product.rating.rate}
      </div> */}
    </div>
  )
}

export default ProductDetailPage
