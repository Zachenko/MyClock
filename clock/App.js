import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MyClock from './MyClock';

/*
1. npm install react-native-reanimated@1 --save --save-exact
2. npm install @react-navigation/native-stack
3. npm install @react-navigation/drawer
4. npx expo install react-native-gesture-handler react-native-reanimated
*/

export default function App() {

  return (
    <View>
      <MyClock />
      <MyClock />
      <MyClock />
      <MyClock />
      <MyClock />
    </View>
  )  
}