import React, { useEffect } from 'react';
import { Image, TouchableOpacity, Text, StyleSheet, Alert } from "react-native";
import * as Brightness from 'expo-brightness';
import { useFonts } from 'expo-font';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'


export default function Button() {
    const navigation = useNavigation();
    let [fontLoaded] = useFonts({
        'Inter-Regular': require('../assets/fonts/Inter/Inter-Regular.ttf'),
    })

    return (
        <TouchableOpacity style = {styles.container} >
            <Ionicons name="md-sunny" size={60} color="#ECECEC" />
            <Text style = {styles.title}>
                Brilho
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 150,
        width: 150,
        borderRadius: 8,
        backgroundColor: "#26282C",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Inter-Regular"
    },
    title: {
        
        color: "#ffffff",
        paddingTop: 10,
        fontSize: 16,
    }
})

