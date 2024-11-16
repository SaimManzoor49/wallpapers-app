import SplitScreen from '@/components/SplitScreen';
import { useLiberaryWallpapers, useLikedWallpapers, useSuggestedWallpapers, useWallpapers } from '@/hooks/useWallpappers';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default function ForYou() {
  return (
    // <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="Liberary" component={LiberaryScreen} />
      <Tab.Screen name="Liked" component={LikedScreen} />
      <Tab.Screen name="Suggested" component={SuggestedScreen} />
    </Tab.Navigator>
    // </NavigationContainer>
  );
}

const LiberaryScreen = ()=>{
  const wallpapers = useLiberaryWallpapers()
  return<View style={styles.container}>
  <SplitScreen wallpapers={wallpapers} />
  </View>
}
const LikedScreen = ()=>{
  const wallpapers = useLikedWallpapers()
  return<View style={styles.container}>
  <SplitScreen wallpapers={wallpapers} />
  </View>
}
const SuggestedScreen = ()=>{
  const wallpapers = useSuggestedWallpapers()
  return<View style={styles.container}>
  <SplitScreen wallpapers={wallpapers} />
  </View>
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})