import React,{useState} from "react";
import {RestaurantInfo} from "../components/restaurant-info.component";
import { SafeArea } from "../../../../src/components/utility/safe-area.component"
import {List,Divider} from "react-native-paper"
import { ScrollView } from "react-native";


export const RestaurantsDetails=({route,navigation})=>{
const [breakfastExpanded,setBreakfastExpanded]=useState(false);
const [lunchExpanded,setLunchExpanded]=useState(false);
const [dinnerExpanded,setDinnerExpanded]=useState(false);
const [drinksExpanded,setDrinksExpanded]=useState(false);

const {restaurant} =route.params;
return(
    <SafeArea>
        <RestaurantInfo restaurant={restaurant}/>
        <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="Eggs Benedict" />
          <Divider />
          <List.Item title="Classic Breakfast" />
        </List.Accordion>
        <Divider />
        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Burger w/ Fries" />
          <Divider />
          <List.Item title="Steak Sandwich" />
          <Divider />
          <List.Item title="Mushroom Soup" />
          <Divider />
        </List.Accordion>
        <Divider />
        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Spaghetti Bolognese" />
          <Divider />
          <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
          <Divider />
          <List.Item title="Steak Frites" />
        </List.Accordion>
        <Divider />

        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="Coffee" />
          <Divider />
          <List.Item title="Tea" />
          <Divider />
          <List.Item title="Modelo" />
          <Divider />
          <List.Item title="Coke" />
          <Divider />
          <List.Item title="Fanta" />
        </List.Accordion>
        <Divider />
        <List.Item
  title="Go To Location in Map"
  left={(props) => <List.Icon {...props} icon="map" />}
  onPress={() => navigation.navigate("Map", { restaurant })}
/>

        </ScrollView>
        
    </SafeArea>
)

}