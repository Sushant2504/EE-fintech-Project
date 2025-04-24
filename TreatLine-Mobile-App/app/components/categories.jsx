import { View, Text, TextInput, StyleSheet, Color, Image, FlatList } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { router } from "expo-router";
import SubHeading  from './sub_Heading';



const categorylist = [
    {
        id: 1,
        title: "Dentist",
        imageUrl: "https://cdn-icons-png.flaticon.com/128/6034/6034543.png",
    },

    {
        id: 2,
        title: "Cardiologist",
        imageUrl: "https://cdn-icons-png.flaticon.com/128/12594/12594051.png",
    },

    {
        id: 3,
        title: "Pulmonologist",
        imageUrl: "https://cdn-icons-png.flaticon.com/128/6903/6903959.png",
    },

    {
        id: 4,
        title: "Neurologist",
        imageUrl: "https://cdn-icons-png.flaticon.com/128/9337/9337993.png",
    },

    {
        id: 5,
        title: "Otology",
        imageUrl: "https://cdn-icons-png.flaticon.com/128/16429/16429334.png",
    },

    {
        id: 6,
        title: "Nephrologist",
        imageUrl: "https://cdn-icons-png.flaticon.com/128/18600/18600213.png",
    },



];

const Categories = () => {

    return (
        <View style={styles.maincontent}>
            <SubHeading subHeadingtitle={"Doctor Speciality"} />

            <View style={styles.verticalSpacer} />

            <FlatList
                data={categorylist}
                numColumns={4}
                style={{ marginTop: 2 }}
                columnWrapperStyle={{
                    flex: 1,
                    justifyContent: 'center',
                }}
                renderItem={({ item, index }) => index < 4 && (
                    <View style={{ alignItems: 'center' }}>
                        <View style={styles.categorycontent}>
                            <Image source={{ uri: item.imageUrl }} height={30} width={30}></Image>

                        </View>

                        <Text style={styles.text3}>{item.title}</Text>

                        <View style={styles.smallhorizontalSpacer} />
                    </View>
                )}


            />

        </View>
    );
}


const styles = StyleSheet.create({

    maincontent: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },


    categorycontent: {
        backgroundColor: '#00FFFF',
        padding: 15,
        borderRadius: 100,

    },

    horizontalSpacer: {
        width: 80,
    },


    verticalSpacer: {
        height: 20,
    },


    smallhorizontalSpacer: {
        width: 90,
    },

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

    text3: {
        fontSize: 12,
        fontFamily: 'normal',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontFamily: 'appfont-semi',
        justifyContent: 'center',
        marginTop: 5,
    },

    img: {
        height: 30,
        width: 30,
        padding: 10,
    },

    img1: {
        height: 30,
        width: 30,
        padding: 10,
    },


});


export default Categories;