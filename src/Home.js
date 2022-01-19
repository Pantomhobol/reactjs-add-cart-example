import React, { useContext} from 'react';
import Product from './Product';
import Cart from './Cart';
import { ProductContext, ProductProvider, CartContext, CartProvider } from './context/AppContext'

const ProductsElementHTML = () => {
    const  products  = useContext(ProductContext);
    const  cart = useContext(CartContext);
    return (
        <div>
        <h1 className='text-center mt-3'> { products.product_name } List Products</h1>
            <section className="py-4 container">
                <div className='row justify-content-center'>
                    { products.map((prod, index) => {
                        return (
                            
                            <Product
                            url={prod.url} 
                            product_name={prod.product_name} 
                            price={prod.price} 
                            description={prod.description}
                            key={index}
                            prod={prod}
                            cart={cart}
                            />
                            
                            )
                        }
                    )}
                </div>
            </section>
        </div>
    )
}


const CartElementHTML = () => {
    const  cart = useContext(CartContext);
        return (
            <div>
                { cart.cart.length > 0 ? // jika cart kosong, maka tidak menampilkan header cart
                     (
                    <div className="title">
                        <div className="row">
                            <div className="col">
                                <h4><b>Cart</b></h4>
                                <br/>
                            </div>
                            <div className="col align-self-center text-right text-muted">{cart.cart.length} items</div>
                        </div>
                    </div> 
                    ) : null
                    }
                {
                cart.cart.map((prod, index) => {
                    return (
                        <Cart 
                        id={prod.id}
                        url={prod.url} 
                        product_name={prod.product_name} 
                        price={prod.price} 
                        description={prod.description}
                        total_item = {cart.cart.length}
                        quantity = {prod.quantity}
                        key={index}
                        prod={prod}
                        cart={cart}
                        
                        />
                    )
                }
                )}
            </div>
        
    )
}

function Home() {
    return (
    <div>
        <ProductProvider>
            <CartProvider>
                <ProductsElementHTML />
                <CartElementHTML />
            </CartProvider>
        </ProductProvider>
    </div>
    )
}

export default Home
