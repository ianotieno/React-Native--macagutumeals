import React, { useState, useEffect,useContext } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthenticationContext } from "../authentication/authentication.context";

export const FavouritesContext = React.createContext();

export const FavouritesContextProvider = ({ children }) => {
  const {user} = useContext(AuthenticationContext);

   const [favourites, setFavourites] = useState([]);
   const  saveFavourites = async (value,uid) => {
      try {
        const jsonValue =JSON.stringify(value);
        await AsyncStorage.setItem(`@favourites-${uid}`,jsonValue);
      } catch (error) {
       console.log("error storing",error)
      }
    };

const loadFavourites= async(uid) =>{
  try{
 const value =await AsyncStorage.getItem(`@favourites-${uid}`);
 if(value !== null){
  setFavourites(JSON.parse(value));
 }
  }catch(error){
    console.log("error loading",error)
  }
}


    const add = (restaurant) => {
     
        setFavourites([...favourites, restaurant]);
      
    };
  
    const remove = (restaurant) => {
      const newFavourites = favourites.filter(
        (x) => x.placeId !== restaurant.placeId
      );
      setFavourites(newFavourites);
    };

    useEffect(()=>{
     if(user){loadFavourites(user.uid)} 
    },[user]);
    useEffect(()=>{
     if(user) {saveFavourites(favourites,user.uid)}
    },[favourites,user]);

    return (
      <FavouritesContext.Provider
        value={{
          favourites,
          addToFavourites: add,
          removeFromFavourites: remove,
        }}
      >
        {children}
      </FavouritesContext.Provider>
    );
  };

