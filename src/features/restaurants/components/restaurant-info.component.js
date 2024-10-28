import React  from "react";
import {   StyleSheet,   } from 'react-native';
import styled from "styled-components/native"
import { Card } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import star from "../../../../assets/star";


const RestaurantCard= styled(Card)`
color: ${(props)=>props.theme.colors.ui.primary};
`;
const RestaurantCardCover= styled(Card.Cover)`
color: ${(props)=>props.theme.colors.ui.primary};
padding:${(props)=>props.theme.space[3]};
`;
const Address =styled.Text`
font-family:${(props)=>props.theme.fonts.body};
font-size:${(props)=>props.theme.fontSizes.caption};
`;

const Title =styled.Text`
font-family:${(props)=>props.theme.fonts.body};
font-size:${(props)=>props.theme.fontSizes.body};
color: ${(props)=>props.theme.colors.ui.primary};
`;

const Info =styled.View`
padding:${(props)=>props.theme.space[3]};
`;

const Rating =styled.View`
flex-direction:row;
padding:${(props)=>props.theme.space[2]};
`;

export const RestaurantInfo = ({restaurant ={}}) =>{
    const {
name= 'Pizza Slice',
icon,
photos =["https://media.istockphoto.com/id/938742222/photo/cheesy-pepperoni-pizza.jpg?b=1&s=612x612&w=0&k=20&c=ZcLXrogjpyc5froC5ZIP-0uepbhldATwmCbt3mzViGQ="],
address="1000 some random street",
isOpenNow=true,
rating= 4,
isClosedTemporarily
    } = restaurant;

    const ratingArray= Array.from(new Array(Math.floor(rating)));
return(
    <RestaurantCard elevation={5} >
        < RestaurantCardCover key={name}  source={{uri:photos[0]}}/>
        <Info>
        <Title>{name}</Title>
        <Rating>
        {ratingArray.map((_, index) => (
    <SvgXml key={index} xml={star} width={20} height={20} />
))}  
       </Rating>
       
        <Address>{address}</Address>
        </Info>
     
    </RestaurantCard>
)

};
