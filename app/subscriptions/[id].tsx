import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams,Link } from 'expo-router'

const SubscriptionsDetails = () => {
    const {id} = useLocalSearchParams<{id:string}>()
  return (
    <View>
      <Text>SubscriptionsDetails: {id}</Text>
      <Link href="/">Go back</Link>
    </View>
  )
}

export default SubscriptionsDetails