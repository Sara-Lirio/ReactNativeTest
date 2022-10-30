import React from 'react';
import { Text, StyleSheet, Modal, Image, View, Pressable, TextComponent } from 'react-native'
import ButtonMain from '../components/Button/ButtonMain';

const ModalForecast = ({ visible, onRequestClose, PressClose, wheatherForecast }) => {

    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={visible}
            onPointerLeave
            onRequestClose={onRequestClose}
        >
            <Image style={styles.logoModal} source={require('../assets/images/logo_horizontal.png')} />
           
            {
                    wheatherForecast ? (
                        <>
                            <Text style={styles.textMin}>Última atualização {wheatherForecast.location.localtime}</Text>

                            <Image source={wheatherForecast.current.condition.icon} />

                            <Text style={styles.city}>{wheatherForecast.location.name}</Text>
                            <Text style={styles.region}>{wheatherForecast.location.region} - {wheatherForecast.location.country}</Text>

                            <View style={styles.containerBorder}>
                                <View style={styles.tempBorder}>
                                    <Text style={styles.temp}>{wheatherForecast.forecast.forecastday.day.maxtemp_c} °C</Text>
                                </View>
                            </View>
                            <Text style={styles.temp}> Previsão de : {wheatherForecast.forecastday} °C</Text>
                         

                        </>
                    ) : null
                }



            <ButtonMain button='Pesquisar novamente' onPress={PressClose} />
        </Modal>
    )
}

const styles = StyleSheet.create({
    logoModal: {
        width: 150,
        height: 50,
        marginTop: 20,
        marginLeft: 120,
        alignItems: 'center',
    },
});

export default ModalForecast