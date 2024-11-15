import React,{useContext} from "react"
import { SafeArea } from "../../../components/utility/safe-area.component"
import { Text } from "../../../components/typography/text.component"
import styled from "styled-components/native";
import { FavouritesContext } from "../../../services/favourites/favourites1.context";
import { RestaurantInfo } from "../../restaurants/components/restaurant-info.component";
import { TouchableOpacity } from "react-native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestarantList } from "../../restaurants/components/restaurant-list.style";

const NoFavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;
export const FavouriteScreen=({navigation})=>{
    const { favourites } = useContext(FavouritesContext);
    return favourites.length ? (
        <SafeArea>
          <RestarantList
            data={favourites}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("RestaurantsDetail", {
                      restaurant: item,
                    })
                  }
                >
                  <Spacer position="bottom" size="large">
                    <RestaurantInfo restaurant={item} />
                  </Spacer>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item.name}
          />
        </SafeArea>
      ) : (
        <NoFavouritesArea>
          <Text center>No favourites yet</Text>
        </NoFavouritesArea>
      );
    };
    