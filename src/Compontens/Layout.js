import React from 'react'
import Header from './Header'
import Router from '../Routes/Router'

const Layout = () => {
  return (
    <>
       <Header></Header>
       <div>
         <Router></Router>
       </div>
    </>
)
}

export default Layout