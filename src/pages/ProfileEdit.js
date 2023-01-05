import React, {useState} from "react";
import { Text, View, Button, TextInput } from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const ProfileEdit = ({navigation}) => {
    const [input, setInput] = useState('')
    const [imageUri, setImageUri] = useState('')
    const [selectOptions, setSelectOptions] = useState(true);

    const openCamera = async () => {
        const options = {
            storageOptions : {
                path: 'images',
                mediaType: 'photo',
            },
        }

        try {
            const result = await launchCamera(options);
            setImageUri(result.assets[0].uri);
            setSelectOptions(true);
        } catch(err) {
            console.log("err in camera#########333", err);
        }
    }

    const openImageLib = async() => {
        const options = {
            storageOptions : {
                path: 'images',
                mediaType: 'photo',
            },
            saveToPhotos:true,
        }

        try{
            const result = await launchImageLibrary(options);
            console.log("------------wwwwwwwwwwwww", result.assets[0].uri)
            setImageUri(result.assets[0].uri);
            setSelectOptions(true);
        }
        catch(err){
            console.log("err in galary########", err);
        }  

    }

console.log("$$$$$$$$$$$$$$$$$$$$", imageUri);
    return (
    <View style={{flex: 1, display: 'flex', alignItems: 'center'}}>
        {selectOptions ?
        <Button
        title="EditProfilePhoto"
        onPress={() =>
            setSelectOptions(false)
        }
        />
        :
        <>
            <Button
            title="Camera"
            onPress={() =>
                openCamera()
            }
            />
            <Button
            title="Galary"
            onPress={() =>
                openImageLib()
            }
            />
        </>
    }
        <TextInput 
          placeholder="Enter your full name..."
          onChangeText={(text) => setInput(text)}
        />
        <Button
            title="Save"
            onPress={() =>navigation.navigate('UserProfile', {Name: input, Picture: imageUri})}
            />
    </View>
    )
}

export default ProfileEdit;