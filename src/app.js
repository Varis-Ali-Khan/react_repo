import React ,{lazy,Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider ,Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
// import Grocery from "./components/Grocery";
import Grocery from "./components/Grocery";
import folderss from "./components/folders"



const Grocery =lazy(()=> import("./components/Grocery"))

const AppLayout=()=>{


const [userName,setUserName]=useState("")


// const heading =React.createElement("h1",{id:'heading'},"varis from react")
// const root =ReactDOM.createRoot(document.getElementById("root"))

// root.render(heading)
console.log("scdfdvdv"+7<'15'<7)

useEffect(()=>{
    const data={
        name:"varis"
    }
    setUserName(data.name)
},[])




    return (
        <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
    <div className="app">
    
     <Header/>
    
     {/* <Body/> */}
     <Outlet/>
    </div>
    </UserContext.Provider>
    </Provider>
    )

}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children:[
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
        
            },
            {
                path: "/contact",
                element: <Contact />
        
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading.........</h1>}><Grocery folderss={folderss} /></Suspense>
            },
            {
                path: "/cart",
                element: <Cart />
            }

        ],
        errorElement : <Error/>
    },
    
])

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider  router={appRouter}/>)