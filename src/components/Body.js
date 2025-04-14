import RestaurantCard ,{withPromotedLabel} from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState, useEffect,useContext } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"; 
// import UserContext from "../utils/UserContext";
import { createContext } from "react";



const Body=()=>{
    // const restaurant=[];
    // for(let i=0;i<resObj.length;i++){
    //     restaurant.push(<RestaurantCard key={i} resData={resObj[i]}/>);
    // }

    const UserContext = createContext({
      loggedInUser: "Default User",
  })
    const [resObjlist, setresobj]=useState([]);
    const [filterlist,setfilterlist]=useState([]);
    const [searchText,setsearchText ]=useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)

    const {loggedInUser,setUserName}=useContext(UserContext)

    console.log("body renderd", resObjlist)

    useEffect(()=>{
        console.log("use effect called")
        fetchData();
     },[]);

     const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.2958104&lng=76.6393805&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
     const json = await data.json();
    //  console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
     setresobj(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
     setfilterlist(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    // if (resObjlist.length===0)
    // {
    //     return <Shimmer/>
    // }

    const onlineStatus = useOnlineStatus();

    console.log("ONLINE OFFLINE "+onlineStatus)

    if(onlineStatus===false)
      return(
    <h1>
      Looks like you are offline , please check network internet connection;
    </h1>
      )

       return resObjlist.length===0 ? (<Shimmer/>):(
       <div className="body">
        <div className="fliter flex">
            <div className=" search m-4 p-4">
                <input className="border border-solid border-black" value={searchText} onChange={(e)=>{setsearchText(e.target.value)}}></input>
                <button className="px-4 py-1 bg-green-100 m-4 rounded-2xl" onClick={()=>{
                    // console.log(resObjlist.name)
                    const searchtext=resObjlist.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                   

                    resObjlist.length===0? <h1>No restaurant</h1>:setfilterlist(searchtext);
                    
                }}>Search</button>
            </div>

            <div className=" toprated  m-4 p-4 flex items-center ">
            <button className="filter-btn px-4 py-1 bg-gray-100 rounded-2xl" onClick={()=>
            {
               const resObjset=resObjlist.filter((res)=>res.info.avgRating >4);
                console.log(resObjset);
                setfilterlist(resObjset);
                }}>Top Rated Restaurant</button>
                <label className="m-5">Username:</label>
                <input className="border border-black"  value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}></input>
            </div>

            
            
        </div>
        <div className="res-container flex flex-wrap">
          {
            filterlist.map((res)=>(
              <Link key={res.info.id} to={"/restaurant/"+res.info.id}> 
              
              {
                res.info.isOpen ? <RestaurantCardPromoted resData={res}/>:<RestaurantCard  resData={res}/>

              }
               
    </Link>
            ))
          }
    {/*        
           {
            restaurant 
           } */}
           
        </div>
    </div>) 
    }

    export default Body;