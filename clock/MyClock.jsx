import React, { useState, useEffect } from'react';
import { StyleSheet, Text, View} from 'react-native';

function MyClock (props) {

  const [time, setTime] = useState(new Date());

  setInterval(() => {
      data = new Date();
      setTime(data);
  }, 1000);

  return (

    <View style={styles.container}>
      <View style={styles.clock}>
        <Text>{time.toUTCString()}</Text>
        <Text>{time.getFullYear()}.{time.getMonth()}.{time.getDate()}</Text>
      </View>
    </View>
  );
}

export default MyClock;

const styles = StyleSheet.create({
  container: {

  },

  clock: {

  }
});