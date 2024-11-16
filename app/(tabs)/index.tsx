import { View, Text, Image, StyleSheet, Dimensions, Animated } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { IWallpapers, useWallpapers } from "@/hooks/useWallpappers";
import Carousel from 'react-native-reanimated-carousel';
import { LinearGradient } from 'expo-linear-gradient';
import SplitScreen from "@/components/SplitScreen";
import { ThemedView } from "@/components/ThemedView";
import { useCarousel } from "@/hooks/useCarousel";
import { ThemedText } from "@/components/ThemedText";

const TOP_BAR_HEIGHT = 250

export default function explore() {
  const [yOffset,setScrollY] = useState(0)
  const width = Dimensions.get('window').width;
  const wallpapers = useWallpapers();
  const carouselItems = useCarousel()
  return (
    <SafeAreaView style={{ flex: 1 }}>
     <Animated.View style={{height:TOP_BAR_HEIGHT-yOffset}}>
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
                      <ThemedText style={{paddingTop:TOP_BAR_HEIGHT / 3,textAlign:'center',fontSize:30,fontWeight:"600",}}>
                        {carouselItems[index].title}
                      </ThemedText>
                    </LinearGradient>
                    </>
                )}
            />
     </Animated.View>
      <SplitScreen wallpapers={wallpapers} onScroll={(yOffset)=>{
        setScrollY(yOffset)
      }} />
    
    </SafeAreaView>
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
