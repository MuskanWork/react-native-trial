import React from "react";
import { Text, View, Button } from 'react-native';

const About = ({navigation, route}) => {
    return (
    <View>
        <Text>About</Text>
        <Button
        title="Contact"
        onPress={() =>
            navigation.navigate('Contact')
        }
        />
        {route.params && <Text>{route.params.title}</Text>}
    </View>
    )
}

export default About;