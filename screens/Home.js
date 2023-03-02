import React, { Component } from "react";
import {  View,  Text,  StyleSheet,  SafeAreaView,  Platform,  StatusBar,  Image, ImageBackground, TouchableOpacity} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { LinearGradient } from 'expo-linear-gradient';
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { FlatList } from "react-native-gesture-handler";
import { Linking } from 'react-native';
export default class HomeScreen extends Component {


    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground source={require('../assets/bg01.png')} style={styles.backgroundImage}>
                <Text style={styles.coText}><center>Contact us on</center></Text>
                      
                    <View style={styles.titleBar}>
                      <Image source={require("../assets/log.png")} style={styles.logImage}></Image>
                      <Text style={styles.appTag}>Vibe Your Eve</Text>
                    </View>
                    //Buttons
                      
          
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("PlaySongs")
                    }>
                  <LinearGradient
          style={styles.button}
          colors={['#95D4FF', '#AA89D1']}>
                        <Text style={styles.routeText}><i>Play Songs</i></Text>
                       <Image source={require("../assets/pls.png")} style={styles.routeImage}></Image>
                       </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Search")
                    }>
                    <LinearGradient
          style={styles.button}
          colors={['#95D4FF', '#AA89D1']}>
                        <Text style={styles.routeText}><i>Search Songs</i></Text>
                      <Image source={require("../assets/srh.png")} style={styles.routeImage}></Image>
                      </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Profile")
                    }>
                    <LinearGradient
          style={styles.button}
          colors={['#95D4FF', '#AA89D1']}>
                        <Text style={styles.routeText}><i>Know Yourself</i></Text>
                       <Image source={require("../assets/prf.png")} style={styles.routeImage}></Image>
                       </LinearGradient>
                    </TouchableOpacity>
                     <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Moreinfo")
                    }>
                    <LinearGradient
          style={styles.button}
          colors={['#95D4FF', '#AA89D1']}>
                        <Text style={styles.routeText}><i>More about us</i></Text>
                      <Image source={require("../assets/more.png")} style={styles.routeImage}></Image>
                      </LinearGradient>
                      </TouchableOpacity>
                      
                      
                      

                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"black"
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage:{
      flex:1,
      resizeMode: "cover",
      height:500,
      width:316.9
    },

    titleBar: {
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 470,
        marginLeft: -185,

        
    },
  /*  titleText: {
        fontSize: 45,
        fontWeight: "bold",
        color: "white",
        marginTop: 20,
        fontFamily: "amastic sc",
    },*/

    routeImage: {
        position: "relative",
        top: -60,
        right: -95,
        height: 75,
        width: 70,
        resizeMode: "contain",
    },
    logImage:{
      height: 250,
      width:250,
      justifyContent: "center",
      alignItems: "center",
      marginLeft: 185,
      marginTop: 60,
    },
    appTag:{
      fontFamily: "georgia",
      fontSize: 15,
      color: "white",
      marginLeft: 340,
      marginTop: 10,
    },
    /*coText:{
fontSize: 30,
color: "black",
fontFamily: "sansserif",
borderWidth: 4,
borderRadius: 25,
borderColor: "rgb(255, 165, 0)",
borderStyle: "dotted",
backgroundColor: "rgb(240, 240, 240)",
flex:0.025,
marginTop: 130,
marginLeft: 20,
marginRight: 20,

    },*/
     routeText: {
    fontSize: 25,
    fontFamily: 'belleza',
    color: 'black',
    marginBottom: 10,
    marginTop: 90,
    marginLeft: -10,
    },
        routeCard: {
        flex: 0.07,
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
       marginLeft: 30,
        marginRight: 30,
marginTop: 10,
        borderRadius:50,
    },
   button: {
    width: 251,
    height: 65.2,
    margin: 5,
    marginLeft: 30,
    marginRight: 30,
    borderRadius:50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});