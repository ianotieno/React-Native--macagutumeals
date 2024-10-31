import React from "react";
import {createStackNavigator,TransitionPresets} from "@react-navigation/stack"
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurant.screen"
import { RestaurantsDetails} from "../../features/restaurants/screens/restaurantsdetails.screen"
import { Platform,View } from "react-native";


const RestaurantsStack = createStackNavigator();
export const RestaurantsNavigator=()=>{
    return(
       
        <RestaurantsStack.Navigator   screenOptions={{
            headerShown: false,
            gestureEnabled: true,
            }}>
            <RestaurantsStack.Screen
             name="Restaurant"
            component={RestaurantsScreen}
            />
             <RestaurantsStack.Screen
             name="RestaurantsDetail"
            component={RestaurantsDetails}
            options={{
                ...TransitionPresets.ModalPresentationIOS,
                gestureEnabled: true,
                presentation: Platform.OS === 'ios' ? 'modal' : 'transparentModal', 
           
              }}
            />
        </RestaurantsStack.Navigator>
        
    )
}
