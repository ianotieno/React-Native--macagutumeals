import React,{useState,useEffect} from "react";
import { locationRequest,locationTransform } from "./location.service";


export const LocationContext= React.createContext();


export const LocationContextProvider =({children}) =>{
    const [location,setlocation]=useState(null);
    const [keyword,setKeyword]=useState("San Francisco");
    const[isLoading,setIsLoading]=useState(false);
    const [error,setError]=useState(null);
   
   const onSearch= (searchKeyword)=>{
      setIsLoading(true);
      setKeyword(searchKeyword);
      if(!searchKeyword.length){
       return;
      }

      locationRequest(searchKeyword.toLowerCase())
      .then(locationTransform)
      .then(result=>{
        setIsLoading(false);
        setlocation(result);
       
      }).catch((err)=>{
        setIsLoading(false);
        setError(err);
       
      });
     };
  

return(
    <LocationContext.Provider
    value={{
        isLoading,
        error,
        location,
        search:onSearch,
        keyword,
    }} 
    >
        {children}
    </LocationContext.Provider>
)
}