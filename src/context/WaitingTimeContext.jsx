import { createContext, useEffect, useState } from "react";
import { getWaitingTime } from "../components/services/api/getWaitingTime";

export const WaitingTimeContext = createContext([]);

export const WaitingTimeProvider = (props) =>{
    const [waitTimes, setWaitTimes] = useState([]);
    const [minimumTime, setMinimumtime] = useState(0);
    const [minimumMenu, setMinimumMenu] = useState("");
  
    useEffect(()=>{
        (async()=>{
        await getWaitingTime(setWaitTimes,setMinimumtime,setMinimumMenu);
        })()
    },[]);

    return(
        <WaitingTimeContext.Provider value={{waitTimes:waitTimes, setWaitTimes:setWaitTimes}}>
            {props.children}
        </WaitingTimeContext.Provider>
    )
}
