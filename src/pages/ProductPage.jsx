import React from 'react'
import { useParams } from 'react-router-dom'

function ProductPage() {
    const params = useParams()
    console.log(params);
  return (
    <div>ProductPage</div>
  )
}

export default ProductPage