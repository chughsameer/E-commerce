import React from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'

const ProductDisplay = (props) => {
    const {product} = props;
  return (
    <div className="productdisplay">
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image}/>
                <img src={product.image}/>
                <img src={product.image}/>
                <img src={product.image}/>
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img ' src={product.image}/>
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-stars">
                <img src={star_icon} />
                <img src={star_icon} />
                <img src={star_icon} />
                <img src={star_icon} />
                <img src={star_dull_icon} />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">${product.old_price}</div>
                <div className="productdisplay-right-price-new">${product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti asperiores eius hic, modi porro sunt impedit dolores tempore dolor nemo mollitia nisi inventore sed commodi et veniam aut ex quae aspernatur doloremque ipsa suscipit placeat totam quasi. Nemo dolorum provident cumque sed accusantium culpa earum magnam fugiat soluta expedita! Facere.
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button>Add to Cart</button>
            <p className="productdisplay-right-category"><span>Category :</span> Women, T-shirt, Crop Top</p>
            <p className="productdisplay-right-category"><span>Tags :</span> Modern, Latest</p>
        </div>
    </div>
  )
}

export default ProductDisplay
