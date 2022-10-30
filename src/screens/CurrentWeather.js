import React, { useState } from 'react';
import { Text, StyleSheet, Image, View } from 'react-native'
import ButtonMain from '../components/Button/ButtonMain';
import Input from '../components/Input/Input';
import Loader from '../components/Load/Loader';
import ModalCurrent from './ModalCurrent';

const CurrentWeather = () => {
  const [city, setCity] = React.useState('')
  const [wheatherForecast, setWeatherForecast] = React.useState(null)
  const [modalVisible, setModalVisible] = useState(false);
  const [removeLoading, setRemoveLoading] = React.useState(false);

  const handleSearch = () => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=e751ea9cf5bc4fcbbb3225428211810&q=${city}&lang=pt`)
      .then((response) => {
        if (response.status === 200) {
          return response.json()
          console.log(response.json);
        };
      })
      .then((data) => {
        setWeatherForecast(data);
        console.log(data);
      })
  }

  const handleClick = () => {
    setTimeout(() => {
      handleSearch()
      setModalVisible(true)
      setRemoveLoading(true);
    }, 1000)
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/images/Logo_2.png')} />

      <View style={styles.containerLogo}>
        <Text style={styles.title}>Fala pra mim: Qual cidade deseja saber?</Text>
        <Image style={styles.logoPingo} source={require('../assets/images/Pingo.png')} />
      </View>

      <Input
        value={city}
        onChangeText={setCity} />

      <ModalCurrent visible={modalVisible}
        wheatherForecast={wheatherForecast}

        PressClose={() => setModalVisible(!modalVisible)}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }} />

        <ButtonMain button='Continuar'
          onPress={handleClick}
        />
      {/* <Loader/> */}

    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 180,
    height: 80,
    resizeMode: 'contain'
  },
  logoPingo: {
    width: 140,
    height: 140,
  },
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerLogo: {
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row'
  },
  title: {
    width: 180,
    color: '#606060',
    fontSize: 20,
    paddingTop: 40,
    paddingLeft: 40,
    fontWeight: 'bold'
  },

});

export default CurrentWeather