import React, { useCallback, useMemo, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  useColorScheme,
} from "react-native";
import {
  GestureHandlerRootView,
  Pressable,
} from "react-native-gesture-handler";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { IWallpapers } from "@/hooks/useWallpappers";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import * as MediaLibrary from "expo-media-library";
import * as FileSystem from "expo-file-system";

export const DownloadPicture = ({
  onClose,
  wallpaper,
}: {
  onClose: any;
  wallpaper: IWallpapers;
}) => {
  const theme = useColorScheme() ?? "light";
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  // renders
  return (
    <BottomSheet
      onClose={onClose}
      snapPoints={["95%"]}
      enablePanDownToClose
      ref={bottomSheetRef}
      onChange={handleSheetChanges}
      handleIndicatorStyle={{ height: 0 }}
      handleStyle={{ display: "none" }}
    >
      <BottomSheetView style={styles.contentContainer}>
        <ThemedView style={{ flex: 1 }}>
          <Image style={styles.image} source={{ uri: wallpaper.uri }} />
          <ThemedView style={styles.topbar}>
            <Ionicons
              onPress={onClose}
              name="close"
              size={24}
              color={theme === "light" ? Colors.light.text : Colors.dark.text}
            />
            <ThemedView style={styles.topbarinner}>
              <Ionicons
                name="heart"
                size={24}
                color={theme === "light" ? Colors.light.text : Colors.dark.text}
              />
              <Ionicons
                name="share"
                size={24}
                color={theme === "light" ? Colors.light.text : Colors.dark.text}
                style={{ paddingLeft: 6 }}
              />
            </ThemedView>
          </ThemedView>
          <Text style={styles.textContainer}>
            <ThemedText style={styles.text}>{wallpaper.name}</ThemedText>
          </Text>
          <DownloadButton url={wallpaper.uri} />
        </ThemedView>
      </BottomSheetView>
    </BottomSheet>
  );
};

function DownloadButton({ url }: { url: string }) {
  const theme = useColorScheme() ?? "light";
  return (
    <Pressable
      onPress={async () => {
        let date = new Date().getTime();
        let fileUrl = FileSystem.documentDirectory + `${date}.jpg`;
        try {
          const res = await FileSystem.downloadAsync(url, fileUrl);
          const response = await MediaLibrary.requestPermissionsAsync(true);
          if (response.granted) {
            MediaLibrary.createAssetAsync(fileUrl);
          } else {
            console.error("Permission not granted");
          }
        } catch (error) {
          console.log("FS Error:", error);
        }
      }}
      style={{
        backgroundColor:
          theme === "light" ? Colors.light.background : Colors.dark.background,
        padding: 10,
        marginHorizontal: 40,
        marginVertical: 20,
        justifyContent: "center",
        flexDirection: "row",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: theme === "light" ? Colors.light.text : Colors.dark.text,
      }}
    >
      <Ionicons
        name="download"
        size={24}
        color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
        style={{ paddingRight: 6 }}
      />
      <Text
        style={{
          fontSize: 20,
          color: theme === "light" ? Colors.light.text : Colors.dark.text,
          fontWeight: "600",
        }}
      >
        Download
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -40,
  },
  contentContainer: {
    flex: 1,
  },
  image: {
    height: "60%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  topbar: {
    position: "absolute",
    padding: 10,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
  },
  topbarinner: {
    display: "flex",
    flexDirection: "row",
  },
  textContainer: {
    width: "100%",
  },
  text: {
    fontSize: 20,
    paddingTop: 20,
    textAlign: "center",
    fontWeight: "600",
  },
});

export default DownloadPicture;
