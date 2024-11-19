import { View, Text, Image, StyleSheet, Dimensions, Animated } from "react-native";
import React, { useState } from "react";
import { useWallpapers } from "@/hooks/useWallpappers";
import Carousel from 'react-native-reanimated-carousel';
import { LinearGradient } from 'expo-linear-gradient';
import SplitScreen from "@/components/SplitScreen";
import { ThemedView } from "@/components/ThemedView";
import { useCarousel } from "@/hooks/useCarousel";
import { ThemedText } from "@/components/ThemedText";
import ThemeSafeAreaView from "@/components/ThemeSafeAreaView";
import { interpolate, useAnimatedStyle } from "react-native-reanimated";

const TOP_BAR_HEIGHT = 250

export default function explore() {
  const [yOffset,setScrollY] = useState(0)
  const width = Dimensions.get('window').width;
  const wallpapers = useWallpapers();
  const carouselItems = useCarousel()

  const headerAnomationStyle = useAnimatedStyle(()=>{
    return{
      transform:[
        {
          scale:interpolate(yOffset,[-TOP_BAR_HEIGHT,0,TOP_BAR_HEIGHT],[1.5,1,1])
        }
      ]
    }
  })
  const textAnomationStyle = useAnimatedStyle(()=>{
    return{
          opacity:interpolate(yOffset,[-TOP_BAR_HEIGHT,0,TOP_BAR_HEIGHT],[1,1,0])
    }
  })

  return (
    <ThemeSafeAreaView style={{ flex: 1 }}>
     <Animated.View style={[{height:TOP_BAR_HEIGHT-yOffset},headerAnomationStyle]} >
     <Carousel
                loop
                width={width}
                height={TOP_BAR_HEIGHT-yOffset}
                autoPlay={true}
                data={carouselItems}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ index }) => (
                <>
                 <ThemedView
                        style={{
                            flex: 1,
                            borderWidth: 1,
                            justifyContent: 'center',
                        }}
                    >
                       <Image source={{uri:carouselItems[index].image}} style={{height:TOP_BAR_HEIGHT}} />
                    </ThemedView>
                      <LinearGradient colors={['transparent', 'black']} style={{flex:1,position:'absolute',zIndex:10, height:TOP_BAR_HEIGHT/2,width:'100%',bottom:0}}>
                      <Animated.View style={textAnomationStyle}>
                      <ThemedText style={{color:'white',paddingTop:TOP_BAR_HEIGHT / 3,textAlign:'center',fontSize:30,fontWeight:"600",}}>
                        {carouselItems[index].title}
                      </ThemedText>
                      </Animated.View>
                    </LinearGradient>
                    </>
                )}
            />
     </Animated.View>
     <View style={{borderRadius:20,flex:1}}>
      <SplitScreen wallpapers={wallpapers} onScroll={(yOffset)=>{
        setScrollY(yOffset)
      }} />
      </View>
    
    </ThemeSafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    // display: "flex",
    flexDirection: "row",
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 10,
  },
  imageContainer: {
    paddingVertical: 10,
  },
});
