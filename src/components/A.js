import React, { useContext } from "react";
import { usercon } from "../App";
function A(){
    const dispatch=useContext(usercon).f1
    const myname=useContext(usercon).name
    const t = `my name is ${myname}`
    return(
        <div>
            {t}
            <br />
            <br />
            A :<button onClick={()=>dispatch({choice:"inc"})}>Inc</button>
            <button onClick={()=>dispatch({choice:"dec"})}>Dec</button>
            <button onClick={()=>dispatch({choice:"reset"})}>Reset</button>
        </div>
    )
}

export default A;