import React from 'react'
import RevenueCard from './RevenueCard'
import DataChart from './DataChart'
import SellingProduct from './SellingProduct'

export default function HomePage() {
  return (
    <div className=' bg-LightGrey w-full '>
      <RevenueCard />
      <DataChart />
      <SellingProduct />
    </div>
  )
}
