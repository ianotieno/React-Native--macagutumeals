import React, { useContext, useEffect, useState } from "react";
import MapView, { Callout, Marker } from "react-native-maps";
import styled from "styled-components/native";
import { Search } from "../components/search.component";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurant.context";
import { MapCallout } from "../../map/components/map-callout.component";

const Map = styled(MapView)`
  flex: 1;
`;

export const MapScreen = ({ route, navigation }) => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);
  const [latDelta, setLatDelta] = useState(0);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const { lat, lng, viewport } = location;

  // Update selected restaurant when navigating from RestaurantsDetails
  useEffect(() => {
    if (route.params?.restaurant) {
      setSelectedRestaurant(route.params.restaurant);
    }
  }, [route.params]);

  // Update latDelta and reset selected restaurant on location change
  useEffect(() => {
    if (viewport) {
      const northeastLat = viewport.northeast.lat;
      const southwestLat = viewport.southwest.lat;
      const latDelta = northeastLat - southwestLat;
      setLatDelta(latDelta);
    }
    // Reset selected restaurant on new location search
    setSelectedRestaurant(null);
  }, [location, viewport]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: selectedRestaurant ? selectedRestaurant.geometry.location.lat : lat,
          longitude: selectedRestaurant ? selectedRestaurant.geometry.location.lng : lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {selectedRestaurant ? (
          // Show only the selected restaurant marker
          <Marker
            key={selectedRestaurant.name}
            title={selectedRestaurant.name}
            coordinate={{
              latitude: selectedRestaurant.geometry.location.lat,
              longitude: selectedRestaurant.geometry.location.lng,
            }}
          >
            <Callout>
              <MapCallout restaurant={selectedRestaurant} />
            </Callout>
          </Marker>
        ) : (
          // Show all restaurant markers
          restaurants.map((rest) => (
            <Marker
              key={rest.name}
              title={rest.name}
              coordinate={{
                latitude: rest.geometry.location.lat,
                longitude: rest.geometry.location.lng,
              }}
            >
              <Callout
                onPress={() =>
                  navigation.navigate("RestaurantsDetail", { restaurant: rest })
                }
              >
                <MapCallout restaurant={rest} />
              </Callout>
            </Marker>
          ))
        )}
      </Map>
    </>
  );
};
