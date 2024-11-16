import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'

export default function explore() {
  return (
    <SafeAreaView>
      <Text>explore</Text>
      <Link href={'/accountInfo'}>Info</Link>
    </SafeAreaView>
  )
}