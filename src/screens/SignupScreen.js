import React, { useContext, useEffect } from 'react'
import Center from '../component/Center';
import { Context as AuthContext } from '../../Context/authContext'
import AuthForm from '../component/AuthForm';
import NavLink from '../component/NavLink';


const SignupScreen = ({ navigation }) => {
  const { state, Signup, cleanErrorMessage } = useContext(AuthContext)
  useEffect(() => {
    if (navigation) {
      const unsubscribe = navigation.addListener('focus', () => {
        cleanErrorMessage()
      });

      return unsubscribe;
    }
  }, [navigation]);
  return (
    <Center>
      <AuthForm
        HeaderText="Sign Up for tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={Signup}
      />
      <NavLink
        text="Already have an account ? Sign in instead "
        routeName="Signin"
      />


    </Center>
  )
}


export default SignupScreen

