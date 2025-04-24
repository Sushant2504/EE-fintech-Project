import { View, Text, TextInput, StyleSheet , Color, Image} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { router } from "expo-router";

const Header = () => {
     
    return (

        
         <View style={styles.content}>
             <View style={styles.textcontent}>
                 <Text style={styles.text1}>Hello 👋</Text>
                 <Text style={styles.text2}>Sushant</Text>
             </View>

             
            <Ionicons name = "notifications-outline" size={25} color={"black"} style={styles.icon}/>
             
         </View>
    );
}



const styles = StyleSheet.create({

    content: {
         disply: 'flex',
         flexDirection: 'row',
         justifyContent: 'space-between',
    },

    textcontent: {
         display: 'flex',
         flexDirection: 'column',
         justifycontent: 'space-between',
    },

    text1: {
        color: 'grey',
        fontSize: 14,
        fontWeight: 'normal',
        fontStyle: 'normal',
        padding: 5.0,
        marginLeft: 15.0,
    },

    text2: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'normal',
        fontStyle: 'normal',
        padding: 4.0,
        marginLeft: 20.0,
    },

    // icon part...

    icon: {
         marginRight: 30.0,
         marginTop: 20.0,
    },


});

export default Header;