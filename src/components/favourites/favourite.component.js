import React, {useContext} from "react";
import { FavouritesContext } from "../../services/favourites/favourites1.context"
import styled from "styled-components";
import {AntDesign} from "@expo/vector-icons"
import { TouchableOpacity } from "react-native";



const FavouriteButton = styled(TouchableOpacity)`
position: absolute;
top: 25px;
right: 25px;
z-index: 9;
`;

export const Favourite = ({ restaurant }) => {
const { favourites, addToFavourites, removeFromFavourites } = useContext(
FavouritesContext
);
return(
<FavouriteButton>
<AntDesign
name="heart"
size={24}
color="red"
/>
</FavouriteButton>
);
}