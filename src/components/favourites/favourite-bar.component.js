import React from "react";

import styled from "styled-components/native";
import { Spacer } from "../spacer/spacer.component";
import { ScrollView ,TouchableOpacity} from "react-native";
import {CompactRestaurantInfo} from "../restaurant/Compact-restaurant-Info";

const FavouritesWrapper= styled.View`
padding:10px
`;
export const FavouriteBar =({favourites })=>
(
<FavouritesWrapper>
<ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <Spacer key={key} position="left" size="medium">
             
             <TouchableOpacity
                onPress={() =>
                  onNavigate("RestaurantDetail", {
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

);
