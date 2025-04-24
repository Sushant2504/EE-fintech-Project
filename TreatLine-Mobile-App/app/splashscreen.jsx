import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { useRouter } from 'expo-router';
import tw from 'twrnc';

const SplashScreen = () => {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.replace('/home');
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={tw`flex-1 bg-white justify-center items-center`}>

            <Image
                source={require('@/assets/images/apple-touch-icon.png')}
                style={tw`w-50 h-50 mb-6`}
                resizeMode="contain"
            />


            <Text style={tw`text-4xl font-bold text-black`}>
                TreatLine </Text>
        </View>
    );
};

export default SplashScreen;