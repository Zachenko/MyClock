import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MyClock from "./MyClock";

/*
1. npm install react-native-reanimated@1 --save --save-exact
2. npm install @react-navigation/native-stack
3. npm install @react-navigation/drawer
4. npx expo install react-native-gesture-handler react-native-reanimated
*/

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="USA" component={() => <MyClock timezone={6} image={'usa.png'}/>}/>
      <Drawer.Screen name="UTC" component={() => <MyClock timezone={3} image={'utc.png'}/>}/>
      <Drawer.Screen name="London" component={() => <MyClock timezone={2} image={'london.png'}/>}/>
      <Drawer.Screen name="Poland" component={() => <MyClock timezone={0} image={'poland.png'}/>}/>
      <Drawer.Screen name="Ukraine" component={() => <MyClock timezone={-1} image={'ukraine.png'}/>}/>
    </Drawer.Navigator>
  )
}

export default function App() {

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="DrawerScreen" component={DrawerNavigator}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )  
}