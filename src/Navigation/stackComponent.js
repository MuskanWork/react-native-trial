import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import Profile from "../pages/Profile";
import ProfileEdit from "../pages/ProfileEdit";

const Stack = createStackNavigator();

const StackComponent = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="UserProfile" component={Profile} />
            <Stack.Screen name="Edit" component={ProfileEdit} />
        </Stack.Navigator>
    )
}

export default StackComponent;