import { useState } from "react";

const Grocery =({folderss})=>
{

    const [showRoot,setShowRoot]=useState(false)
    if(folderss.isFolder){

    
    return (
        <div>
            {/* <h1> Our grocery online store , and we have lot of  child </h1> */}
           <div onClick={()=>{
            setShowRoot(!showRoot)
            
           }}><spam >{folderss.name}</spam></div> 

            <div style={{display:showRoot?"block":"none",padding:15}}>
                
                    {folderss.items.map((res)=>{
                        return <Grocery folderss={res} />
                    })}
               
            </div>
        </div>
       
    )
}else{
return <span>{folderss.name}<br></br></span>
}
}

export default Grocery;