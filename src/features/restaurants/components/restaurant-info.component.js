import React  from "react";
import { SvgXml } from 'react-native-svg';
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

import { 
     RestaurantCard,
    RestaurantCardCover,
    Info,
    Section,
    SectionEnd,
    Rating,
    Icon,
    Address,
} from "./restaurant-info-card.style";
import { Favourite } from "../../../components/favourites/favourite.component";


export const RestaurantInfo = ({restaurant ={}}) =>{
    const {
name= 'Pizza Slice',
icon="https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
photos =["https://media.istockphoto.com/id/938742222/photo/cheesy-pepperoni-pizza.jpg?b=1&s=612x612&w=0&k=20&c=ZcLXrogjpyc5froC5ZIP-0uepbhldATwmCbt3mzViGQ="],
vicinity="1000 some random street",
isOpenNow=true,
rating= 4,
isClosedTemporarily=true,
placeId
    } = restaurant;

    const ratingArray= Array.from(new Array(Math.floor(rating)));
return(
    <RestaurantCard elevation={5} >
       <Favourite  restaurant ={ restaurant }/>
        < RestaurantCardCover key={name}  source={{uri:photos[0]}}/>
        <Info>
        <Text varient='label'>{name}</Text>
        <Section>
        <Rating>
        {ratingArray.map((_, i) => (
    <SvgXml key={`star-${placeId}-${i}`} xml={star} width={20} height={20} />
))}  

       </Rating>
      <SectionEnd>
        {isClosedTemporarily && (
            <Text variant='error' >
            Closed Temporarily
            </Text>
        )}
       <Spacer position="left" size="large"/>
        {isOpenNow &&   <SvgXml xml={open} width={20} height={20} />}
        <Spacer position="left" size="large"/>
        <Icon source={{uri :icon}}/>
        </SectionEnd> 
        </Section>

        <Address>{vicinity} </Address>
        </Info>
     
    </RestaurantCard>
)

};
