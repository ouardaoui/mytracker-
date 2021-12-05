import { useNavigation } from "@react-navigation/core"
import { Accuracy, requestForegroundPermissionsAsync, watchPositionAsync } from "expo-location"
import React, { useEffect, useState } from "react"

export default (recording, callback) => {
  const [err, setErr] = useState(null)
  const navigation = useNavigation()
  const [handlefocus, setHandleFocus] = useState(true)


  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      setHandleFocus(false)
    });

    return unsubscribe;
  }, [navigation]);
  useEffect(() => {

    const unsubscribe = navigation.addListener('focus', () => {
      setHandleFocus(true)
    });

    return unsubscribe;
  }, [navigation]);


  useEffect(() => {
    let subscriber
    const startWatching = async () => {

      try {
        await requestForegroundPermissionsAsync()
        subscriber = await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000, //every 1 s update
            // distanceInterval: 10 // every 10 metre
          },
          callback

        )
      } catch (e) {
        setErr(e)
        console.log(err)
      }
    }
    if (handlefocus || recording) {
      startWatching()
    } else {
      if (subscriber) {
        subscriber.remove()
      }

      subscriber = null
    }
    return () => {
      if (subscriber) {
        subscriber.remove()
      }
    }
  }, [handlefocus, callback])

  return [err]
}