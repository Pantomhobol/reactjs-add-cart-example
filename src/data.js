import iphone from './images/iphone.jpg'
import samsung from './images/samsung.jpg'
import sony from './images/sony.jpg'

const products = [
    {
        id:1,
        url: iphone,
        product_name: 'Iphone 12',
        price: '$ 100',
        description: 'The iPhone 12 features a 6.1-inch (15 cm) display with Super Retina XDR OLED technology at a resolution of 2532×1170 pixels and a pixel density of about 460 ppi. The iPhone 12 Mini features a 5.4-inch (14 cm) display with the same technology at a resolution of 2340×1080 pixels and a pixel density of about 476 ppi.'
    },
    {
        id:1,
        url: samsung,
        product_name: 'Samsung A52',
        price: '$ 120',
        description: "The Galaxy A52 is a part fo the A series and was launched alongside the Galaxy A72. The new Galaxy A52 has a big 6.5-inch full-HD+ Super AMOLED display with a hole-punch display. It also has a fast 90Hz refresh rate. The build is mainly plastic which isn't the case with its competition."
    },
    {
        id:1,
        url: sony,
        product_name: 'Sony Experia pro',
        price: '$ 130',
        description: "Sony Xperia Pro-I ; Features, Zeiss optics, Zeiss T* lens coating, LED flash, panorama, 12-bit RAW, HDR, eye tracking ; Video, 4K@24/25/30/60/120fps HDR, 1080p@30"
    }
]

export default products;