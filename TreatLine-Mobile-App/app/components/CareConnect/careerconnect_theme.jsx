import { View, Text, TextInput, StyleSheet, Color, Image, FlatList, TouchableOpacity, ScrollView} from 'react-native'
import React, {useState, useRef} from 'react'
import { Ionicons } from '@expo/vector-icons'
import HeaderTag from "./headertag"
import Tag from "./tag"
import InfoContainer from "./InfoContainer"
import tw from 'twrnc'



const CCInfo = () => {
     return(
         <ScrollView style={tw`mt-4 w-100 `}>
               <View style={tw`justify-center `}>
                     <HeaderTag containtext="Tech Stack"/>
               </View>
               <View style={tw`flex-row justify-center mt-3`}>
                    <Tag textcontain="FastAPI"/>
                    <Tag textcontain="MongoDB"/>
                    <Tag textcontain="FAISS"/>
               </View>
               <View style={tw`justify-center `}>
                     <HeaderTag containtext="Features"/>
               </View>
               <View style={tw`flex-row justify-center mt-3`}>
                    <Tag textcontain="Sentence Transformer"/>
                    <Tag textcontain="Google Translate"/>
                    <Tag textcontain="Doctor Recommend"/>
               </View>
               <View style={tw`justify-center `}>
                     <HeaderTag containtext="Services"/>
               </View>
               <View style={tw`flex-row justify-center mt-3`}>
                    <Tag textcontain="Priority Score"/>
                    <Tag textcontain="Disease Predication"/>
                    <Tag textcontain="AI Search"/>
               </View>
               <View style={tw`justify-center `}>
                     <HeaderTag containtext="Others"/>
               </View>
               <View style={tw`flex-row justify-center mt-3`}>
                    <Tag textcontain="Async Patient Check"/>
                    <Tag textcontain="Union Server"/>
                    
               </View>

               <View style={tw`justify-center `}>
                     <HeaderTag containtext="Explore It ...."/>
               </View>
                 
               {/* <View>
                   <InfoContainer Infotext="The FastAPI application predicts diseases based on symptoms using 'FAISS' and 'Sentence Transformers, then recommends doctors from ''MongoDB' based on expertise, language, and availability. It calculates a 'priority score' based on patient age, gender, history, and symptom severity. The system also supports 'multi-language symptom input' via 'Google Translate' and runs an 'asynchronous patient monitoring task at TreatLine"/>
               </View> */}

               <View></View>


         </ScrollView>
     );
}


export default CCInfo;