import React, { Component } from "react";
import {  View,  Text,  StyleSheet,  SafeAreaView,  Platform,  StatusBar,  Image, ImageBackground, TouchableOpacity} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { LinearGradient } from 'expo-linear-gradient';
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { FlatList } from "react-native-gesture-handler";
export default class Profile1 extends Component{
render(){
  return(
    <View style={styles.container}>
    <ImageBackground source={require('../assets/pr2Bg.gif')} style={styles.pr2Bg}>
    </ImageBackground>
    <TouchableOpacity style={styles.pr2Bt} onPress={() =>
                        this.props.navigation.navigate("Profile")
                    }>
                        <Text style={styles.pr2Text}><center>Go back</center></Text>
                    </TouchableOpacity>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container:{
flex: 1,
backgroundColor: "black",
width: 403,
  },
  pr2Bg: {
prImage:{
flex:3,
marginBottom: -900,
marginTop: 650.5,
//marginLeft:90,
justifyContent: "center",
alignItems: "center",

},
  },
  pr2Bt:{
justifyContent: "center",
        alignItems: "center",
        margin: 5,
        marginLeft: 30,
        marginRight: 30,
        borderWidth: 4,
        borderColor: "gold",
        borderStyle: "inset",
        borderRadius:50,
        backgroundColor: "lavender",
        marginTop: 580,

  },
  pr2Text:{
fontSize: 25,
        color: 'black',
        justifyContent: "center",
        alignItems: "center",
        marginBottom:10,
        fontFamily:"belleza",
        
        marginLeft: -10,
  },
})