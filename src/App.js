import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './components/Card'
import ProductList from './components/ProductList'
import SelectCategory from './components/SelectCategory'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './Pages/MainPage'
import ProductsPage from './Pages/ProductsPage'
import About from './Pages/About'
import NavBar from './components/NavBar'
import ProductDetailPage from './Pages/ProductDetailPage'
import AuthorizationPage from './Pages/AuthorizationPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/main' element={<MainPage />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/products/:id' element={<ProductDetailPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/authorization' element={<AuthorizationPage />} />
          <Route path='*' element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
