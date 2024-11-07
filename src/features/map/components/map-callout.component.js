import React from "react"
import styled from "styled-components/native";
import {CompactRestaurantInfo} from "../../../components/restaurant/Compact-restaurant-Info"
const MyText= styled.Text``;


export const MapCallout=({restaurant})=>(
<CompactRestaurantInfo isMap restaurant ={restaurant}/>

)