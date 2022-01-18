import React from 'react'
import iphone from './images/iphone.jpg'

function Cart() {
    
    // if (isEmpty) return <p>Your cart is empty</p>;
    return (
        <div>
            <div className="card">
                <div className="row">
                    <div className="col-md-8 cart">
                        <div className="title">
                            <div className="row">
                                <div className="col">
                                    <h4><b>Shopping Cart</b></h4>
                                    <br/>
                                </div>
                                <div className="col align-self-center text-right text-muted">3 items</div>
                            </div>
                        </div>
                        <div className="row border-top border-bottom">
                            <div className="row main align-items-center">
                                <div className="col-2">
                                    <img className="img-fluid" src={ iphone } alt={iphone} />
                                </div>
                                <div className="col">
                                    <div className="row text-muted">Iphone</div>
                                    <div className="row">Iphone 12 Pro</div>
                                </div>
                                <div className="col"> <button>-</button>1<button href="#">+</button> </div>
                                <div className="col">$ 44.00 <span className="close">&#10005;</span></div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Cart
