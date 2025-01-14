import {
  View,
  Text,
  Image,
  StyleSheet,
  useColorScheme,
  Pressable,
} from "react-native";
import React from "react";
import { IWallpapers } from "@/hooks/useWallpappers";
import { ThemedText } from "./ThemedText";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

export default function ImageCard({
  wallpaper,
  onPress,
}: {
  wallpaper: IWallpapers;
  onPress: () => void;
}) {
  const theme = useColorScheme() ?? "light";
  return (
    <Pressable onPress={onPress}>
      <View>
        <Image source={{ uri: wallpaper?.uri }} style={style.image} />
        <View style={style.labelContainer}>
          <ThemedText style={style.label}>{wallpaper.name}</ThemedText>
          <View style={style.iconContainer}>
            <Ionicons
              name="heart"
              size={18}
              color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
            />
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const style = StyleSheet.create({
  image: {
    flex: 1,
    height: 200,
    borderRadius: 20,
  },
  label: {
    color: "white",
  },
  labelContainer: {
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
  },
});
