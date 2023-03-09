import React,{createContext, useContext} from "react";

export const data={
    sample1:true,
    sample2:true,
    sample3:false,

    
}

const SampleContext=createContext(data)

export default SampleContext;