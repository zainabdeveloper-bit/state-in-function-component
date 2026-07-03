import React, {useState} from "react";
function StateInFuncComponent(){
    // const [name, setName]= useState("ZAINAB ");
    const [name, setName]= useState(0);
    function updateName(){
        // setName("I'M GIRL");
        setName(name+1);
    
    }

   console.log("Rendering")
    return(
        <div>
            <h2>{name}</h2>
            <button onClick={updateName}>Click Me</button>
        </div>
    )

}
export default StateInFuncComponent;