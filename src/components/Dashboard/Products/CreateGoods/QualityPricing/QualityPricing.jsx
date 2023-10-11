import React from 'react'
import Quality from './Quality'
import Pricing from './Pricing'

export default function QualityPricing() {
  return (
    <div className='flex gap-4 '>
        <Quality />
        <Pricing />
    </div>
  )
}
