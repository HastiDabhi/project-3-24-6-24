import React from 'react'
// import { Link }  from 'react-router-dom'

const Header = () => {
  return (
    <>
       <section className='container-fluid'>
          <div className='row'>
             <div className='col-lg-4 col-md-4 col-sm-4'></div>
               <div className='col-lg-4 col-md-4 col-sm-4'>
                  <nav className="navbar navbar-expand-lg navbar-light mt-3">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/link">Link</a>
                            </li>

                            <li className="nav-item">
                            <a className="nav-link" href="/product">Product</a>
                            </li>
                        
                        
                        </ul>
                    </div>
                    </div>
                    </nav>
                  <div className='col-lg-4 col-md-4 col-sm-4'></div>

             </div>
          </div>
       </section>
    </>
  )
}

export default Header