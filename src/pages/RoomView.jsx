import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";


export const RoomView = ({route})=>{
    const {name,item} = route.params;
    const appliances = item.appliances;
    return(
        <ScrollView style={styles.container}>
            <Text>appliances</Text>
            <View style={styles.row}>
            {
                appliances.map((item,index)=>{
                    return(
                        <Pressable
                            key={index}
                            style={styles.item}
                            onPress={() => {
                              alert(item.device)
                            }}
                          >
                            <Image source={require('../../assets/sample.jpg')} style={styles.itemImage}></Image>
                            <Text style={styles.itemName}>{item.device}</Text>
                          </Pressable>
                    )
                })
            }
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignSelf:'center',
        flex:1,
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
        paddingVertical:10
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