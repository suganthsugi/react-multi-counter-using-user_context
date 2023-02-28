import React, { useContext } from "react";
import { usercon } from "../App";
function F(){
    const dispatch=useContext(usercon)
    return(
        <div>
            A : 
            <button onClick={()=>dispatch({choice:"inc"})}>Inc</button>
            <button onClick={()=>dispatch({choice:"dec"})}>Dec</button>
            <button onClick={()=>dispatch({choice:"reset"})}>Reset</button>
        </div>
    )
}

export default F;