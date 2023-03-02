import React, { Component } from "react";
import {  View,  Text,  StyleSheet,  SafeAreaView,  Platform,  StatusBar,  Image, ImageBackground, TouchableOpacity,  TextInput} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { LinearGradient } from 'expo-linear-gradient';
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { FlatList } from "react-native-gesture-handler";

export default class Profile extends Component{
render() {
  return (
    <View style={styles.container}>
    <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground source={require('../assets/muBg.gif')} style={styles.prfBg}>
  
   <TouchableOpacity style={styles.prBt} onPress={() =>
                        this.props.navigation.navigate("Profile1")
                    }>
                        <Text style={styles.prText}><center>Click here</center></Text>
                    </TouchableOpacity>

</ImageBackground>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container:{
flex:1,
backgroundColor: "goldenrod",
  },
droidSafeArea: {
marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
prfBg:{
flex:1,
//resizeMode: "cover",
height:650,
width:331,
},
/*prImage:{
flex:3,
marginBottom: -900,
marginTop: 650.5,
//marginLeft:90,
justifyContent: "center",
alignItems: "center",

},*/
/*prText: {
fontSize: 28,
color: "lavender",
fontFamily: "platino",
borderStyle: "inset",
borderColor: "white",
marginTop: 650,
},*/
prText:{
    fontSize: 25,
        color: 'black',
        justifyContent: "center",
        alignItems: "center",
        marginBottom:10,
        fontFamily:"belleza",
        
        marginLeft: -10,
        
},
prBt:{
  //flex: 0.07,
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
        marginLeft: 30,
        marginRight: 30,
        borderWidth: 4,
        borderColor: "#6a5acd",
        borderStyle: "inset",
        borderRadius:50,
        backgroundColor: "lavender",
        marginTop: 655,

}
    
})