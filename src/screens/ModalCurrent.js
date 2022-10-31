import React from 'react';
import { Text, StyleSheet, Modal, Image, View } from 'react-native'
import ButtonMain from '../components/Button/ButtonMain';

const ModalCurrent = ({ visible, onRequestClose, PressClose, wheatherForecast }) => {
    return (
        <View
            style={styles.modal}>
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
                            <Text style={styles.textMin}>Última atualização {wheatherForecast.location.localtime}</Text>

                            <Image source={wheatherForecast.current.condition.icon} />

                            <Text style={styles.city}>{wheatherForecast.location.name}</Text>
                            <Text style={styles.region}>{wheatherForecast.location.region} - {wheatherForecast.location.country}</Text>

                            <View style={styles.containerBorder}>
                                <View style={styles.tempBorder}>
                                    <Text style={styles.temp}>{wheatherForecast.current.temp_c}°C</Text>
                                </View>
                            </View>

                            <Text style={styles.weather}>Sensação {wheatherForecast.current.feelslike_c} °C</Text>

                            <Text style={styles.weather}>Hoje: {wheatherForecast.current.condition.text}</Text>

                            {
                                wheatherForecast.current.temp_c <= 1 ?
                                    (<Text style={styles.title}>Aaargh! Se for sair leve o casaco</Text>) : null
                            }
                            {
                                wheatherForecast.current.condition.text === "Neblina" ?
                                    (<Text style={styles.title}>Se dirigir, cuidado com a Neblina</Text>) : null
                            }
                            {
                                wheatherForecast.current.condition.text === "Possibilidade de chuva irregular" ?
                                    (<Text style={styles.title}>Aconselho a levar um guarda chuva</Text>) : null
                            }
                            {
                                wheatherForecast.current.condition.text === "Parcialmente nublado" ?
                                    (<Text style={styles.title}>O Tempo está fechando, tem roupa no varal ?</Text>) : null
                            }
                            {
                                wheatherForecast.current.condition.text === "Parcialmente nublado" && wheatherForecast.current.temp_c >= 25 ?
                                    (<Text style={styles.title}>Talvez hoje não seja uma boa ideia ir a praia ou piscina, que tal um cineminha ?</Text>) : null
                            }
                            {
                                wheatherForecast.current.condition.text === "Chuva fraca irregular com trovoada" ?
                                    (<Text style={styles.title}>Eita! Está chovendo lá fora.</Text>) : null
                            }
                            {
                                wheatherForecast.current.condition.text === "Céu limpo" ?
                                    (<Text style={styles.title}>Por enquanto nenhum sinal de pingo, digo chuva.</Text>) : null
                            }
                            {
                                wheatherForecast.current.condition.text === "Sol" && wheatherForecast.current.temp_c >= 25 ?
                                    (<Text style={styles.title}>Partiu praia !</Text>) : null
                            }
                            {
                                wheatherForecast.current.condition.text === "Aguaceiros fracos" ?
                                    (<Text style={styles.title}>Eita, vem chuvinha boa por ai.</Text>) : null
                            }
                            {
                                wheatherForecast.current.condition.text === "Chuva moderada ou forte com trovoada" ?
                                    (<Text style={styles.title}>Quanta água pode cair do céu hoje ?</Text>) : null
                            }
                        </>
                    ) : null
                }

                <View style={styles.btn} >
                    <ButtonMain button='Pesquisar novamente' onPress={PressClose} />
                </View>
            </Modal>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        backgroundColor: '#E5E5E5'
    },
    logoModal: {
        width: 170,
        height: 60,

    },
    textMin: {
        color: '#606060',
        textAlign: 'right',
        padding: 15,
        backgroundColor: '#E5E5E5'
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
    containerBorder: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10
    },
    tempBorder: {
        width: 160,
        height: 160,
        borderWidth: 2,
        borderColor: "#606060",
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    temp: {
        fontSize: 45,
        textAlign: 'center',
        color: '#1CA3EC',
        fontWeight: 'bold',
    },
    weather: {
        paddingLeft: 40,
        color:'#606060'
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        color: '#606060',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
      }
});

export default ModalCurrent