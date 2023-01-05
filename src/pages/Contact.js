import React, {useState} from "react";
import { Text, View, TextInput, Button } from 'react-native';

const Contact = ({navigation}) => {
    const [input, setInput] = useState({
        Name: "",
        Feedback: ""
    })
    return (
    <View >
      <Text > Contact Us </Text>
      <View>
        <TextInput 
          placeholder="Name"
          onChangeText={(text) => setInput({Name: text})}
        />
        <TextInput
          placeholder="Feedback"
          onChangeText={(text) => setInput({Feedback: text})}
        />
      </View>
      <Button
        title="Submit"
        onPress={() =>
            alert(input.Name + " " + input.Feedback)
        }
        />
      <Button
        title="Home"
        onPress={() =>
            navigation.navigate('Home')
        }
        />
    </View>
    )
}

export default Contact;