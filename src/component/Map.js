import React, { useContext } from 'react'
import { ActivityIndicator, StyleSheet } from 'react-native'
import MapView, { Circle, Polyline } from "react-native-maps"
import { Context as locationContext } from '../../Context/locationCotext'

const Map = () => {


  const { state: { currentLocation, locations } } = useContext(locationContext)


  if (!currentLocation) {

    return (<ActivityIndicator size="large" color="#000" style={{ marginTop: 200 }} />)
  } else {
    return (
      <MapView
        style={styles.map}
        initialRegion={{
          ...currentLocation.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}

        region={{
          ...currentLocation.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }} // the region  was updated and the screen was fixed if !region
      >
        <Circle
          center={currentLocation.coords}
          radius={16}
          strokeColor="rgba(158,158,255,1.0)"
          fillColor="rgba(158,158,255,0.3)"
        />
        <Polyline
          coordinates={locations.map(loc => loc.coords)}
          lineDashPattern={[0]}
          strokeColor="#000"
          strokeWidth={4}

        />
      </MapView>
    )
  }
}

export default Map

const styles = StyleSheet.create({
  map: {
    height: 300,

  }
})
