import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";
import UserContext from "../utils/UserContext";



class About extends Component{

    constructor(props)
    {
        super(props)

    }
    render()
    {
        return (
<div>
            <h1>About</h1>
            <h2>
                varis ali khan
            </h2>
            <UserContext.Consumer>
{({loggedInUser}) => (<h1>{loggedInUser}</h1>)}
            </UserContext.Consumer>
        <div>
            <User name={"alisha (function)"}/>
            <UserClass  name={"alisha (class)"}/>
        </div>
        </div>
        )
    }
}



// const About=()=>
// {
//     return(
        
//     )
        
    
// }

export default About;