import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, Search, Library, Upload, Profile, AlbumDetails } from '../pages'

const MainBody = () => {
  return (
    <section className=''>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/library" element={<Library />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/Album/:id" element={<AlbumDetails />} />
        </Routes>
    </section>
  )
}

export default MainBody