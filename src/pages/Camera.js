import React, {useState} from "react";
import { Text, View, Button, Image } from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Camera = () => {
    const [imageUri, setImageUri] = useState('')
    const openCamera = async () => {
        const options = {
            // storageOptions : {
            //     path: 'images',
            //     mediaType: 'photo',
            // },
            // saveToPhotos:true,
            // includeBase64:true,
        }

        try {
            const result = await launchCamera(options);
            console.log("------------", result)
            setImageUri(result.uri);
        } catch(err) {
            console.log("err in camera-----------", err);
        }
    }

    const openImageLib = () => {
        const options = {
            storageOptions : {
                path: 'images',
                mediaType: 'photo',
            },
            saveToPhotos:true,
            includeBase64:true,
        }

        launchImageLibrary(options, response => {
            if(response.didCancel){
                alert('user cancel camera uses', response.didCancel)
            }
            else if(response.error){
                alert('error while open camera', response.error)
            }
            else if(response.errorCode){
                alert('error code', response.errorCode)
            }
            else if(response.errorMessage){
                alert('error message', response.errorMessage)
            }
            else{
                alert(response);
                setImageUri(response.uri)
            }
        })
    }
    return (
    <View>
        <Text>Camera</Text>
        <Button
        title="OPEN CAMERA"
        onPress={() =>
            openCamera()
        }
        />
        {imageUri &&
        <Image style={{width: '40px', height: '40px', borderRadius: '15px'}} source={imageUri} />
        }
        <Button
        title="OPEN ImageLibrary"
        onPress={() =>
            openImageLib()
        }
        />
    </View>
    )
}

export default Camera;