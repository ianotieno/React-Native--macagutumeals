import React from "react";
import { Searchbar } from 'react-native-paper';
import styled from "styled-components/native"
import { 
  SafeAreaView, 
  StyleSheet, 
  Text, 
  View ,
  StatusBar, 
 } from 'react-native';

import { RestaurantInfo } from  '../components/restaurant-info.component';


const SafeArea =styled(SafeAreaView)`
flex:1px;
${StatusBar.currentHeight && 'margin-top:${StatusBar.currentHeight}px'};
`;
const SearchContainer=styled.View`
padding:${(props)=>props.theme.space[3]};
`;


export const RestaurantsScreen =()=>( 
<SafeArea >
    <SearchContainer>
  <Searchbar placeholder='search'/>
    </SearchContainer>

  <RestaurantInfo/>
 
    
  </SafeArea>
  );

   