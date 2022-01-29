import React from 'react'
import "./checkout.css"
import CheckoutProduct from "./CheckoutProduct"
import {useStateValue} from "./StateProvider"


function Checkout() {
    const [{basket}] = useStateValue();
    return (
        <div className="checout">
        <div className="checkout_left">
            <img className = "checkout_img" src="https://images-na.ssl-images-amazon.com/images/G/01/digital/adrive/images/2021/FDAY/APH_FDAY-21_hero_dt-tall_EN._TTH_.jpg"

            />
      
        {basket?.length === 0 ? (
            <div>
            <h1>Your Shopping Basket is empty</h1>
            </div>
        ) : (
            <div> 
            <h2 className="checkout_title"> Your Shopping Basket</h2>
              {basket.map(item =>(
                <CheckoutProduct 
                id={item.id}
                title= {item.title}
                image= {item.image}
                price= {item.price}
                rating = {item.rating}
                 />
              ))}

            </div>
        )}
       
        </div>
       
        </div>
    );
}

export default Checkout
