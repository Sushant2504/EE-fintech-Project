import { View, Text, TextInput, StyleSheet, Color, Image, FlatList } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { router } from "expo-router";


const SubHeading = ({ subHeadingtitle }) => {

    return (
        <View style={styles.content}>
            <Text style={styles.text1}> {subHeadingtitle} </Text>
            <View style={styles.horizontalSpacer}/>
            <Text style={styles.text2}> See All </Text>
        </View>
    );
}


const styles = StyleSheet.create({

    content: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    text1: {
        fontSize: 18,
        fontFamily: 'normal',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontFamily: 'appfont-semi',
        marginLeft: 10,
    },


    text2: {
        fontSize: 14,
        fontWight: 'normal',
        fontStyle: 'normal',
        fontFamily: 'appfont-semi',
        color: 'blue',
        marginRight: 10,
        marginTop: 2,
    },


    horizontalSpacer: {
         width: 160,
    }


});

export default SubHeading;