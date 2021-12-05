import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Button, Input } from 'react-native-elements'
import { Context as locationContext } from '../../Context/locationCotext'
import useSaveTrack from '../hooks/useSaveTrack'
import Spacer from './Spacer'

const TrackForm = () => {
  const { state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName } = useContext(locationContext)

  const [saveTrack] = useSaveTrack()
  return (
    <>
      <Spacer>
        <Input placeholder="entre description" onChangeText={changeName} value={name}></Input>
      </Spacer>
      <Spacer>
        {
          recording ? <Button onPress={stopRecording} title="stop recording" /> :
            <Button onPress={startRecording} title="start recording" />
        }
      </Spacer>
      <Spacer>
        {
          !recording && locations.length ? <Button title="recording" onPress={saveTrack} /> :
            null
        }
      </Spacer>
    </>
  )
}

export default TrackForm

const styles = StyleSheet.create({})
