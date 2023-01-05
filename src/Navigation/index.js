import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Camera from '../pages/Camera';
import StackComponent from './stackComponent';
import Ludo from '../pages/Ludo';
import Snack from '../pages/Snack';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const NavigatorComponent = () => {
  return (
    // <Stack.Navigator>
    // <Stack.Screen
    //     name="Home"
    //     component={Home}
    //     options={{title: 'Welcome'}}
    // />
    // <Stack.Screen name="About" component={About} />
    // <Stack.Screen name="Contact" component={Contact} />
    // <Stack.Screen name="Camera" component={Camera} />
    // </Stack.Navigator>

    <Tab.Navigator screenOptions={{
        headerShown: false
      }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Ludo" component={Ludo} />
        <Tab.Screen name="Snack" component={Snack} />
        {/* <Tab.Screen name="Profile" component={StackComponent} /> */}
        {/* <Tab.Screen name="About" component={About} />
        <Tab.Screen name="Contact" component={Contact} />
        /<Tab.Screen name="Camera" component={Camera} /> */}
    </Tab.Navigator>
  );
};

export default NavigatorComponent;