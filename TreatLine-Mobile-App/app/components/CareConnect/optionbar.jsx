import { View, Text, TextInput, StyleSheet, Color, Image, FlatList, TouchableOpacity} from 'react-native'
import React, {useState, useRef} from 'react'
import { Ionicons } from '@expo/vector-icons'
import tw from 'twrnc'

const OptionBar = ({imgSource, contexttext}) => {
     return(
         <View style={tw`flex-row h-5 w-15 bg-transparent justify-center`}>
              <Image source={{uri: {imgSource}}} style={tw`ml-2 mr-2 h-5 w-5`}></Image>
              <Text style={tw`text-sm text-black ml-2`}>{contexttext}</Text>
         </View>
     );
}

export default OptionBar;