import { View, Text, SafeAreaView, Image, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import Colors from '../constants/colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const Login = () => {
    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.headerBg}>
                <TouchableOpacity>
                    <Ionicons name="arrow-back-outline" size={28} color={Colors.textColor} />
                </TouchableOpacity>
                <View style={styles.headerContent}>

                    <Image
                        style={styles.image}
                        source={require('../../assets/images/BizchromeLogo.png')}
                    />
                </View>
            </View>

            {/* Main Content */}
            <View style={styles.content}>
                <Text style={styles.chooseText}>Login in your Account</Text>

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 50 }}>
                    {/** Full Name */}
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your Email"
                            placeholderTextColor="#999"
                            keyboardType='email-address'
                        />
                    </View>

                    {/** Email */}
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Password</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your Password"
                            placeholderTextColor="#999"
                            secureTextEntry
                        />
                    </View>

                    <TouchableOpacity style={[styles.createAccountBtn, { marginTop: 20 }]} activeOpacity={0.6}>
                        <Text style={styles.createAccountText}>Log In</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.createAccountBtn} activeOpacity={0.6}>
                        <FontAwesome6 name="google" size={24} color="white" />
                    </TouchableOpacity>

                    <Text style={styles.login}>Already have an account ? <Text style={{ color: Colors.textColor }}>Create New Account</Text></Text>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerBg: {
        backgroundColor: Colors.headerBG,
        borderBottomLeftRadius: 70,
        borderBottomRightRadius: 70,
        padding: 20,
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 100,
        height: 100,
    },
    content: {
        flex: 1,
        paddingTop: 30,
        paddingHorizontal: 20,
    },
    chooseText: {
        textAlign: 'center',
        fontFamily: 'Poppins-Bold',
        fontSize: 22,
        color: Colors.textColor,
        marginBottom: 10,
    },
    inputContainer: {
        marginTop: 14,
    },
    label: {
        color: Colors.textColor,
        fontFamily: "Poppins-Medium",
        marginBottom: 4,
    },
    input: {
        height: 45,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 6,
        paddingHorizontal: 12,
        fontSize: 14,
        fontFamily: "Poppins-Regular",
        backgroundColor: '#f9f9f9',
    },

    createAccountBtn: {
        backgroundColor: Colors.primary,
        marginTop: 15,
        borderRadius: 50,
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 6
    },

    createAccountText: {
        color: "white",
        fontFamily: "Poppins-Medium",

    },

    login: {
        fontFamily: "Poppins-Medium",
        textAlign: "center",
        paddingTop: 15,
        fontSize: 12,
       
    }
});
