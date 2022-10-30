import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '~/pages/Cart'
import Category from '~/pages/Category'
import Detail from '~/pages/Detail'
import Events from '~/pages/Events'
import Home from '~/pages/Home'
import SearchResult from '~/pages/SearchResult'

function Router() {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/:catalog" element={<Category/>} />
        <Route path="/:catalog/:product" element={<Detail/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/events/:events" element={<Events/>} />
        <Route path="/search/q=:keyword" element={<SearchResult/>} />
    </Routes>
  )
}

export default Router