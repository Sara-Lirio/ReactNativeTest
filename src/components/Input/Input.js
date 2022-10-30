import React from 'react';
import { TextInput, StyleSheet } from 'react-native'

export default function Input({ value, onChangeText }) {
    return <TextInput style={styles.input}
        value={value}
        onChangeText={onChangeText} />
}

const styles = StyleSheet.create({
    input: {
        height: 60,
        width: 260,
        margin: 12,
        borderWidth: 1,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        borderRadius: 30,
        fontSize: 20,
        borderColor:'#FFFFFF',
        
        backgroundColor: '#FFFFFF'
    },
});