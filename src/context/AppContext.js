import React, { createContext, useState, useEffect} from 'react';
import iphone from '../images/iphone.jpg'
import samsung from '../images/samsung.jpg'
import sony from '../images/sony.jpg'

const ProductContext = createContext();
const CartContext = createContext();

const ProductProvider = (props) => {
    const data = [
        {
            id:1,
            url: iphone,
            product_name: 'Iphone 12',
            price: 100,
            quantity: 1,
            description: 'The iPhone 12 features a 6.1-inch (15 cm) display with Super Retina XDR OLED technology at a resolution of 2532×1170 pixels and a pixel density of about 460 ppi. The iPhone 12 Mini features a 5.4-inch (14 cm) display with the same technology at a resolution of 2340×1080 pixels and a pixel density of about 476 ppi.'
        },
        {
            id:2,
            url: samsung,
            product_name: 'Samsung A52',
            price: 120,
            quantity: 1,
            description: "The Galaxy A52 is a part fo the A series and was launched alongside the Galaxy A72. The new Galaxy A52 has a big 6.5-inch full-HD+ Super AMOLED display with a hole-punch display. It also has a fast 90Hz refresh rate. The build is mainly plastic which isn't the case with its competition."
        },
        {
            id:3,
            url: sony,
            product_name: 'Sony Experia pro-I',
            price: 130,
            quantity: 1,
            description: "Sony Xperia Pro-I ; Features, Zeiss optics, Zeiss T* lens coating, LED flash, panorama, 12-bit RAW, HDR, eye tracking ; Video, 4K@24/25/30/60/120fps HDR, 1080p@30"
        }
    ];
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        setProducts(data);
    }
   
    useEffect(() => {
       getProducts();
    }, [])
    
    return (
    <ProductContext.Provider value={products}>
        {props.children}
    </ProductContext.Provider>
    )
}

const CartProvider = (props) => {
    const [cart, setCart] = useState([]);
    let [key, setKey] = useState(0);
    const addToCart = prod => { 
        if(cart.find(item => item.id === prod.id)) // jika item ada di cart
            incrementQuantity(prod.id)  // maka tambah quantity
        else
            setCart([...cart, prod]); // maka tambah product
    }
    const removeFromCart = id => {
        let temp = cart.filter(prod => prod.id !== id)
        //let new_cart = Object.assign([], temp);
        let new_cart = [...temp]
        setCart(new_cart)
    }
    const incrementQuantity = id => {
        // let product = cart.find(prod => prod.id === id)
        // product.quantity = product.quantity + 1;
        // let new_cart = Object.entries(cart).map((k) => { 

        //     k.id === id ? k.quantity + 1 :  k.quantity}
        //     )
        for (var i in cart) {
            if (cart[i].id === id) {
                cart[i].quantity = cart[i].quantity+1;
                break; 
            }
        }
        key = key+1
        setCart(cart);
        setKey(key)
    }
    const decrementQuantity = id => {
        for (var i in cart) {
            if (cart[i].id === id) {
                if(cart[i].quantity > 1)
                cart[i].quantity = cart[i].quantity-1;
                break; 
            }
        }
        key = key+1
        setCart(cart);
        setKey(key)
    }

    const cartState = {cart, addToCart, removeFromCart, incrementQuantity, decrementQuantity, key}

    return (
        <CartContext.Provider value={cartState}>
            {props.children}
        </CartContext.Provider>
    )
}

export { ProductContext, ProductProvider, CartContext, CartProvider }