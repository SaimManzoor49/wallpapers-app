import SplitScreen from '@/components/SplitScreen';
import { ThemedView } from '@/components/ThemedView';
import ThemeSafeAreaView from '@/components/ThemeSafeAreaView';
import { Colors } from '@/constants/Colors';
import { useLiberaryWallpapers, useLikedWallpapers, useSuggestedWallpapers, useWallpapers } from '@/hooks/useWallpappers';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default function ForYou() {
  const theme = useColorScheme() ?? "light";
  return (
    // <NavigationContainer>
    <ThemeSafeAreaView style={styles.container}>
      <Tab.Navigator style={{flex:1}}
      screenOptions={{
        tabBarActiveTintColor:Colors[theme].tint,
        tabBarStyle:{
        backgroundColor:Colors[theme].background
      },
    tabBarIndicatorStyle:{
      backgroundColor:Colors[theme].indicatior,
      height:5
    }
    }}
      >
      <Tab.Screen name="Liberary" component={LiberaryScreen} />
      <Tab.Screen name="Liked" component={LikedScreen} />
      <Tab.Screen name="Suggested" component={SuggestedScreen} />
    </Tab.Navigator>
    </ThemeSafeAreaView>
    // </NavigationContainer>
  );
}

const LiberaryScreen = ()=>{
  const wallpapers = useLiberaryWallpapers()
  return<ThemedView style={styles.container}>
  <SplitScreen wallpapers={wallpapers} />
  </ThemedView>
}
const LikedScreen = ()=>{
  const wallpapers = useLikedWallpapers()
  return<ThemedView style={styles.container}>
  <SplitScreen wallpapers={wallpapers} />
  </ThemedView>
}
const SuggestedScreen = ()=>{
  const wallpapers = useSuggestedWallpapers()
  return<ThemedView style={styles.container}>
  <SplitScreen wallpapers={wallpapers} />
  </ThemedView>
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})