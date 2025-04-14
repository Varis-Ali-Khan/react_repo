import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import{ MENU_URL} from "../utils/constants"
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu =()=>
{

    
    const{resId}=useParams();

    const resInfo = useRestaurantMenu(resId)

    const [showIndex, setShowIndex]=useState(1);
    

//     useEffect(()=>{
//    fetchMenu();
//     },[]);

// const fetchMenu =async ()=>
// {
//     const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.2958104&lng=76.6393805&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER")
//     const json= await data.json();

//     console.log(json)
//     setresInfo(json.data)
// }

if(resInfo===null) return (<Shimmer/>);
    const {name,cuisines,costForTwoMessage,cloudinaryImageId}=resInfo?.cards[2]?.card?.card?.info;

    const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
//    console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

   const categories =resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((res)=>res.card?.card?.["@type"] ==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
//    console.log(categories)
return (
        <div className="menu  text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(",")}- {costForTwoMessage}</p>
            {/* <h2>Menu</h2> */}
            {categories.map((categories,index)=><><RestaurantCategory key={categories?.card?.title} data={categories?.card?.card} ShowItems={index=== showIndex ? true: false}
            setShowIndex={()=>setShowIndex(index)}
            /></>)}
            {/* <ul>
            {itemCards.map((res)=>(<li key={res.card.info.id}>{res.card.info.name} - Rs.{res.card.info.price/100} </li>))}
                
            </ul> */}
        </div>
    )
}

export default RestaurantMenu;