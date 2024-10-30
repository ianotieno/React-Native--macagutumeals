import React, {useContext} from "react";
import { Searchbar } from 'react-native-paper';
import styled from "styled-components/native"
import { 
  FlatList,
  SafeAreaView,
  StatusBar
 } from 'react-native';

import { RestaurantInfo } from  '../components/restaurant-info.component';
import {RestaurantsContext} from "../../../services/restaurants/restaurant.context";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const SearchContainer=styled.View`
padding:${(props)=>props.theme.space[3]};
`;
const RestarantList= styled(FlatList).attrs({
  contentContainerStyle:{
    padding:16,
  }
})`
`;

export const RestaurantsScreen =()=>
{ 
  const {restaurants,isLoading, error} = useContext(RestaurantsContext);
  return(
<SafeArea >
    <SearchContainer>
  <Searchbar placeholder='search'/>
    </SearchContainer>
<RestarantList
data={restaurants}
renderItem={({item})=>{
  return(<RestaurantInfo restaurant={item} />

)}}
keyExtractor={(item)=>item.name}
/>   
  </SafeArea>
)} 

  

   