import { View, Text, TextInput, StyleSheet, Color, Image, FlatList } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { router } from "expo-router";

import tw from 'twrnc'

const _slots = [
     {
        id: 0,
        slot: "6.00-9.00",
        event: "am"
     },
     {
        id: 0,
        slot: "9.00-12.00",
        event: "am"
     },
     {
        id: 0,
        slot: "12.00-15.00",
        event: "pm"
     },
     {
        id: 0,
        slot: "15.00-18.00",
        event: "pm"
     },
     {
        id: 0,
        slot: "18.00-21.00",
        event: "pm"
     },
     {
        id: 0,
        slot: "21.00-24.00",
        event: "pm"
     },
     {
        id: 0,
        slot: "00.00-3.00",
        event: "am"
     },
     {
        id: 0,
        slot: "3.00-6.00",
        event: "am"
     }
];



const _remaindtime = {
     
}


const Slots = () => {
     return(
         <View style={tw`h-90 w-70 bg-white drop-shadow rounded-xl flex-column `}>
              <Text style={tw`text-lg text-black font-bold mt-2 mb-2 items-center`}>Avaible Time</Text>
              <View style={tw`justify-center items-center`}>
                    <FlatList
                       
                    />
              </View>
         </View>
     );
}

export default Slots;