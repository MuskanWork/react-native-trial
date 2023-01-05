import React from "react";
import { Text, View, StyleSheet, FlatList } from 'react-native';

const Ludo = () => {
    const Players = (color) => {
        return (
            <View style={{ flex: 2, backgroundColor: color}}>

            </View>
        )
    }
    return (
    <View style={styles.container}>
        <Text style={styles.Heading}> Ludo Game! </Text>
        <View style={styles.subContainer}>
            <View style={styles.block}>
                {Players('red')}
                <View style={{flex: 1}}>
                    <FlatList
                        data={[...Array(6).keys()]}
                        renderItem={(item)=> <View style={styles.smallSquare}></View>}
                        keyExtractor={item => item}
                    />
                </View>
                {Players('green')}
            </View> 
            <View style={styles.horizontalBlock}>
                <FlatList
                    data={[...Array(6).keys()]}
                    renderItem={(item)=> <View style={styles.smallSquare}></View>}
                    keyExtractor={item => item}
                />
            </View> 
            <View style={styles.block}>
                {Players('yellow')}
                <View style={{flex: 1}}>
                    <FlatList
                        data={[...Array(6).keys()]}
                        renderItem={(item)=> <View style={styles.smallSquare}></View>}
                        keyExtractor={item => item}
                    />
                </View>
                {Players('blue')}
            </View>
        </View>      
    </View>
    )
}

const styles = StyleSheet.create({
 
    container: {
      backgroundColor: '#daa520',
      flex: 1,
      width: '100%',
      height: '100%',
      alignContent: 'center',
      justifyContent: 'center'
    },
    Heading: {
        fontSize: 40,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginBottom: 10
    },
    subContainer: {
        width: '100%',
        height: '60%',
        borderWidth: 2,
        borderColor: 'black',
        alignSelf: 'center',
        backgroundColor: 'white'
    },
    block: {
        borderWidth: 2,
        height: "40%",
        flexDirection: 'row'
    },
    horizontalBlock: {
        flex: 2,
        borderWidth: 2,
        flexDirection: 'column'
    },
    smallSquare: {
        width: 25, 
        height: 29, 
        borderWidth: 2
    }
})

export default Ludo;