
import React, { createContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert, Animatable } from 'react-native';
import StandardButton from '../components/StandardButton';
import InputField from '../components/InputField';
import Firebase from '../config/Firebasje';  


class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nameUser: '',
            email: '',
            password: '',
            isValidEmail: true,
            isValidPassword: true,
            isValidLogin: true,
            currentUser: null,
            name: "",
            username: "",
            email: "",
            friends: null,
            userFriends: null,
            location: null,
            online: true,
        };
        global.Myuser = false;
        global.uid;
    }

    handleValidPassword = (val) => {
        if (val.trim().length >= 5) {
            this.state.isValidPassword = true;
        }
        else {
            this.state.isValidPassword = false;
        }
    }

    handleValidEmail = (val) => {
        global.emailUser = this.state.email;
        var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (val.trim().length >= 5) {
            if (regEmail.test(val)) {
                this.state.isValidEmail = true;
            }
            else {
                this.state.isValidEmail = false;
            }
        }
        else {
            this.state.isValidEmail = false;
        }
    }





    render() {
        return (
            <View style={styles.container}>
    
                <InputField
                    labelValue={this.state.email}
                    onChangeText={(email) => this.setState({ email }, (email) => this.handleValidEmail(this.state.email))}
                    placeholderText="Email"
                    iconType="user"
                    secureTextEntry={false}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                { this.state.isValidEmail ? null :
                    <Text style={styles.errorMessage}>The email needs to look like xxx@domain.</Text>
                }

                <InputField
                    labelValue={this.state.password}
                    onChangeText={(password) => this.setState({ password }, (password) => this.handleValidPassword(this.state.password))}
                    placeholderText="Password"
                    iconType="lock"
                    secureTextEntry={true}
                />
                { this.state.isValidPassword ? null :
                    <Text style={styles.errorMessage}>The password needs to be 6 characters long.</Text>
                }


                <StandardButton
                    buttonTitle="Log In"
                   
                />

                <TouchableOpacity style={styles.forgotButton} >
                    <Text style={styles.navButtonText} >Not registered yet? Register here</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ebeced',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    logo: {
        height: 200,
        width: 200,
        resizeMode: 'cover',
        marginBottom: 30,
        marginTop: 30,
    },
    text: {
        fontSize: 27,
        marginBottom: 10,
        color: '#051d5f',
    },
    navButton: {
        marginTop: 15,
    },
    forgotButton: {
        marginVertical: 20,
    },
    navButtonText: {
        fontSize: 17,
        fontWeight: '500',
        color: '#2e64e5',
    },
    errorMessage: {
        color: '#FE0000',
    }
});