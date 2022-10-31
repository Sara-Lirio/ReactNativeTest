import React from 'react';
import { Text, StyleSheet, Modal, Image, View } from 'react-native'
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
            <View style={styles.container}>
                <Image style={styles.logoModal} source={require('../assets/images/logo_horizontal.png')} />
            </View>

            {
                wheatherForecast ? (
                    <>
                        <Image source={wheatherForecast.current.condition.icon} />

                        <Text style={styles.city}>{wheatherForecast.location.name}</Text>
                        <Text style={styles.region}>{wheatherForecast.location.region} - {wheatherForecast.location.country}</Text>

                        <Text style={styles.textMin}>Última atualização {wheatherForecast.current.last_updated}</Text>

                        <View style={styles.containerMaxeMin}>
                            <View style={styles.borderMax}>
                                <Text style={styles.temp}> Máxima (°C): </Text>
                                <View style={styles.containerTemp}>
                                    <Text style={styles.textTemp}> {wheatherForecast.forecast.forecastday.date}30</Text>
                                    <Image style={styles.imageMax} source={require('../assets/images/max.png')} />
                                </View>
                            </View>
                            <View style={styles.borderMin}>
                                <Text style={styles.temp}> Minimo (°C): </Text>
                                <View style={styles.containerTemp}>
                                    <Text style={styles.textTemp}>{wheatherForecast.forecast.forecastday.date}17</Text>
                                    <Image style={styles.imageMin} source={require('../assets/images/min.png')} />
                                </View>
                            </View>
                        </View>
                    </>
                ) : null
            }

            <View style={styles.btn} >
                <ButtonMain button='Pesquisar novamente' onPress={PressClose} />
            </View>
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
    container: {
        backgroundColor: '#E5E5E5',
        paddingBottom: 20
    },
    textMin: {
        color: '#606060',
        textAlign: 'right',
        padding: 15,
    },
    city: {
        fontSize: 30,
        textAlign: 'center',
        color: '#606060',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        backgroundColor: '#E5E5E5'
    },
    region: {
        fontSize: 20,
        textAlign: 'center',
        color: '#606060',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        backgroundColor: '#E5E5E5',
        paddingBottom: 20
    },
    borderMax: {
        borderWidth: 2,
        borderColor: "#E5E5E5",
        borderRadius: 20,
        width: 140,
        height: 100,
        padding: 10
    },
    borderMin: {
        borderWidth: 2,
        borderColor: "#E5E5E5",
        borderRadius: 20,
        width: 140,
        height: 100,
        padding: 10
    },
    imageMax: {
        width: 40,
        height: 60
    },
    imageMin: {
        width: 40,
        height: 60
    },
    containerMaxeMin: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 15
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerTemp: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    textTemp: {
        fontSize: 26,
        padding: 8
    }
});

export default ModalForecast