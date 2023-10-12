import React from 'react'
import Quality from './Quality'
import Pricing from './Pricing'

export default function QualityPricing({DisplayHandler, display}) {
  return (
    <div className='flex gap-4 '>
        <Quality />
        <Pricing DisplayHandler={DisplayHandler} display={display} />
    </div>
  )
}
