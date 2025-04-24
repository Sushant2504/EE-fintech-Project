import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Stack } from 'expo-router/stack';
import { MenuProvider } from 'react-native-popup-menu' // Assuming NavBar component is located here

export default function Layout() {
  return (
    <View style={styles.container}>
      <MenuProvider>
        <Stack initialRouteName="SignUp">
          <Stack.Screen
            name="SignUp"
            options={{ headerShown: false }} // Hide NavBar for signUp
          />

          <Stack.Screen
            name="(tabs)"
            options={{
              headerShown: false,
              // Show NavBar for tabs screen
            }} />


          <Stack.Screen
            name="SignIn"
            options={{
              headerShown: false,
            }}
          />



        </Stack>



      </MenuProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
