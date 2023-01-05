import React, {useEffect, useState} from "react";
import { Text, View, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
// import { data } from "../dummy";
import axios from 'axios';

const Home = ({navigation}) => {
    const [data, setData] = useState([])
    const renderItem = ({ item }) => (
        <TouchableOpacity 
        style={styles.bodyContainer}
        onPress={() =>navigation.navigate('About', {title: item.title})}>
        <Text>{item.id}</Text>
        </TouchableOpacity>
      );
    
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            setData(res.data)
        })
        .catch((err) => {
            console.log(err);
        })
    },[])


    return (
    <View>
        <Text>Home</Text>
        <Button
        title="About"
        onPress={() =>
            navigation.navigate('About')
        }
        />
        <Button
        title="Camera"
        onPress={() =>
            navigation.navigate('Camera')
        }
        />
        <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        />
    </View>
    )
}

const styles = StyleSheet.create({
    bodyContainer: {
        width:'100%',
        height:50, 
        justifyContent:'center', 
        alignItems:'center',
        backgroundColor:'grey',
    },
  });

export default Home;