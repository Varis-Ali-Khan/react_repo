import React from "react"
import User from "./User"
import { useState } from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component{
constructor(props)
{
    super(props);
    console.log(props)
    this.state={
userInfo:{
    login: "Dummy",
    user_view_type
: "Default Location"
}
    }

}


async componentDidMount()
{
    console.log("component did mount")
const data = await fetch("https://api.github.com/users/varis-ali-khan");
const json = await data.json();
console.log(json);

this.setState({
    userInfo:json
})

}


    render() {
        const {count}=this.state
        const {login,user_view_type,avatar_url

        }=this.state.userInfo
        return (
            <div className="user-card">
                <img src={avatar_url
}></img>
            <h2>Name: {login}</h2>
            
            <button onClick={()=>{


console.log("button clicked")
            }}>button</button>
            {/* <h2>Count:  {count}</h2> */}
            <h3>Location:{ user_view_type
            }</h3>
            <h4>Contact: khankhan</h4>
        </div>
        )
    }
}

export default UserClass;