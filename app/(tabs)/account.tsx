import {
  View,
  Text,
  Button,
  Pressable,
  useColorScheme,
  StyleSheet,
  Appearance,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import DownloadPicture from "@/components/BottomSheet";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import ThemeSafeAreaView from "@/components/ThemeSafeAreaView";

export default function account() {
  return (
    <ThemeSafeAreaView style={{ flex: 1 }}>
      <Header />
      <ThemedView style={{ flex: 1 }}>
        <Auth />
        <ThemeSelector />
      </ThemedView>
      <About />
    </ThemeSafeAreaView>
  );
}

function About() {
  return (
    <ThemedView style={{ paddingTop: 20 }}>
      <ThemedText style={styles.textbg}>About</ThemedText>
     <ThemedView style={{marginTop:10}}>
     <Pressable>
        <ThemedText style={{margin:10,fontSize:18}}>Account</ThemedText>
      </Pressable>
      <Pressable>
        <ThemedText style={{margin:10,fontSize:18}}>Privacy Policy</ThemedText>
      </Pressable>
      <Pressable>
        <ThemedText style={{margin:10,fontSize:18}}>Terms of Services</ThemedText>
      </Pressable>
      <Pressable>
        <ThemedText style={{margin:10,fontSize:18}}>Licences</ThemedText>
      </Pressable>
     </ThemedView>
    </ThemedView>
  );
}

function AuthButton({ icon, label }: { icon: any; label: string }) {
  const theme = useColorScheme() ?? "light";
  return (
    <Pressable
      style={{
        padding: 10,
        marginHorizontal: 40,
        marginVertical: 4,
        justifyContent: "center",
        flexDirection: "row",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: theme === "light" ? Colors.light.text : Colors.dark.text,
      }}
    >
      {icon}
      <ThemedText style={{ fontSize: 20, fontWeight: "600" }}>
        {label}
      </ThemedText>
    </Pressable>
  );
}

function Auth() {
  const theme = useColorScheme() ?? "light";
  return (
    <>
      <AuthButton
        label="Sign in"
        icon={
          <Ionicons
            name="logo-google"
            size={24}
            color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
            style={{ paddingRight: 6 }}
          />
        }
      />
      <AuthButton
        label="Sign in"
        icon={
          <Ionicons
            name="logo-apple"
            size={24}
            color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
            style={{ paddingRight: 6 }}
          />
        }
      />
    </>
  );
}

function Header() {
  return (
    <ThemedView style={styles.topbar}>
      <ThemedText style={styles.textbg}>Panels</ThemedText>
      <ThemedText style={{}}>Sign in to save you data!</ThemedText>
    </ThemedView>
  );
}

function ThemeSelector() {
  return (
    <ThemedView style={{ paddingTop: 20 }}>
      <ThemedText style={styles.textbg}>Settings</ThemedText>
      <ThemedText style={{}}>Theme</ThemedText>
      <ThemedView
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <ThemeButton title="Dark" selected={false} colorScheme="dark" />
        <ThemeButton title="Light" selected={false} colorScheme="light" />
        <ThemeButton title="System" selected={false} colorScheme={null} />
      </ThemedView>
    </ThemedView>
  );
}

function ThemeButton({
  title,
  selected,
  colorScheme,
}: {
  title: string;
  selected: boolean;
  colorScheme: "light" | "dark" | null;
}) {
  const theme = useColorScheme() ?? "light";
  return (
    <Pressable
      style={{
        padding: 10,
        borderColor: theme === "light" ? Colors.light.text : Colors.dark.text,
        borderWidth: 1,
        borderRadius: 5,
        flex: 0.3,
      }}
      onPress={() => {
        Appearance.setColorScheme(colorScheme);
      }}
    >
      <ThemedText style={{ textAlign: "center", width: "100%" }}>
        {title}
      </ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  textbg: {
    fontSize: 25,
    fontWeight: "600",
  },
  topbar: {
    paddingTop: 20,
  },
  themeSelectorContainer: {
    flex: 1,
  },
  themeSelectorChild: {
    flex: 0.33,
  },
});
