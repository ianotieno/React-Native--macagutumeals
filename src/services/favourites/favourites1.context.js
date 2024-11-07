import React, { useState, useEffect } from "react";


export const FavouritesContext = React.createContext();

export const FavouritesContextProvider = ({ children }) => {
    const [favourites, setFavourites] = useState([]);

    const add = (restaurant) => {
     
        setFavourites([...favourites, restaurant]);
      
    };
  
    const remove = (restaurant) => {
      const newFavourites = favourites.filter(
        (x) => x.placeId !== restaurant.placeId
      );
      setFavourites(newFavourites);
    };
  
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
