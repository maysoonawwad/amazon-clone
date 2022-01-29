import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,Switch,  Route,} from "react-router-dom";
import Header from "./Header"
import Banner from "./Banner"
import './App.css';
import { StateProvider, useStateValue } from './StateProvider';
import Checkout from "./Checkout"
import Login from "./Login"
import {onAuthStateChanged} from "@firebase/auth"
import { auth } from './firebase';
function App() {
  const [{user} , dispatch] = useStateValue();
  
  // piece of code which runs based on a given condition
  useEffect( () => {
  const unsubscribe =onAuthStateChanged(auth ,authUser=>{
    if(authUser){
    // loged in..
    dispatch ({
      type:"SET_USER",
      user: authUser 
    })
    }else{
    //loged out
    dispatch ({
      type:"SET_USER",
      user: null,
    })
    }
  })
  return () => {
    unsubscribe();
  }
  } , []);
console.log(user);


  

  return (
   
    <Router>
     <div className="app">
     
     <Switch>
      
       <Route path="/checkout">
          <Header />
        <Checkout />
       </Route>
       <Route path="/login">
         <Login />
       </Route>
       <Route path="/">
         <Header />
         <Banner />
       </Route>
     </Switch>
     </div>
    </Router>
   

  );
}

export default App;
