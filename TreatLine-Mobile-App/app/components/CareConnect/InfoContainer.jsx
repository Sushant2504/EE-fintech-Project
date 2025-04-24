import { View, Text, TextInput, StyleSheet, Color, Image, FlatList } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { router } from "expo-router";
import tw from 'twrnc'

const InfoContainer = ({Infotext}) => {
     return(
         <View style={tw`h-60 w-70 bg-grey rounded-xl justify-center items-center`}>
             <Text>{Infotext}</Text>
         </View>
     );
}


export default InfoContainer;