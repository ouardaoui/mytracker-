import { useNavigation } from "@react-navigation/core";
import { useContext } from "react";
import { Context as locationContext } from "../../Context/locationCotext";
import { Context as TrackContext } from "../../Context/TrackContext";

export default () => {
  const { state: { name, locations }, reset } = useContext(locationContext)
  const { createTracks } = useContext(TrackContext)
  const navigation = useNavigation()
  const saveTrack = async () => {
    await createTracks(name, locations)
    reset()
    navigation.navigate("List & Detail")
  };
  return [saveTrack]
}