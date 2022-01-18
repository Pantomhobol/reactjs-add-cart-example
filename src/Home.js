import React, { useContext} from 'react';
import Product from './Product';
import { ProductContext, ProductProvider } from './context/Product'
//import data from './data.js';

const ProductsElementHTML = () => {
    const { products } = useContext(ProductContext);
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
                            />
                            )
                        }
                    )}
                </div>
            </section>
        </div>
    )
}
function Home() {
    
    return (
        <div>
            <ProductProvider>
                <ProductsElementHTML />
            </ProductProvider>
        </div>
    )
}

export default Home
