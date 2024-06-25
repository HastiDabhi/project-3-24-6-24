import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from '../Pages/Home'
import Link from '../Pages/Link'
import Product from '../Pages/Product'
import Productdetails from '../Pages/Productdetails'

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element ={<Home></Home>}></Route>
          <Route path='/allproduct/:id' element={<Productdetails></Productdetails>}></Route>
          <Route path='/link' element ={<Link></Link>}></Route>
          <Route path='/product' element ={<Product></Product>}></Route>


        </Routes>
      </BrowserRouter> 
    </>
  )
}

export default Router