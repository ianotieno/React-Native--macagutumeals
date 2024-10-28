import React  from "react";
import {   StyleSheet,   } from 'react-native';
import styled from "styled-components/native"
import { Card, Text } from 'react-native-paper';


const RestaurantCard= styled(Card)`
color: ${(props)=>props.theme.colors.ui.primary};
`;
const RestaurantCardCover= styled(Card.Cover)`
color: ${(props)=>props.theme.colors.ui.primary};
padding:${(props)=>props.theme.space[3]};
`;


const Title =styled.Text`
padding:${(props)=>props.theme.space[3]};
color: ${(props)=>props.theme.colors.ui.primary}
`;

export const RestaurantInfo = ({restaurant ={}}) =>{
    const {
name= 'Pizza Slice',
icon,
photos =["https://media.istockphoto.com/id/938742222/photo/cheesy-pepperoni-pizza.jpg?b=1&s=612x612&w=0&k=20&c=ZcLXrogjpyc5froC5ZIP-0uepbhldATwmCbt3mzViGQ="],
address="1000",
isOpenNow=true,
rating= 4,
isClosedTemporarily
    } = restaurant
return(
    <RestaurantCard elevation={5} >
        < RestaurantCardCover key={name}  source={{uri:photos[0]}}/>
        <Title>{name}</Title>
    </RestaurantCard>
)

};
