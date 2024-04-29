import React, { useState } from 'react';
import { Button, Image, Modal, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export const Home = ({navigation})=>{
    const rooms = [
        {
            id:1,
            name:'Living Room',
            appliances:[
                {
                    id:101,
                    device:'Light'
                },
                {
                    id:102,
                    device:'Air Conditioner',
                },
                {
                    id:103,
                    device:'TV',
                },
                {
                    id:104,
                    device:'Ceiling Fan'
                }
            ]
        },
        {
            id:2,
            name:'Kitchen Room',
            appliances:[
                {
                    id:201,
                    device:'Light'
                },
                {
                    id:202,
                    device:'Refrigerator',
                },
                {
                    id:203,
                    device:'Oven',
                },
                {
                    id:204,
                    device:'Ceiling Fan'
                }
            ]
        },

        {
            id:3,
            name:'Bedroom',
            appliances:[
                {
                    id:301,
                    device:'Light'
                },
                {
                    id:302,
                    device:'Air Conditioner',
                },
                {
                    id:303,
                    device:'TV',
                },
                {
                    id:304,
                    device:'Ceiling Fan'
                }
            ]
        },
        {
            id:4,
            name:'BathRoom (Bedroom)',
            appliances:[
                {
                    id:401,
                    device:'Light'
                },
                {
                    id:402,
                    device:'Shower',
                },
                {
                    id:403,
                    device:'Water Heater',
                }
            ]
        },
        {
            id:5,
            name:'BathRoom (Kitchen)',
            appliances:[
                {
                    id:501,
                    device:'Light'
                },
                {
                    id:502,
                    device:'Shower',
                },
                {
                    id:503,
                    device:'Water Heater',
                },
                {
                    id:504,
                    device:'Washing Machine'
                }
            ]
        }
    ];
    
    return(
        <ScrollView style={styles.container}>
            <View style={styles.row}>
                {
                    rooms.map((item,index)=>{
                        return (
                          <Pressable
                            key={index}
                            style={styles.item}
                            onPress={() => {
                              navigation.navigate('Room',{name:'room',item:item})
                            }}
                          >
                            <Image source={require('../../assets/sample.jpg')} style={styles.itemImage}></Image>
                            <Text style={styles.itemName}>{item.name}</Text>
                          </Pressable>
                        );
                    })
                }
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignSelf:'center',
        padding:10,
        marginHorizontal:'auto',
        width:400,
    },
    row:{
        flexDirection: "row",
        flexWrap:'wrap',
        gap:15,
    },
    item:{
        flex:1,
        minWidth:'48%',
        maxWidth:'48%',
        height:'100%',
        aspectRatio:1/1,
        borderWidth:2,
        borderStyle:'solid',
        borderColor:'grey',
        borderRadius:10,
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:10,
    },
    itemImage:{
        width:'80%',
        height:'80%',
        marginHorizontal:'auto',
        aspectRatio:1/1,
    },
    itemName:{
        textAlign:'center',
    }

})