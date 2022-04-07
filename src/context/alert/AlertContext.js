import { useReducer, createContext} from "react";
import AlertReducer from "./AlertReducer";

const AlertContext = createContext()

export const AlertProvider=({children})=>{

    const initialState = [];

    const [state , dispatch] = useReducer(AlertReducer , initialState)

    const setAlert = (msg,type)=>{

        dispatch({
            type:'SET-ALERT',
            payload:{msg, type}
        })

        setTimeout(()=>{
            dispatch({type:'REMOVE-ALERT'})
            console.log("timeout")
        } , 3000)

    }

    return (<AlertContext.Provider value={{alert:state , setAlert}}>{children}</AlertContext.Provider>)

}

export default AlertContext


