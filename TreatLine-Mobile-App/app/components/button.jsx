import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { router } from "expo-router";

const Button = () => {
    return (
        <TouchableOpacity>
            <View style={styles.maincontent}>
                <Text style={styles.text}>Submit</Text>
            </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({

    content: {
         justifyContent: 'center',
         
    },

    maincontent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'lightblue',
        height: 50,
        width: 350,
        borderRadius: 20,
        marginLeft: 20,
        marginTop: 20,
    },

    text: {
        fontSize: 24,
        fontWeight: 'bold',
        fontStyle: 'normal',
        color: 'black',
        justifyContent: 'center',
        marginTop: 5,
    }

});



export default Button;