import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { router } from "expo-router";

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // Send the searchText to the backend 
    onSearch(searchText); 
  };

  return (
    <View style={styles.container}>
      <FontAwesome5 name="search" size={20} color="blue" style={styles.icon} />
      <TextInput 
        style={styles.input} 
        placeholder="Search..." 
        value={searchText} 
        onChangeText={(text) => setSearchText(text)} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    height: 50,
    alignItems: 'center', 
    backgroundColor: 'white', 
    borderRadius: 5, 
    paddingHorizontal: 10, 
    marginVertical: 10,
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    borderWidth: 1,
    borderColor: 'grey',
  },
  icon: {
    marginRight: 5, 
  },
  input: {
    flex: 1, 
    marginHorizontal: 5, 
    fontSize: 16, 
  },
});

export default SearchBar;