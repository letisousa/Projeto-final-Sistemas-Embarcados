import { View, StyleSheet } from 'react-native'
import Slider from '../../Slider/Slider'

export default function Bright(navigation) {
    return (
        <View style = {styles.container}>
            <Slider/>
        </View>
    
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000'
    }
})