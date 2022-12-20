import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Slider from '@react-native-community/slider';

import React, { useState, useEffect } from 'react';
import * as Brightness from 'expo-brightness';
import { useFonts } from 'expo-font';

export default function ButtonSlider() {
    let [fontLoaded] = useFonts({
        'Inter-Regular': require('../assets/fonts/Inter/Inter-Regular.ttf')
    })

   
    const [brightValue, setBrightValue] = useState();
    
    useEffect(() => {
        (async () => {
          const { status } = await Brightness.requestPermissionsAsync();
          if (status === 'granted') {
            Brightness.setSystemBrightnessAsync(brightValue);
          }
        })();
      }, []);

    return (
        <View  style = {styles.container}>
            <View style = {styles.card}>
                <Text style = {styles.title}>Nível de brilho <Text style = {styles.destaque}>{brightValue}%</Text></Text>
                <Slider style={{width: 200, height: 40}} 
                    minimumValue={0} 
                    maximumValue={100}
                    value={brightValue} //definindo a variável
                    onValueChange={(value) => setBrightValue(value)} //renderizando valor do slider
                    onSlidingComplete = {(value) => Brightness.setSystemBrightnessAsync(value/100)}//Modifica brilho
                    step={1}
                    maximumTrackTintColor= "#DCDCDC"
                    minimumTrackTintColor= "#5A5A5A"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        padding: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#c4c4c4',
        borderRadius: 10,
        fontFamily: 'Inter-Regular', fontSize: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    },
    title: {
      color: '#121416',
      fontSize: 18,
      marginBottom: 10,
    },
    destaque: {
        fontWeight: 'bold'
    }
  });
  