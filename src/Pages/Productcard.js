import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Productcard(props) {
  const { updateproduct } = props;
  const { id, title, image01, price } = props.items;
  const [input, setInput] = useState({ title, price });      
  const [view, setview] = useState(0);         
  
  useEffect(() => {
    if (props.items) {
      setInput({ title: props.items.title, price: props.items.price });
    }
  }, [props.items]);

  const handleInputChange = (e) => {
     setInput({...input, [e.target.name]: e.target.value});
  };

  const viewhandler = () => {
     setview(id);
  }

  const handleUpdate = () => {
    updateproduct(id, input);
    setview(id);
  };

  return (
    <div>
      <div className="card text-center product_card" style={{ width: "17rem" }} data-bs-toggle="modal" data-bs-target={`#mymodal${id}`}>
        <Link to={`/allproduct/${id}`}>
          <img src={image01} className="img-fluid" alt={title} />
        </Link>
        <div className="card-body">
          <img src='assets/img/star.jpg' alt='star' className='img-fluid w-50' />
          <Link to={`/allproduct/${id}`}>
            <h6 className='card-title mt-3'>{title}</h6>
          </Link>
          <div className='mt-2 card-text'>
            <span className='span-color fs-4' data-bs-toggle="modal" data-bs-target={`#mymodal${id}`}>${price}</span>
            <button
              type="button"
              className="btn-color btn ms-5 p-2 border home-btn-color text-light"
              data-bs-toggle="modal"
              data-bs-target={`#mymodal${id}`}
              onClick={viewhandler}
            >
              Add to cart
            </button>

             <div className="modal fade" id={`mymodal${id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                       <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Update Product</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <div>
                      <label>Product Name Update: </label>
                      <input
                        placeholder='Enter name'
                        name='title'
                        value={input.title}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className='mt-3'>
                      <label>Product Price Update: </label>
                      <input
                        placeholder='Enter price'
                        name='price'
                        value={input.price}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" onClick={handleUpdate}>Update</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
