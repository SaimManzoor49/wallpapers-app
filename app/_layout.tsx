import { View, Text } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Slot, Stack } from 'expo-router'
import DownloadPicture from '@/components/BottomSheet'
import { useWallpapers } from '@/hooks/useWallpappers'

export default function RootLayout() {
  const wallpapers = useWallpapers()
  return (
    <GestureHandlerRootView>
      <DownloadPicture wallpaper={wallpapers[0]}  onClose={()=>{}}/>
        <Stack screenOptions={{headerShown:false}} >
        {/* <Stack.Screen name='(screens)/accountInfo' options={{headerShown:true,headerTitle:"Account info", headerBackTitle:"Go back"}} /> */}
        </Stack>
    </GestureHandlerRootView>
  )
}