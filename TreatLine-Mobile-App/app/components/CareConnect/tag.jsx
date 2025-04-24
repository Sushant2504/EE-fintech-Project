import { View, Text, TextInput, StyleSheet, Color, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, Component } from 'react'
import { Menu, MenuOptions, Menuoption, MenuTrigger} from 'react-native-popup-menu'
import { Ionicons } from '@expo/vector-icons'

import tw from 'twrnc'

const Tag = ({textcontain}) => {
     return(
           <View style={tw`h-12 w-25 bg-gray-200 rounded-xl justify-center items-center ml-2 mr-2`}>

             <Text style={tw`text-sm text-black`}>{textcontain}</Text>

           </View>
     );
}

export default Tag;