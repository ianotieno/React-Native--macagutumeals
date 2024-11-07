import React from "react";

import styled from "styled-components/native";
import { Spacer } from "../spacer/spacer.component";
import { ScrollView ,TouchableOpacity} from "react-native";
import {CompactRestaurantInfo} from "../restaurant/Compact-restaurant-Info";
import { Text } from "../typography/text.component";
const FavouritesWrapper= styled.View`
padding:10px
`;
export const FavouriteBar =({favourites,onNavigate })=> {
    if(!favourites.length){ 
        return( <Spacer variant="left.large">
    <Text variant="caption">     No Favourites Selected </Text>
       </Spacer>)
       
    }
 return(
<FavouritesWrapper>
    <Spacer variant="left.large">
 <Text variant="caption">Favourites</Text>
    </Spacer>
<ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
           <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() =>
                  onNavigate("RestaurantsDetail", {
                    restaurant,
                  })
                }
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
</FavouritesWrapper>

)};
