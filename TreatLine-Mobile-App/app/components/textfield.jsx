import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';


const TextContainer = ({ textvalue }) => {

    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        // Send the searchText to the backend 
        onSearch(searchText);
    };

    return (
        <View style={styles.container}>

            <TextInput
                style={styles.input}
                placeholder= {textvalue}
                value={searchText}
                onChangeText={(text) => setSearchText(text)}
            />

        </View>
    );
}



const styles = StyleSheet.create({
    container: {
      flexDirection: 'row', 
      height: 50,
      alignItems: 'center', 
      backgroundColor: 'white', 
      borderRadius: 5, 
      paddingHorizontal: 10, 
      marginVertical: 10,
      marginTop: 20,
      marginLeft: 20,
      marginRight: 20,
      borderWidth: 1,
      borderColor: 'grey',
    },
   

    input: {
      flex: 1, 
      marginHorizontal: 5, 
      fontSize: 16, 
    },
  });


export default TextContainer;

