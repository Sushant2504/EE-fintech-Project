import { View, Text, TextInput, StyleSheet, Color, Image, FlatList } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { router } from "expo-router";


const AIHeader = () => {
    return (
         <View style={styles.content}>
               <Text style={styles.text1}>Welcome to TreatLine AI-Doctor</Text>
         </View>
    );
}


const styles = StyleSheet.create({
     
    content: {
         display: 'flex',
         flexDirection: 'row',
         justifyContent: 'center',
         marginTop: 20,
    },

    text1: {
        fontSize: 22,
        fontWeight: 'bold',
        fontStyle: 'normal',
        color: 'black',
    }
})


export default AIHeader;