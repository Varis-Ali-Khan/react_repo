import {LOGO_URL} from "../utils/constants"
import { useState,useEffect,useContext } from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../utils/UserContext"
import { useSelector } from "react-redux"
// import { useSelector } from "@reduxjs/toolkit";



export const Header=()=>{


    let btnName="Login"
const [btnNameReact,setbtnName]=useState("Login")

const {loggedInUser} = useContext(UserContext)
// console.log(data)


//subscribing to the store

const cartItems =useSelector((store)=>store.cart.items)
// console.log(cartItems)
useEffect(()=>
{
    // console.log("useeffect from header")
},[btnNameReact])

const  onlineStatus = useOnlineStatus();
    return (
    <div className="flex justify-between bg-pink-100 shadow-lg mb-2">
        <div className="logo-container">
            <Link to="/"><img className="w-50" src={LOGO_URL}></img></Link>
        </div>
        <div className="flex items-center ">
            <ul className="flex justify-between p-4 m-4">
            <li className="px-4">
              internet status : {onlineStatus ? "online":"offline"}
                  </li>
             <li className="px-4">
                <Link to="/">Home</Link>
                  </li>
             <li className="px-4"> 
                <Link to="/about">About us</Link>
                </li>
             <li className="px-4">
                 <Link to="/contact">Contact us</Link> 
                 </li>
                 <li className="px-4">
                 <Link to="/grocery">Grocery</Link> 
                 </li>
             <li className="px-4 font-bold text-xl">                  
                <Link to="/cart">Cart - {cartItems.length} items</Link> 
             </li>
            
             <button className="px-4" onClick={()=>{
                btnName="Lagout"
                btnNameReact==="Login"?setbtnName(btnName):setbtnName("Login")
             }}>{btnNameReact}</button>
                <li className="px-4 font-bold">{loggedInUser}</li>
            </ul>
        </div>
    </div>

    )
}

export default Header;