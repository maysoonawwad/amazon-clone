import React from 'react'
import "./checkoutproduct.css"
import { useStateValue } from './StateProvider'
function CheckoutProduct({id , title , price , rating , image}) {
   const [{basket} , dispatch] = useStateValue ();
   
    const removeFromBasket = () =>{
        // remove item from basket
        dispatch({
            type:"REMOVE-FROM-BASKET",
            id:id,

        });
    }
    return (
        <div className="checkoutproduct">
            <img className="checkout_image" src={image} />
            <div className="checkout_info">
             <p className="checkoutproduct_title">{title}</p>
               <p className="checkout_price">
               <small>$</small>
            <strong>{price}</strong>
               </p>
               <div className="checkout_rating">
                { Array(rating).fill().map((_)=>(
                    <p>⭐</p>
                ))  }
            </div>
            <button onClick={removeFromBasket} > Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
