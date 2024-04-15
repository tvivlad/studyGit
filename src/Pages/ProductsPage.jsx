import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SelectCategory from '../components/SelectCategory'
import ProductList from '../components/ProductList'

const ProductsPage = () => {
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState('')
  const getProducts = async () => {
    const response = await axios.get(
      `https://fakestoreapi.com/products${category}`
    )
    console.log('Полученные данные:', response)
    setProducts(response.data)
  }
  useEffect(() => {
    getProducts()
  }, [category])
  return (
    <div>
      {' '}
      <SelectCategory
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      />
      <ProductList products={products} />
    </div>
  )
}

export default ProductsPage
