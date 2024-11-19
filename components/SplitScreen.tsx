import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { ThemedView } from "./ThemedView";
import { FlatList } from "react-native-gesture-handler";
import ImageCard from "./ImageCard";
import { IWallpapers } from "@/hooks/useWallpappers";
import DownloadPicture from "./BottomSheet";

export default function SplitScreen({
  wallpapers,
  onScroll
}: {
  wallpapers: IWallpapers[];
  onScroll?:(yOffset:number)=>void
}) {
  const [selectedWallpeper, setSelectedWallpaper] =
    useState<null | IWallpapers>(null);
  return (
    <>
      <ThemedView style={style.container}>
        <ThemedView style={style.innerContainer}>
          <FlatList
          onScroll={(e)=>{
            let yOffset = e.nativeEvent.contentOffset.y/1
            onScroll?.(yOffset)

          }}
            data={wallpapers.filter((_, index) => index % 2 == 0)}
            renderItem={({ item }) => (
              <View style={style.imageContainer}>
                <ImageCard
                  wallpaper={item}
                  onPress={() => {
                    setSelectedWallpaper(item);
                  }}
                />
              </View>
            )}
            keyExtractor={(item) => item.name + Math.random().toString()}
          ></FlatList>
        </ThemedView>
        <ThemedView style={style.innerContainer}>
          <FlatList
            data={wallpapers.filter((_, index) => index % 2 == 1)}
            renderItem={({ item }) => (
              <View style={style.imageContainer}>
                <ImageCard
                  wallpaper={item}
                  onPress={() => {
                    setSelectedWallpaper(item);
                  }}
                />
              </View>
            )}
            keyExtractor={(item) => item.name + Math.random().toString()}
          ></FlatList>
        </ThemedView>
      </ThemedView>
      {selectedWallpeper && (
        <DownloadPicture
          onClose={() => {
            setSelectedWallpaper(null);
          }}
          wallpaper={selectedWallpeper}
        />
      )}
    </>
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
    padding: 4,
  },
  imageContainer: {
    paddingVertical: 10,
  },
});
