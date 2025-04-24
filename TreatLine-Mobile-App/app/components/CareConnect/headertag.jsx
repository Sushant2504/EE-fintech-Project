import { View, Text, TextInput, StyleSheet, Color, Image, FlatList } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { router } from "expo-router";
import tw from 'twrnc'


const HeaderTag = ({ containtext }) => {
    return (
        <View style={tw`justify-center items-center`}>
            <View style={tw`h-10 w-40 mt-3 mb-2 rounded-xl bg-black text-white drop-shadow justify-center items-center`}>
                <Text style={tw`text-sm text-white`}>{containtext}</Text>
            </View>
        </View>
    );
}


export default HeaderTag;