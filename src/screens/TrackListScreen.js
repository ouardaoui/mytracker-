import React, { useContext } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ListItem } from 'react-native-elements'

import { Context as trackContext } from '../../Context/TrackContext'

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(trackContext)

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchTracks()
    });
    return unsubscribe;
  }, [navigation]);



  return (
    <View>
      <Text style={{ fontSize: 48 }}>TrackListScreen</Text>
      <FlatList

        data={state}
        keyExtractor={item => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate("Track Detail", { _id: item._id })} >
              <ListItem >
                <Text >{item.name}</Text>
              </ListItem>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

export default TrackListScreen

const styles = StyleSheet.create({})
