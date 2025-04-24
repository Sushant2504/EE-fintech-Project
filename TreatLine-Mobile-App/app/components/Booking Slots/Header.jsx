import { View, Text, TextInput, StyleSheet, Color, Image, FlatList } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { router } from "expo-router";
import tw from 'twrnc'


const Header = () => {
     return(
         <View style={tw `ml-4 flex-row content-start mt-5 `}>
               <View style={tw`h-8 w-8 rounded-xl bg-grey justify-center items-center ml-2 mr-2`}> <Image source={{uri: "https://cdn-icons-png.flaticon.com/128/4249/4249880.png"}}  style={tw`h-6 w-5`}></Image></View>
               <Text style={tw`text-base font-bold not-italic text-black ml-2 mt-1`}>Appointment Booking</Text>
         </View>
     );
}



export default Header;