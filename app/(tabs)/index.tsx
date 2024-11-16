import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default function ForYou() {
  return (
    // <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="Liberary" component={HomeScreen} />
      <Tab.Screen name="Liked" component={ProfileScreen} />
      <Tab.Screen name="Suggested" component={ProfileScreen} />
    </Tab.Navigator>
    // </NavigationContainer>
  );
}

const HomeScreen = ()=>{
  return<><Text>Home</Text></>
}
const ProfileScreen = ()=>{
  return<Text>Home</Text>
}