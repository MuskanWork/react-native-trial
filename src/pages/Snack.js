import React from "react";
import { View, StyleSheet, FlatList } from 'react-native';

const Snack = () => {
    var box = [];
    for(let i=0; i<10; i++){
        box.push(i)
    }

    const renderItem = ({item}) => {
        return <View key = {item} style={styles.SmallSquareShapeView}>
            <FlatList
            data={box}
            renderItem={(item)=> <View key = {item} style={styles.SmallSquareShapeView}></View>}
            keyExtractor={item => item}
            />
        </View>
    }

    return (
    <View style={styles.container}>
        <FlatList
        data={box}
        renderItem={renderItem}
        keyExtractor={item => item}
        />
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginBottom: 10,
      flexDirection: "row"
    },
   
    SquareShapeView: {
      width: 100,
      height: 100,
      backgroundColor: 'red',
    },
    SmallSquareShapeView: {
        width: 40,
        height: 40,
        borderWidth: 1,
    }
})

export default Snack;