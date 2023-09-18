import React from 'react'
import { useLocation } from 'react-router-dom'

const AlbumDetails = () => {
  const { state } = useLocation();
  console.log(state)
  return (
    <div className=''>AlbumDetails</div>
  )
}

export default AlbumDetails