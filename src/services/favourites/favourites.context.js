import React,{createContext} from "react";

export const FavouriteContext= createContext();

export const FavouriteContextProvider = ({children})=>{
const [favourites,setFavourites]=useState([]);
const add =(restaurant)=>{
    setFavourites([...favourites,restaurant])
}
const remove =(restaurant)=>{
    const newFavourites = favourites.filter(
        (x)=>x.placeId !== restaurant.placeId
    );
};
    return(
<FavouriteContext.Provider>
    {children}
</FavouriteContext.Provider>
    )
};
