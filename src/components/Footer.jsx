import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export const Footer = ()=>{

    return(
        <View style={styles.container}>
            <Text>Footer</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position:'fixed',
        bottom:0,
        padding:20,
    }
});