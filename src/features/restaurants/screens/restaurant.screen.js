import React from "react";
import { Searchbar } from 'react-native-paper';
import styled from "styled-components/native"
import { 
  SafeAreaView, 
  FlatList,
  StatusBar, 
 View
 } from 'react-native';

import { RestaurantInfo } from  '../components/restaurant-info.component';


const SafeArea =styled(SafeAreaView)`
flex:1;
${StatusBar.currentHeight && `margin-top:${StatusBar.currentHeight}px`};
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

export const RestaurantsScreen =()=>( 
<SafeArea >
    <SearchContainer>
  <Searchbar placeholder='search'/>
    </SearchContainer>
<RestarantList
data={[
  {name:1},
  {name:2},
  {name:3},
  {name:4},
  {name:5},
  {name:6},
  {name:7},
  {name:8},
  {name:9},
  {name:10},
  {name:11},
  {name:12},
  {name:13},
  {name:14},

]}
renderItem={()=>  <RestaurantInfo/>}
keyExtractor={(item)=>item.name}

/>
 
 
    
  </SafeArea>
  );

   