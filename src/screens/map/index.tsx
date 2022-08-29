import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Geolocation from '@react-native-community/geolocation';

import {styles} from './style';
import {Constants} from '../../utils/contants';
import {Maps} from '../../models/maps';

export const MapScreen = () => {
  const [origin, setOrigin] = useState<Maps.ICoordinates>({
    latitude: -33.4476673,
    longitude: -70.6401694,
  });

  const [destination] = useState<Maps.ICoordinates>({
    latitude: -33.4146252,
    longitude: -70.580999,
  });

  useEffect(() => {
    getCurrentLocation();
  }, []);

  async function getCurrentLocation() {
    Geolocation.getCurrentPosition(location => {
      const current = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setOrigin(current);
    });
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: origin.latitude,
          longitude: origin.longitude,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04,
        }}>
        <Marker
          coordinate={origin}
          draggable
          onDragEnd={direction => setOrigin(direction.nativeEvent.coordinate)}
        />
        <Marker coordinate={destination} />

        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={Constants.MapsApi.api_key}
          strokeWidth={3}
        />
      </MapView>
    </View>
  );
};
