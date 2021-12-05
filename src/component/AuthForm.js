import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Button, Input, Text } from 'react-native-elements'
import Spacer from './Spacer';
import { useNavigation } from "@react-navigation/core";

const AuthForm = ({ HeaderText, errorMessage, submitButtonText, onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  return (
    <>
      <Spacer>
        <Text h3>{HeaderText}</Text>
      </Spacer>
      <Spacer>
        <Input
          label="email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </Spacer>
      <Spacer>
        <Input
          label="password"
          autoCapitalize="none"
          value={password}
          onChangeText={setPassword}
          autoCorrect={false}
          secureTextEntry={true}
        />
      </Spacer>

      {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}

      <Spacer>
        <Button title={submitButtonText} onPress={() => onSubmit({ email, password })} />
      </Spacer>
    </>
  )
}

export default AuthForm

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginTop: 15,
    marginLeft: 15
  },
})
