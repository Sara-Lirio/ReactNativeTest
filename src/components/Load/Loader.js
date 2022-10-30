import React from "react";
import { View, StyleSheet, Text} from "react-native-web";

const Loader = () => {
    return (
        <View style={styles.containerLoad}>
            <View style={styles.load}>
                <Text>Carregando</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerLoad: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        margin: 'auto',
        
    },
    load: {
        borderWidth: 2,
        borderColor: "#606060",
        borderRadius: 100,
        height: 14,
        width: 14
    }
})
    

export default Loader