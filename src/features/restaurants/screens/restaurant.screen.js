import React, {useContext} from "react";
import styled from "styled-components/native"
import { 
  FlatList,
  SafeAreaView,
  StatusBar,
  View
 } from 'react-native';

import { RestaurantInfo } from  '../components/restaurant-info.component';
import {RestaurantsContext} from "../../../services/restaurants/restaurant.context";
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import { Search } from "../components/search.component";


const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;


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


export const RestaurantsScreen =()=>
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
  return(<RestaurantInfo restaurant={item} />

)}}
keyExtractor={(item)=>item.name}
/>   
  </SafeArea>
)} 

  

   