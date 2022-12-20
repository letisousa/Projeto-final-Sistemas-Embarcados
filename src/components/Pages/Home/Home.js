import React from 'react';
import { Button, View, TouchableOpacity, Text, StyleSheet, Alert, TextInput} from "react-native";
import { useFonts } from 'expo-font';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'
import * as WebBrowser from 'expo-web-browser';

export default function Home() {

    const [url, setUrl] = React.useState("");

    const navigation = useNavigation();
    let [fontLoaded] = useFonts({
        'Inter-Regular': require('../../assets/fonts/Inter/Inter-Regular.ttf')
    })
    return (
        <View style = {styles.containerWebView}>
            <View style = {styles.containerInput}>
                <TextInput
                    style={styles.input}
                    placeholder='Digite aqui o endereço'
                    onChangeText={text => setUrl(text)}
                    value={url} 
                />
                <TouchableOpacity style = {styles.cardSearch} onPress={() => { 
                    WebBrowser.openBrowserAsync(url)
                    return <Text style = {styles.textoUrl}> oiiiiiiiiii </Text>
                    }}>
                    <Ionicons name="search-sharp" size={20} color="#ECECEC" />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style = {styles.card} onPress={() => WebBrowser.openBrowserAsync('https://sigaa.ufpb.br/sigaa/public/home.jsf')}>
                <Ionicons name="school-outline" size={60} color="#ECECEC" />
                <Text style = {styles.title}>
                    Sigaa
                </Text>
            </TouchableOpacity>
            <View style = {styles.container}>
                <TouchableOpacity style = {styles.card} onPress={() => navigation.navigate('Bright')}>
                    <Ionicons name="md-sunny" size={60} color="#ECECEC" />
                    <Text style = {styles.title}>
                        Brilho
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.card} onPress={() => navigation.navigate('Rotation')}>
                    <Ionicons name="md-refresh" size={60} color="#ECECEC" />
                    <Text style = {styles.title}>
                        Rotação
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-between',
        top: 230,
    },
    containerWebView: {
        alignItems: 'center',
        flex: 0.5,
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

        elevation: 11,
    },
    cardSearch: {
        height: 40,
        width: 40,
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

        elevation: 11,
    },
    title: {
        
        color: "#ffffff",
        paddingTop: 10,
        fontSize: 16,
    },
    input: {
        height: 40,
        width: '80%',
        margin: 12,
        borderWidth: 1,
        borderRadius: 7,
        padding: 10,
    },
    containerInput: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    textoUrl: {
        position: 'absolute',
        fontSize: 20,
    }
})
