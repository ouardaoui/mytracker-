import ContextProvider from "./ContextProvider";
import trackerApi from "../API/tracker";

const reducer = (state, action) => {
  switch (action.type) {
    case "fetch_tracks":
      return action.payload
    default:
      return state
  }
}

const fetchTracks = dispatch => {
  return async () => {
    const response = await trackerApi.get("/tracks");
    dispatch({ type: "fetch_tracks", payload: response.data })

  }
}

const createTracks = dispatch => {
  return async (name, locations) => {
    try {
      await trackerApi.post("/tracks", { name, locations })
      console.log(locations)
    } catch (e) {
      console.log(e)
    }

  }
}

export const { Provider, Context } = ContextProvider(reducer, { fetchTracks, createTracks }, [])