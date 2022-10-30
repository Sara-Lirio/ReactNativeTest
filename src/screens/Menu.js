import React from "react";
import { Image, StyleSheet, View } from 'react-native';
import ButtonMain from "../components/Button/ButtonMain";

const Menu = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image}
                source={require('../assets/images/logo_1.png')} />
            <ButtonMain button='Clima agora' onPress={() => navigation.navigate("CurrentWeather")} />
            <ButtonMain button='Clima hoje' onPress={() => navigation.navigate("Forecast")} />
        </View> 
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E5E5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 280,
        height: 280,
        marginBottom:20,
        resizeMode: 'contain'
    }
});

export default Menu