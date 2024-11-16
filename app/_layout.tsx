import { View, Text } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Slot, Stack } from 'expo-router'

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
        <Stack screenOptions={{headerShown:false}} >
        <Stack.Screen name='(screens)/accountInfo' options={{headerShown:true,headerTitle:"Account info", headerBackTitle:"Go back"}} />
        </Stack>
    </GestureHandlerRootView>
  )
}