import React from 'react'
import { useCart } from 'react-use-cart'

const Product = (props) => {
    const { addItem } = useCart();
    return (
        <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
            <div className="card p-0 onverflow-hidden h-100 shadow">
                <img src={props.url} className="p-5 card-img-top img-fluid" alt={props.title} />
                <div className="card-body">
                    <h5 className="card-title">{ props.title}</h5>
                    <p className="card-text">{props.price }</p>
                    <p className="card-text">{props.description }</p>
                    <button
                    onClick={()=> addItem(props.item,1)}
                    className="btn btn-primary">Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Product
