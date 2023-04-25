import React, { useState, useEffect } from'react';
import { StyleSheet, Text, View} from 'react-native';

function MyClock (props) {

  let data = Date.parse(new Date())
  const [time, setTime] = useState(new Date(data - 1000 * 60 * 60 * props.timezone));

  setInterval(function() {
    let data = Date.parse(new Date())
    setTime(new Date(data - 1000 * 60 * 60 * props.timezone));
  }, 1000);

  return (

    <View>
      <Text>{time.toLocaleTimeString()}</Text>
      <Text>{time.getFullYear()}.{time.getMonth()}.{time.getDate()}</Text>
    </View>
  );
}

export default MyClock;