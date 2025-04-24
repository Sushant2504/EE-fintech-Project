import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';



const PopularDoctor = ({imagesource, doctorname, specility, stars}) => {
     return(
         <View style={styles.content}>
             <Image src={imagesource} style={styles.img}></Image>
             <Text style={styles.maintext}>{doctorname}</Text>
             <Text style={styles.text}>{specility}</Text>
             <View></View>
         </View>
     );
}


const styles = StyleSheet.create({

        content: {
            height: 100,
            width: 100,
            backgroundColor: 'white',
            borderRadius: 10,
            marginBottom: 10,
            padding: 10,
            flexDirection: 'column',
        },

        img: {
            height: 70,
            width: 100,
        },

        maintext: {
            fontSize: 20,
            fontWeight: 'bold',
            fontStyle: 'normal',
            color: 'black',
            padding: 10,  
        },

        text: {
            fontSIze: 16,
            fontWeight: 'normal',
            fontStyle: 'normal',
            color: 'grey',
            padding: 10,
        },

});


export default PopularDoctor;