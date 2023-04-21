import React, { useState, useEffect } from'react';
import { StyleSheet, Text, View} from 'react-native';

export default function App() {

  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  
  return (

    <View style={styles.container}>
      <Text style={styles.clock}>{time}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },

  clock: {

  }
});