import ContextProvider from "./ContextProvider";
import trakerApi from "../API/tracker"
import AsyncStorage from '@react-native-async-storage/async-storage';



const reducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload }
    case "signin":
      return { errorMessage: "", token: action.payload }
    case "clean_error_message":
      return { ...state, errorMessage: "" }
    case "signout":
      return { token: null, errorMessage: "", handleout: action.payload }
    default:
      return state;
  }
}

const Signup = (dispatch) => {
  return async ({ email, password }, callback) => {
    try {
      const response = await trakerApi.post("/signup", { email, password })
      await AsyncStorage.setItem("token", response.data.token)
      dispatch({ type: "signin", payload: response.data.token })
      if (callback) {
        callback()
      }
    } catch (err) {

      dispatch({ type: "add_error", payload: "Something went wrong " })
      console.log(err)
    }

  }
}
const Signin = dispatch => {
  return async ({ email, password }) => {
    try {
      const response = await trakerApi.post("/signin", { email, password })
      await AsyncStorage.setItem("token", response.data.token)
      dispatch({ type: "signin", payload: response.data.token })

    } catch (err) {

      dispatch({ type: "add_error", payload: "Somethoíng went wrong " })
    }

  }
}
const cleanErrorMessage = (dispatch) => {
  return () => {
    dispatch({ type: "clean_error_message", payload: "hello" })
  }
}
const Signout = dispatch => {
  return async () => {
    await AsyncStorage.removeItem("token")
    dispatch({ type: "signout" })


  }
}
export const { Provider, Context } = ContextProvider(reducer,
  { Signin, Signout, Signup, cleanErrorMessage },
  { token: null, errorMessage: "", handleout: null })