import React from 'react'
import "./Banner.css"
import Product from "./Product"

function Banner() {
    return (
        <div className="banner">
         <img className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />
           <div className="home_row">
           <Product
           id="456"
           title="The Premonition: A Pandemic Story Hardcover – May 4, 2021"
           price="18.00"
           rating = {4}
           image= "https://images-na.ssl-images-amazon.com/images/I/41+2DiWeWAS._SY344_BO1,204,203,200_.jpg"
           
            />
             <Product
           id="147"
           title="SAMSUNG 32-inch Class LED Smart FHD TV 1080P (UN32N5300AFXZA, 2018 Model)"
           price="238.00"
           rating = {5}
           image= "https://m.media-amazon.com/images/I/91UsHjAPTlL._AC_UL480_FMwebp_QL65_.jpg"
           
            />
            </div>
            <div className="home_row">

            <Product
           id="123"
           title="2 Pack Color Blindness Glasses for Men/Color Blind Corrective Glasses for Red-Green and Blue Blindness"
           price="139.91"
           rating = {3}
           image= "https://m.media-amazon.com/images/I/61K5Q3ZA5lL._AC_UL480_FMwebp_QL65_.jpg"
            />
             <Product
           id="789"
           title="The Premonition: A Pandemic Story Hardcover – May 4, 2021"
           price="18.00"
           rating = {4}
           image= "https://images-na.ssl-images-amazon.com/images/I/41+2DiWeWAS._SY344_BO1,204,203,200_.jpg"
           
            />
             <Product
           id="852"
           title="SAMSUNG 32-inch Class LED Smart FHD TV 1080P (UN32N5300AFXZA, 2018 Model)"
           price="238.00"
           rating = {5}
           image= "https://m.media-amazon.com/images/I/91UsHjAPTlL._AC_UL480_FMwebp_QL65_.jpg"
           
            />
            </div>
        </div>
    )
}

export default Banner
//https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Launches/Arabic/Fuji_TallHero_Arabic_Language_en_US_1x._CB424660381_.jpg