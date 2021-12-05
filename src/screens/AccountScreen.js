import React, { useContext, useState } from 'react'
import { Button } from 'react-native-elements'
import Spacer from '../component/Spacer'
import { Context as AuthContext } from '../../Context/authContext'





const AccountScreen = ({ navigation }) => {
  const { Signout } = useContext(AuthContext)



  return (
    <Spacer>
      <Button title="signout" onPress={Signout} />
    </Spacer>
  )
}
export default AccountScreen

