import React from "react";
import { Text, View, Image, Button } from 'react-native';

const Profile = ({navigation, route}) => {
    let imagePath = route?.params?.Picture ? route?.params?.Picture : 'https://images.unsplash.com/photo-1526045612212-70caf35c14df'
    let updatedName = route?.params?.Name ? route?.params?.Name : 'Name sername';
    console.log(route.params, "pppppppppppp");
    return (
    <View style={{flex: 1, display: 'flex', alignItems: 'center'}}>
        <Image source={{uri: imagePath}} 
        style={{width: 90, height: 90, borderRadius: 100, alignContent: 'center'}} />
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>{updatedName}</Text>
        <Button
        title="Edit"
        onPress={() =>
            navigation.navigate('Edit')
        }
        />
    </View>
    )
}

export default Profile;