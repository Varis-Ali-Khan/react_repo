import { useState } from "react"
import ItemList from "./ItemList"
const RestaurantCategory =({data,ShowItems,setShowIndex})=>
{
    const length=data.itemCards.length
    const dataa=data.title
    // const dataaa=props
    const items=data.itemCards
    let show =ShowItems

    // const [showItem,setShowItem]=useState(false)

    const HandleClick=()=>
    {
        // showItem? setShowItem(false):setShowItem(true)
        // setShowItem(!showItem)
        setShowIndex();
    }
  
    return(
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
            <div className="flex justify-between cursor-pointer" onClick={HandleClick}>
            <spam className="font-bold">{dataa} ({length})</spam>
            <spam>^</spam>
            </div>
           { ShowItems && <ItemList item={items}/>}
            </div>
           
        </div>
    )
}

export default RestaurantCategory;