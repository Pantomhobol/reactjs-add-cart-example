import React from 'react'

const Product = (props) => {
    const addToCart = props.cart.addToCart
    return (
        <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
            <div className="card p-0 onverflow-hidden h-100 shadow">
                <img src={props.url} className="p-5 card-img-top img-fluid" alt={props.title} />
                <div className="card-body">
                    <h3 className="card-title">{props.product_name}</h3>
                    <h4 className="card-text">{props.price}</h4>
                    <p className="card-text">{props.description}</p>
                    <button
                     onClick={()=>addToCart(props.prod)}
                    className="btn btn-primary">Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Product
