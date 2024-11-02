import React, {useContext} from "react";
import styled from "styled-components/native"
import { 
  FlatList
 } from 'react-native';

import { RestaurantInfo } from  '../components/restaurant-info.component';
import {RestaurantsContext} from "../../../services/restaurants/restaurant.context";
import { ActivityIndicator} from 'react-native-paper';
import { Search } from "../components/search.component";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeArea } from "../../../components/utility/safe-area.component";


const RestarantList= styled(FlatList).attrs({
  contentContainerStyle:{
    padding:16,
   
  }
})`
`;

const Loading= styled(ActivityIndicator)`
marginLeft: -25px`;


const LoadingContainer= styled.View`
position:absolute;
top:50%;
left:50%;
`;


export const RestaurantsScreen =({navigation})=>
{ 
  const {restaurants,isLoading, error} = useContext(RestaurantsContext);

  return(
<SafeArea >
  {isLoading && (
<LoadingContainer >
<Loading size={50}
animating={true}
theme={{ colors: { primary: 'tomato' } }}
/>
</LoadingContainer>
  )}
<Search/>
<RestarantList
data={restaurants}
renderItem={({item})=>{
  return(
    <TouchableOpacity
     onPress={()=>{navigation.navigate("RestaurantsDetail",{restaurant:item})}}>
  <RestaurantInfo restaurant={item} />
    </TouchableOpacity>


)}}
keyExtractor={(item)=>item.name}
/>   
  </SafeArea>
)} 

  

   