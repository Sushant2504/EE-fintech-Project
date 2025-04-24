import React from 'react';
import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
        headerShown: false, // Show header for all screens in this tab
      }}

    >


      {/* Home Tab (Main Screen) */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />


      <Tabs.Screen
        name="AIDoctor"
        options={{
          title: 'Care Connect',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="magic" color={color} />
          ),
        }}
      />


      <Tabs.Screen
        name="Appointment"
        options={{
          title: 'Appointments',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="calendar" color={color} />
          ),
        }}
      />



      {/* Profile Tab */}
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="user" color={color} />
          ),
        }}
      />



    </Tabs>
  );
}
