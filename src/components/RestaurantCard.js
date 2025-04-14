import {CDN_URL} from "../utils/constants"
import { useContext } from "react"
import UserContext from "../utils/UserContext"

const RestaurantCard=(props)=>
    {
        const {resData}=props
        const{name,cuisines,avgRating,costForTwo,cloudinaryImageId}=resData?.info
        const{deliveryTime}=resData?.info?.sla
        const {loggedInUser}=useContext(UserContext)
    
        return (
            <div className="res-card m-4 p-4 w-[230px] rounded-lg bg-gray-100 hover:bg-gray-400" >
                <img 
               className="res-log rounded-lg" alt="res-logo" src={CDN_URL+cloudinaryImageId}></img>
                    <h3 className="font-bold py-4 text-lg">{name}</h3>
                    <h4  className="flex flex-wrap" >{cuisines.join(",")}</h4>
                    <h4>{avgRating} star</h4>
                    <h4>{costForTwo }</h4>
                    <h4>{deliveryTime} minutes</h4>
                    <h4>user : {loggedInUser} </h4>
            </div>
        )
    }

    //Hiher order component

    // inpusts restrocard and output => restaurantcardpromoted


    export const withPromotedLabel =(RestaurantCard)=>{
        return (props)=>
        {
            return (
                <div>
                    <label className="absolute bg-black text-white m-1 p-2 rounded-lg">Promoted</label>
                    <RestaurantCard {...props}/>
                </div>
            )
        }
    }

    export default RestaurantCard;