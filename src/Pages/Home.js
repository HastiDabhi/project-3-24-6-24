import React, { useState } from 'react';
import Productcard from './Productcard';
import products from '../fakedata/Data';

const Home = () => {
  const [newarrival, setAllproduct] = useState(products);

  const updateproduct = (id, updateproduct) => {
    setAllproduct(newarrival.map(product => 
      product.id === id ? { ...product, ...updateproduct } : product
    ));
  };
 return (
    <>
      <section className='container-fluid'>
        <div className='row mt-4'>
          {newarrival.map((item) => (
            <div className='col-lg-4 col-md-4 col-sm-4 mt-3' key={item.id}>
              <Productcard items={item} updateproduct={updateproduct}></Productcard>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
