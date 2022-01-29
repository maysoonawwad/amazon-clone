import React, { useState } from 'react'
import "./product.css"
import { useStateValue } from './StateProvider';
function Product({id , title , price , rating , image}) {
  const [{} , dispatch] = useStateValue();
    //const [item , setItem] = useState ();
    const addToBasket = () =>{
    //add item 
    dispatch({
      type:'ADD-TO-BASKET' ,
      item: {
          id: id,
          title :title,
          price:price,
          image: image,
          rating:rating,
      } ,
    });

    };
  
    return (
        <div className="product">
        <div className="product_info">
        <p>{title}</p>
            <p className="product__">
            <small>$</small>
            <strong>{price}</strong>
            </p>

            <div className="product_rating">
                { Array(rating).fill().map((_)=>(
                    <p>⭐</p>
                ))  }
            </div>
             </div>
            <img src={image} alt="" />
            <button onClick={addToBasket} >Add to basket</button>

        </div>
    )
}

export default Product
