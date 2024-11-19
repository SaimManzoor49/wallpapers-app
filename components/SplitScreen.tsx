import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { ThemedView } from "./ThemedView";
import { FlatList } from "react-native-gesture-handler";
import ImageCard from "./ImageCard";
import { IWallpapers } from "@/hooks/useWallpappers";
import DownloadPicture from "./BottomSheet";

export default function SplitScreen({
  wallpapers,
  onScroll,
}: {
  wallpapers: IWallpapers[];
  onScroll?: (yOffset: number) => void;
}) {
  const [selectedWallpeper, setSelectedWallpaper] =
    useState<null | IWallpapers>(null);
  return (
    <>
       <FlatList
                onScroll={(e) => {
                    let yOffset = e.nativeEvent.contentOffset.y / 1;
                    onScroll?.(yOffset);
                }}
                data={wallpapers.filter((_, index) => index % 2 === 0).map((_, index) => [wallpapers[index], wallpapers[index + 1]])}
                renderItem={({item: [first, second]}) => <ThemedView style={styles.container}>
                    <ThemedView style={styles.innerContainer}>
                        <View style={styles.imageContainer}><ImageCard onPress={() => {
                            setSelectedWallpaper(first)
                        }} wallpaper={first} /></View>
                    </ThemedView>
                    <ThemedView style={styles.innerContainer}>
                        {second && <View style={styles.imageContainer}><ImageCard wallpaper={second} onPress={() => {
                            setSelectedWallpaper(second)
                        }} /></View>}
                    </ThemedView>
                </ThemedView>
                
                }
                keyExtractor={item => item[0].name}
            />
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

const styles = StyleSheet.create({
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
