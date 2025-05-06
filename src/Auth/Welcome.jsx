import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import React from 'react'
import Colors from '../constants/colors'

const Welcome = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logobg}>
                <Image
                style={styles.logo}
                    source={require("../../assets/images/BizchromeLogo.png")}
                />
            </View>
        </SafeAreaView>
    )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        justifyContent:"center",
        alignItems:"center"
    },

    logobg: {
        backgroundColor: "white",
        borderRadius: 100
        
    },

    logo: {
        height: 160,
        width: 160,
        resizeMode: "contain"
    }


})