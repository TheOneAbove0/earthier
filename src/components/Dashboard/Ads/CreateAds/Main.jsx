import React from 'react'
import Images from './Images'
import Status from './Status'

export default function Main() {
  return (
    <div className=' flex gap-4 '>
        <Images />
        <Status />
    </div>
  )
}
