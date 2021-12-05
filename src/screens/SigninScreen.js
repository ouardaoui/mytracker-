import React, { useContext, useEffect } from 'react'
import AuthForm from '../component/AuthForm';
import NavLink from '../component/NavLink';
import Center from '../component/Center';
import { Context as AuthContext } from '../../Context/authContext'


const SigninScreen = ({ navigation }) => {
  const { state, Signin, cleanErrorMessage } = useContext(AuthContext)
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      cleanErrorMessage()
    });

    return unsubscribe;
  }, [navigation]);
  return (
    <Center>
      <AuthForm
        HeaderText="Sign in to your account"
        errorMessage={state.errorMessage}
        submitButtonText="Sign in"
        onSubmit={Signin}
      />
      <NavLink
        text="Dont have an account ? Sign up"
        routeName="Signup"
      />
    </Center>
  )
}

export default SigninScreen


