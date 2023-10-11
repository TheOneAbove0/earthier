import React from 'react'
import ProductVariants from './ProductVariants/ProductVariants'
import CurrentVariants from './CurrentVariants/CurrentVariants'

export default function Variants() {
  return (
    <div className=' flex flex-col gap-4 '>
        <ProductVariants />
        <CurrentVariants />
    </div>
  )
}
