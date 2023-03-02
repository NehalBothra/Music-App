import React, { Component } from "react";
import {  View,  Text,  StyleSheet,  SafeAreaView,  Platform,  StatusBar,  Image, ImageBackground, TouchableOpacity, Dimensions} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { LinearGradient } from 'expo-linear-gradient';
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { FlatList } from "react-native-gesture-handler";

export default class HomeScreen extends Component {


    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground source = {require("../assets/miHm.gif")} style={styles.miBg}>
                  
                </ImageBackground> 
                <Image source={require("../assets/elib.jpg")} style={styles.miEl}></Image>
                <Image source={require("../assets/iss.png")} style={styles.miEl2}></Image>
                <Image source={require("../assets/mc.png")} style={styles.mcImg}></Image>
                <Image source={require("../assets/org.png")} style={styles.orgImg}></Image> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container:{
//     flex: 1,
// backgroundColor:"black",
    flex:1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
    textAlign: 'center',
    backgroundColor: "black"
  },
  droidSafeArea:{
   marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 
  },

  miBg:{
height: 800,
width:400,
  },
  miEl:{
width:400,
height:300,
marginTop: 30,
  },
  miEl2:{
width:400,
height:300,
marginTop: 30,
  },
mcImg:{
width:400,
height:300,
marginTop: 30,
},
orgImg:{
width:400,
height:300,
marginTop: 30,
},
})