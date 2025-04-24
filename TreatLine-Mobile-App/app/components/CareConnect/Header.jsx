import { View, Text, TextInput, StyleSheet, Color, Image, FlatList } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { router } from "expo-router";
import tw from 'twrnc'


const Header = () => {
     return(
         <View style={tw `ml-4 flex-row content-start mt-5`}>
               <Image source={{uri: "https://cdn-icons-png.flaticon.com/128/4543/4543046.png"}}  style={tw`h-6 w-5 mr-2`}></Image>
               <Text style={tw`text-base font-bold not-italic text-black ml-2`}>Care Connect</Text>
         </View>
     );
}



export default Header;