import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Context as trackContext } from '../../Context/TrackContext';
import MapView, { Polyline } from "react-native-maps"

const TrackDetailScreen = ({ route }) => {
  const { state } = useContext(trackContext)

  const { _id } = route.params;
  const track = state.find(track => track._id === _id)
  const initCoords = track.locations[0].coords

  console.log(initCoords)
  return (
    <>
      <Text style={{ fontSize: 48 }}>{track.name}</Text>
      <MapView
        style={styles.map}

        initialRegion={{
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
          ...initCoords,
        }}

      >
        <Polyline
          coordinates={track.locations.map(loc => loc.coords)}
          lineDashPattern={[0]}
          strokeColor="#000"
          strokeWidth={4}

        />
      </MapView>
    </>
  )
}

export default TrackDetailScreen

const styles = StyleSheet.create({
  map: {
    height: 300,
  }
})
