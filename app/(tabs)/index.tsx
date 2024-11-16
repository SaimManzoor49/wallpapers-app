import { View, Text, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { IWallpapers, useWallpapers } from "@/hooks/useWallpappers";
import ImageCard from "@/components/ImageCard";
import { FlatList } from "react-native-gesture-handler";
import { ThemedView } from "@/components/ThemedView";
import DownloadPicture from "@/components/BottomSheet";
import SplitScreen from "@/components/SplitScreen";

export default function explore() {
 
  const wallpapers = useWallpapers();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ParallaxScrollView
        headerImage={
          <Image style={{ flex: 1 }} source={{ uri: wallpapers[0]?.uri??'' }} />
        }
        headerBackgroundColor={{ dark: "black", light: "white" }}
      >
      <SplitScreen wallpapers={wallpapers}  />
      </ParallaxScrollView>
    
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
