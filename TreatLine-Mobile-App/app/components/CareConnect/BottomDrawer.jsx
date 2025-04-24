import { View, Text, TextInput, StyleSheet, Color, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, Component } from 'react'
import { Menu, MenuOptions, Menuoption, MenuTrigger} from 'react-native-popup-menu'
import { Ionicons } from '@expo/vector-icons'
import { router } from "expo-router";
import OptionBar from './optionbar'
import tw from 'twrnc'


const BottomDrawer = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (text) => {
        setInputValue(text); // Update the state with the typed text
    };


    return (
        <View style={tw`h-[200]px w-full flex-row justify-center mt-30`}>

            <Menu>
               
                <MenuTrigger>
                    <TouchableOpacity style={tw`h-10 w-10 bg-gray-300 rounded-2xl mr-4 mt-1 justify-center items-center`}>
                        
                            <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/3524/3524388.png" }} style={tw`h-5 w-5`}></Image>
                        
                    </TouchableOpacity>
                </MenuTrigger>

               
                <MenuOptions>
                   <Menuoption><OptionBar imgSource="https://cdn-icons-png.flaticon.com/128/833/833281.png" contexttext="Photo"/></Menuoption>
                   <Menuoption><OptionBar imgSource="https://cdn-icons-png.flaticon.com/128/2956/2956744.png" contexttext="Camera" /></Menuoption>
                   <Menuoption><optionBar imgSource="https://www.flaticon.com/free-icon/folder_18445116" contexttext="Folder"/></Menuoption>
                </MenuOptions>
            </Menu>



            <View style={tw`h-12 w-75 bg-white border-gray-500 flex-row rounded-xl`}>
                <TextInput placeholder="Give your Symptoms ..."
                    value={inputValue}
                    onChangeText={handleInputChange} style={tw`text-black w-55 ml-1`}></TextInput>
                <TouchableOpacity style={tw`justify-center mr-2`}>
                    <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/3138/3138411.png" }} style={tw`h-5.5 w-5.5 color-black`}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={tw`justify-center ml-2`} onPress={() => router.push('BookingScreen')}>
                     <Image source={{uri: "https://cdn-icons-png.flaticon.com/128/724/724954.png"}} style={tw`h-5.5 w-5.5 color-black`}></Image>
                </TouchableOpacity>
            </View>

        </View>
    );
}



export default BottomDrawer;