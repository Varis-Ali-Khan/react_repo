// const heading= React.createElement("h1",{id:"heading"},"React From It")
import React from "react";
import ReactDOM from "react-dom/client";

// const parent= React.createElement("div",{id:"parent"},
//               [React.createElement("div",{id:"child"},
//               [React.createElement("h1",{id:"h1"},"H1 tag here "),React.createElement("h2",{id:"h1"},"H2 tag here ")]
//               ),
//               React.createElement("div",{id:"child2"},
//                 [React.createElement("h1",{id:"h1"},"H1 tag here "),React.createElement("h2",{id:"h1"},"H2 tag here updated ")]
//                 )]
// )



// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent)

//react syntax
const heading=React.createElement("h1",{id:"heading"},"varis ali khan");

//jsx syntax
const Jsxheadind= ()=>(<div>
    <h1>varis from jsx</h1>
</div>);


//functional component

const HeadingComponent=()=>{
    return <h1>varis from functional component</h1>
};

const number=100000;
const HeadingComponent2=()=>(
<div><Jsxheadind/>
<h2>{number}</h2>
<h1>varis from functional component without return</h1></div>);

const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent/>)
root.render(<HeadingComponent2/>)