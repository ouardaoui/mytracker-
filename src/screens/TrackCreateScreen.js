import "../_fakeLocation"
import React, { useCallback, useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Map from '../component/Map'

import { Context as LocationContext } from '../../Context/locationCotext';
import useLocation from '../hooks/useLocation';
import TrackForm from "../component/TrackForm";

const TrackCreateScreen = () => {
  const { state: { recording }, addLocation } = useContext(LocationContext)
  const callback = useCallback((location) => {
    addLocation(location, recording)
  }, [recording])

  const [err] = useLocation(recording, callback)



  return (
    <View>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
      <TrackForm />
    </View>
  )

}

export default TrackCreateScreen

const styles = StyleSheet.create({})
