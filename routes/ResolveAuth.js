import React, { useContext, useEffect, useState } from 'react'

import TabApp from './TabApp'
import StackApp from './StackApp'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Context } from '../Context/authContext';




const ResolveAuth = () => {
  const { state: { token, handleout } } = useContext(Context)


  const [check, setCheck] = useState("")
  useEffect(async () => {
    const sub = await AsyncStorage.getItem("token")
    if (sub) {
      setCheck(sub)
    } else {
      setCheck("")
    }

    return sub
  })


  return (
    <>
      {check ?
        <TabApp /> :
        <StackApp />}
    </>

  )
}

export default ResolveAuth


