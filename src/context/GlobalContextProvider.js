import React,{createContext} from "react";
export const Global = createContext()
const GlobalContextProvider =(props)=>{
    const student = {
        firstname: 'Jen',
        lastname: 'Gurung',
        language: 'React Js'
    }
    return(

        <Global.Provider value={student}>
           {props.children}
        </Global.Provider>
    )
}
export default GlobalContextProvider