import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function ButtonMain({ button, onPress }) {
    return <TouchableOpacity
        style={styles.btn}
        color='#FAEB51'
        onPress={onPress}>
        <Text style={styles.btnText}>{button}</Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    btn: {
        borderRadius: 30,
        width: 230,
        height: 50,
        marginTop: 15,
        backgroundColor: '#1CA3EC',
        paddingTop: 12,
        
    },
    btnText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 16,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
});