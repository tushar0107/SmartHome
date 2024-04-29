import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Header = ()=>{

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Dashboard</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding:10,
        alignSelf:'flex-start'
    },
    text:{
        fontSize:24,
    }
})