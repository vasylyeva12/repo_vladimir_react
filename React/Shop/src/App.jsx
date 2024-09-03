import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import HomePage from '@/pages/Home/Home'
import ProductPage from '@/pages/Product/Product'
import ProductsPage from '@/pages/Products/Products'
import CartPage from '@/pages/Cart/Cart'
import Layout from '@/components/Layout/Layout'
import { useDispatch } from 'react-redux'
import { fetchProducts, getProductFromLocalStorage } from '@/store/futures/productSlice'
import Authentication from '@/pages/Authentication/Authentication'
import Todo from './pages/Todo/Todo'
import { getFavouriteFromLocalStorage } from './store/futures/productSlice'

const App = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchProducts());
    dispatch(getProductFromLocalStorage());
    dispatch(getFavouriteFromLocalStorage());
  },[])

  
  return (
    <>

      <Routes>
          <Route path='/' element={<Layout />}>
              <Route index element={<HomePage/>}/>
              <Route path='products' element={<ProductsPage />}/>
              <Route path='products/:productId' element={<ProductPage />}/>
              <Route path='cart' element={<CartPage />}/>
              <Route path='authentication' element={<Authentication />}/>
              <Route path='todo' element={<Todo />}/>
          </Route>
      </Routes>
    </>
  )
}

export default App