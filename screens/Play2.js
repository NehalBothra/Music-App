import React, { useEffect, useRef, useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Image,
  FlatList,
  Animated,
  
} from 'react-native';
import Constants from 'expo-constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Slider from '@ptomasroos/react-native-multi-slider';
import { Audio } from 'expo-av';
import songs from '../info/data';
import { RFValue } from 'react-native-responsive-fontsize';
import { LinearGradient } from 'expo-linear-gradient';
const { width, height } = Dimensions.get('window');

var playSound = async () => {
  console.log("prssed in playsound")
    await Audio.Sound.createAsync(
      {
        uri: '',
      },
      { shouldPlay: true }
    );
  };


const MoosicPlayer = () => {

  const scrollX = useRef(new Animated.Value(0)).current;
  const [songIndex, setSongIndex] = useState(0);
  const songSlider = useRef(null);
  useEffect(() => {
    scrollX.addListener(({ value }) => {
      //  console.log('scrollX ',scrollX);
      // console.log('width ',width);
      const index = Math.round(value / width);
      setSongIndex(index);
      //  console.log('index ',index)
    });
    return () => {
      scrollX.removeAllListeners();
    };
  });
  const skipToNext = () => {
    songSlider.current.scrollToOffset({ offset: (songIndex + 1) * width });
  };
  const skipToPrevious = () => {
    songSlider.current.scrollToOffset({ offset: (songIndex - 1) * width });
  };
  const renderSongs = ({ index, item }) => {
    return (
      <View
        style={{
          width: width,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
    {/*gets artwork image*/}
        <View style={styles.artworkWrapper}>
          <Image source={item.image} style={styles.artworkImage} />
        </View>
      </View>
    );
  };

  // const playSound = async () => {
  //   console.log("press")
  //   await Audio.Sound.createAsync(
  //     {
  //       url:
  //         'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3',
  //     },
  //     { shouldPlay: true }
  //   );
  // };


  return (
    <SafeAreaView style={styles.containerA}>
      <View style={styles.container}>
        <View style={{ width: width }}>
        {/*displays artwork image*/}
          <Animated.FlatList
            ref={songSlider}
            data={songs}
            renderItem={renderSongs}
            keyExtractor={(item) => item.id}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: { x: scrollX },
                  },
                },
              ],
              { useNativeDriver: true }
            )}
          />
        </View>
        <View>
        {/*display song title and atrist*/}
          <Text style={styles.title}>{songs[songIndex].title}</Text>
          <Text style={styles.artist}>{songs[songIndex].artist}</Text>
        </View>
        <View>
          <Slider
            style={{ align: 'center' }}
            value={10}
            minimumValue={0}
            maximumValue={100}
            thumbTintColor="#FFD369"
            minimumTrackTintColor="#FFD369"
            maximumTrackTintColor="#FFFFFF"
            onSlidingComplete={() => {}}
          />
        </View>
        <View style={styles.progressLabel}>
          <Text style={styles.progressLabelText}>0:00</Text>
          <Text style={styles.progressLabelText}>4:00</Text>
        </View>

        <View style={styles.musicControls}>
          <TouchableOpacity onPress={skipToPrevious}>
            <Ionicons
              name="play-skip-back-outline"
              size={35}
              color="#FFD369"
              style={{ marginTop: 15 }}
            />
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => {
          
          playSound();
        }}>
            <Ionicons
              name={'ios-play-circle-outline'}
              size={60}
              color="#FFD369"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={skipToNext}>
            <Ionicons
              name="play-skip-forward-outline"
              size={35}
              color="#FFD369"
              style={{ marginTop: 15 }}
            />
          </TouchableOpacity>
        </View>
        <StatusBar barStyle="light-content" />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomControls}>
          <View style={styles.likeButton}>
              <Ionicons name={'heart'} size={RFValue(30)} color={'yellow'}/>
            </View>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="repeat" size={30} color="#777777" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="share-outline" size={30} color="#777777" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="ellipsis-vertical" size={30} color="#777777" />
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity style={styles.btCard} onPress={() =>
                        this.props.navigation.navigate("HomeScreen")
                    }>
                        <Text style={styles.btText}>Go Back to HomeScreen</Text>
                    </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MoosicPlayer;


const styles = StyleSheet.create({
  containerA: {
    flex: 1,
    backgroundColor: '#003366',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    borderTopColor: '#393E46',
    borderTopWidth: 1,
    width: width,
    allignItems: 'center',
    paddingVertical: 15,
  },
  bottomControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    alignItems: 'center',
    textAlign: 'center',
    alignSelf: 'center',
  },
  artworkWrapper: {
    width: 300,
    height: 340,
    marginBottom: 25,
  },
  artworkImage: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
    justifyContent: 'center',
    alignSelf: 'center',
    allignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    color: '#EEEEEE',
  },
  artist: {
    fontSize: 16,
    fontWeight: '200',
    textAlign: 'center',
    color: '#EEEEEE',
  },
  progressLabel: {
    width: 340,
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'center',
    alignSelf: 'center',
    padding: 10,
  },
  progressLabelText: {
    color: '#FFFFFF',
  },
  musicControls: {
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  
  btText:{
fontSize: 25,
        color: 'black',
        justifyContent: "center",
        alignItems: "center",
        //marginBottom:10,
        fontFamily:"belleza",
        
        //marginLeft: -10,
  },
  btCard:{
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
        marginTop: 10,
  },
  likeButton:{
width: RFValue(160),
    height: RFValue(40),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#eb3948',
    borderRadius: RFValue(30),
  
  },
  likeText:{
 color: 'white',
    fontFamily: 'Bubblegum-Sans',
    fontSize: RFValue(25),
    marginLeft: RFValue(5),
  },
});
