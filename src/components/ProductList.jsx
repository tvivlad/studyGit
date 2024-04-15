import React from 'react'
import Card from './Card'

const ProductList = ({ products }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductList
