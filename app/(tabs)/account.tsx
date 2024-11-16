import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import DownloadPicture from '@/components/BottomSheet'

export default function account() {
  const [pictureOpen ,setPictureOpen] = useState(false)
  const onClose = ()=>{
    setPictureOpen(false)
  }
  return (
    <SafeAreaView  style={{flex:1}}>
     <View style={{flex:1}}>
     <Text>account</Text>
      <Button title='Open bottom sheeet' onPress={()=>{setPictureOpen(true)}}>
      </Button>
      {
        pictureOpen && (<DownloadPicture onClose={onClose} />)
      }
     </View>
    </SafeAreaView>
  )
}