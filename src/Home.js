import React from 'react';
import Product from './Product';
import data from './data.js';

function Home() {
    return (
        <div>
            <h1 className='text-center mt-3'> List Products</h1>
            <section className="py-4 container">
                <div className='row justify-content-center'>
                    { data.map((prod, index) => {
                        return (
                            <Product 
                            url={prod.url} 
                            title={prod.title} 
                            price={prod.price} 
                            description={prod.description}
                            key={index}
                            item={[prod]}
                            />
                            )
                        }
                    )}
                </div>
            </section>
        </div>
    )
}

export default Home
