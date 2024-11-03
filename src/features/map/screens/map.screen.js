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

  const { lat, lng, viewport } = location;

  // Check if a specific restaurant was passed
  const { restaurant } = route.params || {};

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;
    const latDelta = northeastLat - southwestLat;
    setLatDelta(latDelta);
  }, [location, viewport]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: restaurant ? restaurant.geometry.location.lat : lat,
          longitude: restaurant ? restaurant.geometry.location.lng : lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((rest) => (
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
        ))}
      </Map>
    </>
  );
};
