import { View, Text } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

const SignUp = () => {
  return (
    <View>
      <Text>SignUp</Text>
      <Link className="mt-4 rounded bg-primary text-white p-4" href='/(auth)/SignIn'>Sigh-In</Link>
    </View>
  )
}

export default SignUp