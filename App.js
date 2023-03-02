import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
//import MusicPlayer from './info/Player';
import { NavigationContainer } from "@react-navigation/native";
//import  DrawerNavigator  from './navigation/DrawerNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import HomeScreen from "./screens/Home";
import PlaySongs from "./screens/Play2";
import Profile from "./screens/Profile";
import Search from "./screens/Search";
import Moreinfo from "./screens/Moreinfo";
import Profile1 from "./screens/pr2";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="PlaySongs" component={PlaySongs} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Moreinfo" component={Moreinfo} />
        <Stack.Screen name="Profile1" component={Profile1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;