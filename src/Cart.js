import React from 'react'

function Cart(props) { 
    return (
        <div>
            <div className="card">
                <div className="row">
                    <div className="col-md-8 cart className='mb-4'">
                        <input type="hidden" id="key" name="key" value={props.cart.key} />
                        <div className="row border-top border-bottom">
                            <div className="row main align-items-center">
                                <div className="col-2">
                                    <img className="img-fluid" src={ props.url } alt={props.url} />
                                </div>
                                <div className="col">
                                    <div className="row text-muted">{ props.product_name }</div>
                                </div>
                                <div className="col"> <button onClick={()=>props.cart.decrementQuantity(props.id)}>-</button>{props.quantity}<button onClick={()=>props.cart.incrementQuantity(props.id)}>+</button> </div>
                                <div className="col">${ props.price } = ${ props.price*props.quantity} <button className="btn btn-primary" onClick={()=>props.cart.removeFromCart(props.id)}>delete</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
