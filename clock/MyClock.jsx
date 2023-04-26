import React, { useState } from'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

function MyClock (props) {

  let data = Date.parse(new Date())
  const [time, setTime] = useState(new Date(data - 1000 * 60 * 60 * props.timezone));

  setInterval(function() {
    let data = Date.parse(new Date())
    setTime(new Date(data - 1000 * 60 * 60 * props.timezone));
  }, 1000);

  return (

    <View style={styles.container}>
      <ImageBackground imageStyle={{borderRadius: '15%'}} style={styles.image} source={require(`./src/${props.image}`)} resizeMode="cover">
        <Text style={styles.time}>{time.toLocaleTimeString()}</Text>
        <Text style={styles.time}>{time.getFullYear()}.{time.getMonth() < 10 ? `0${time.getMonth()}` : time.getMonth()}.{time.getDate()}</Text>
      </ImageBackground>
    </View>
  );
}

export default MyClock;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: '4%',
    borderRadius: '15%',
    shadowColor: '#aaaaaa',
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 1,
    shadowRadius: 10
  },

  time: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',

  },

  image: {
    flex: 1,
    justifyContent: 'center',
  }
})