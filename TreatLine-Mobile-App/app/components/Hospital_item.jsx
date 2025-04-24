import { View, Text, TextInput, StyleSheet, Color, Image, FlatList } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { router } from "expo-router";



const HospitalItem = ({ hospital }) => {


     return (
          <View style={styles.maincontent}>

               <Image source={{ uri: hospital.image }} style={styles.img} />
               <View style={styles.textview}>
                    <Text style={styles.text}>{hospital.title}</Text>
                    <Text style={styles.smalltext}>{hospital.address}</Text>
               </View>
          </View>
     );
}


const styles = StyleSheet.create({

     maincontent: {
          display: 'flex',
          width: 160,
          borderRadius: 10,
          marginTop: 20,
          marginLeft: 10,
          marginRight: 10,
          borderWidth: 1, // Required for border to show
          borderColor: 'grey',
     },

     img: {
          width: '100%',
          height: 140,
          borderRadius: 10,
     },

     text: {
          fontSize: 14,
          marginTop: 3,
          fontWeight: 'bold',
          fontStyle: 'normal',
          justifyContent: 'center',
          textAlign: 'center',

     },

     smalltext: {
          fontSize: 7,
          fontWeight: 'normal',
          fontStyle: 'normal',
          justifyContent: 'center',
          textAlign: 'center',
     },

     textview: {
          marginTop: 5,
     }

});


export default HospitalItem;