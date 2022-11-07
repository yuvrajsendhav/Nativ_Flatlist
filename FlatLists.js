import { StyleSheet, Text, View,FlatList, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useState , useEffect } from 'react'



const FlatLists = () => {
  
  
    const mydata = [
        {
        id:1,
        name:'Home',
        image: require('../src/image/home.jpg'),
    },
    {
        id:2,
        name:'About',
        image: require('../src/image/aboutimg.jpg'),
    },
    {
        id:3,
        name:'Contact',
        image: require('../src/image/contactus.webp'),
    },
    {
        id:4,
        name:'Notification',
        image: require('./image/notification.webp'),
    },
    {
        id:5,
        name:'Service',
        image: require('../src/image/serviceimg.jpg'),
    },
]
const Fetchdata = ( {item} ) => (
  
  <View style={styles.item}>
    <View style={styles.avatarContainer}>
      <Image source={item.image} style={styles.avatar} />
    </View>
  <Text style={styles.name}>{item.name}</Text>
  </View>
  )

  HeaderComponent = () =>{
    return <Text style={styles.Listheadline} >FlatList Header</Text>
  }

  itemseparator = () =>{
    return <View style={styles.separator} />
  }
  
  return (
    <SafeAreaView >
      <FlatList 
      ListHeaderComponentStyle={styles.listHeader}
      ListHeaderComponent={HeaderComponent}
      data= {mydata}
      renderItem={Fetchdata}
      ItemSeparatorComponent={itemseparator}
      ListEmptyComponent={<Text>There is no data</Text>}
      
      />
      
    </SafeAreaView>

  )
}

export default FlatLists;

const styles = StyleSheet.create({
  listHeader:{
   height : 55,
   alignItems:'center',
   justifyContent:'center'
  },

Listheadline:{
  color:'#333',
  fontSize:21,
  fontWeight:'bold'
},
item:{
  flex:1,
  flexDirection:'row',
  alignItems:'center',
  paddingVertical:13
},
avatarContainer:{
  backgroundColor:'#D9D9D9',
  borderRadius:100,
  height:89,
  width:89,
  justifyContent:'center',
  alignItems:'center'
},
avatar:{
  height:80,
  width:80
},
name:{
  fontWeight:'600',
  fontSize:16,
  marginLeft:13,
},
separator:{
  height:1,
  width:"100%",
},
Loadmorestyle:{
backgroundColor:'green',
width:150,
height:60,
color:'white',
textAlign:'center',
justifyContent:'center',
alignItems:'center',
marginLeft:150,
fontSize:140
}
})