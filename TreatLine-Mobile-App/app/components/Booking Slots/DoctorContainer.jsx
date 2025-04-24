import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Stack } from 'expo-router/stack';
import { FontAwesome } from '@expo/vector-icons'; 

import tw from 'twrnc'


const DoctorContainer = ({doctor}) => {
     return(
         <ScrollView >
            <View style={tw`justify-center items-center mt-3`}>
            <View style={tw`h-20 w-90 rounded-xl bg-white drop-shadow flex-row justify-start mt-1 mb-1 `}>
              <Image source={{uri: doctor.img}} style={tw`h-15 w-15  rounded-xl mt-2 mb-2 ml-3 mr-2`}></Image>
    
              <View style={tw` flex-column justify-center items-center ml-4`}>
                  <Text style={tw`text-base text-black font-bold mt-1 mb-1`}>{doctor.name}</Text>
                  <Text style={tw`text-sm text-grey font-normalmt-1 mb-1`}>{doctor.speciality}</Text>
              </View>
            </View>
          
         </View>
         </ScrollView>
     );
}


export default DoctorContainer;