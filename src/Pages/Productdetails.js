import React, { useState } from 'react'
import products from '../fakedata/Data'
import { useParams } from 'react-router-dom'

const Productdetails = () => {
    const { id } = useParams()

    const product = products.find(item => item.id === id)

    const {title, price, category, image01, image02, image03} = product
    const [preImage, setpreImage] = useState(image01);

  return (
    <>
       <section className='container ps-5'>
         <div className='row'>
             <div className='col-lg-2 col-md-4 col-sm-12 mt-5'>
                 <div onClick={()=> setpreImage(image01)}>
                 <img src={image01} alt='' className='img-set rounded-circle'></img>
                 </div>
                 <div onClick={()=> setpreImage(image02)}>
                 <img src={image02} alt='' className='img-set rounded-circle mt-3'></img>
                 </div>
                 <div onClick={()=> setpreImage(image03)}>
                 <img src={image03} alt='' className='img-set rounded-circle mt-3'></img>
                 </div>
             </div>
             <div className='col-lg-4 col-md-4 col-sm-12'>
             <img src={preImage} alt='' className='w-75 mt-4'></img>

             </div>
             <div className='col-lg-6 col-md-4 col-sm-12 align-self-center d-flex ps-5'>
              <div>
              <h2>{title}</h2>
                 <h3 className='text-success'>Price: ${price}</h3>
                 <h5>Category: {category}</h5>
                 <button className='btn btn-success mt-3'>Add to Cart</button>
              </div>

             </div>

         </div>
       </section>
    </>
  )
}

export default Productdetails