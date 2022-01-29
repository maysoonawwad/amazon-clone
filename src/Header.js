import React from 'react'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { Link } from 'react-router-dom'
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import "./Header.css"
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
function Header() {

  const [{basket , user} , dispatch] = useStateValue ();
  console.log(basket);
const login= () => {
  if (user){
    auth.signOut();
  }
}

    return (
        <div className="header">
       <Link to="/">
        <img className="header_logo" src="https://www.mabaya.com/wp-content/uploads/2019/10/amazon_PNG25.png" />
        </Link>
        <div className="searchbar">
        <input className="header_input" type="text"/>
          <SearchOutlinedIcon className="header_searchicon"/>
       </div>
       
           
            <div className="header_nav">

            <Link to={!user && "/login"} className="header_link">
            <div onClick={login} className="header_option">
            <span className="header_optionlineone">hello </span>
              <span className="header_optionlinetwo">{user ?'Sign Out' : 'Sign In'}</span> 
            </div>
             
            </Link>
            <Link to="/" className="header_link">
            <div  className="header_option">
            <span className="header_optionlineone">Returns</span>
              <span className="header_optionlinetwo" > & Order </span> 
            </div>
             
            </Link>
            <Link to="/" className="header_link">
            <div className="header_option">
            <span className="header_optionlineone">Your</span>
              <span className="header_optionlinetwo" >Prime</span> 
            </div>
            </Link>
            <Link to="/checkout" className="header_link">
            <div className="basket">
             <ShoppingBasketOutlinedIcon />
             <span className="header_optionlinetwo basketcount">{basket?.length}</span>
             </div>
             </Link>
           
            </div>
            

        </div>
    )
}

export default Header
