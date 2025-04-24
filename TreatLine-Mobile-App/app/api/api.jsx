import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { useRouter } from 'expo-router';
import tw from 'twrnc';
import axios from 'axios';


const api = axios.create({
    //baseURL: 'http://localhost:5000/api',

    baseURL: 'https://treatline-vha-backend.vercel.app/api',  // Update with your backend URL
    headers: {
        'Content-Type': 'application/json',
    },
});



export default api;