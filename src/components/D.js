import React, { useContext } from "react";
import { usercon } from "../App";
function D(){
    const dispatch=useContext(usercon).f1
    return(
        <div>
            B :<button onClick={()=>dispatch({choice:"inc"})}>Inc</button>
            <button onClick={()=>dispatch({choice:"dec"})}>Dec</button>
            <button onClick={()=>dispatch({choice:"reset"})}>Reset</button>
        </div>
    )
}

export default D;