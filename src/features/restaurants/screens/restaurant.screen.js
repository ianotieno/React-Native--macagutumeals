import React, { useContext, useState } from "react";
import styled from "styled-components/native";
import { FavouriteBar } from "../../../components/favourites/favourite-bar.component";
import { FavouritesContext } from "../../../services/favourites/favourites1.context";
import { RestaurantInfo } from "../components/restaurant-info.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurant.context";
import { ActivityIndicator } from "react-native-paper";
import { Search } from "../components/search.component";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestarantList } from "../components/restaurant-list.style";




const Loading = styled(ActivityIndicator)`
  marginleft: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  const [isToggled, setIsToggled] = useState(false);
  const { favourites } = useContext(FavouritesContext);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading
            size={50}
            animating={true}
            theme={{ colors: { primary: "tomato" } }}
          />
        </LoadingContainer>
      )}
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && <FavouriteBar favourites={favourites}   onNavigate={navigation.navigate}/> }
      <RestarantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("RestaurantsDetail", { restaurant: item });
              }}
            >
              <RestaurantInfo restaurant={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
