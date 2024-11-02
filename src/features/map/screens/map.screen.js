import React from "react";
import MapView from "react-native-maps";
import styled from "styled-components/native";
import { Search } from '../components/search.component'


const Map =styled(MapView)`
flex: 1;
`;
export const MapScreen = () => {
  return (
    <>
    <Search/>
    <Map /> 
    </>
    
  );
};
