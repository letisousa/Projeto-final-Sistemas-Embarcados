
import { View, TouchableOpacity, Text, StyleSheet, Alert } from "react-native";
import * as Brightness from 'expo-brightness';
import { useFonts } from 'expo-font';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as ScreenOrientation from 'expo-screen-orientation';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import React, { useState, useEffect } from 'react';


export default function Rotation() {
    
    let [fontLoaded] = useFonts({
        'Inter-Regular': require('../../assets/fonts/Inter/Inter-Regular.ttf')
    })

    
    
        useEffect(()  => {
            changeScreenOrientation();
            return () => {
                ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
        }
        }, []);
            
  


        async function changeScreenOrientation2() {
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
        }
        async function changeScreenOrientation() {
          await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
        }
      

    return (
        <View style = {styles.container}>
            <TouchableOpacity style = {styles.card} onPress={() => changeScreenOrientation()}>
                <Ionicons name="md-phone-portrait" size={55} color="#ECECEC" />
                <Text style = {styles.title}>
                    Retrato
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.card} onPress={() => changeScreenOrientation2()}>
                <Ionicons name="md-phone-landscape" size={55} color="#ECECEC" />
                <Text style = {styles.title}>
                    Paisagem
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    card: {
        height: 150,
        width: 150,
        borderRadius: 8,
        backgroundColor: "#26282C",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Inter-Regular",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 3.68,

        elevation: 11
    },
    title: {
        
        color: "#ffffff",
        paddingTop: 10,
        fontSize: 16,
    }
})

