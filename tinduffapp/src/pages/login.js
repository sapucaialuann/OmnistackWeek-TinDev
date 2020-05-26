import React from 'react';
import { ScrollView, View, StyleSheet, Image, TextInput, Text, TouchableOpacity, Button } from 'react-native';

import logo from '../assets/logo.png';

export default function Login({ navigation }) {
    function handleLogin() {
        navigation.navigate('Main');
    }

    return(
        <View style={styles.container}>
            <Image source={logo} />
            <Text>Colé</Text>

            <TextInput 
                placeholder="Bote seu nome aí meu rei"
                placeholderTextColor='#999'
                autoCorrect={false}
                autoCapitalize="none"
                style={styles.input}
            />
            
            <TouchableOpacity onPress={handleLogin} style={styles.button}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
        </View>
    )
}


//
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30
    },
    input: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#fafafa',
        borderColor: '#ddd',
        borderRadius: 4,
        marginTop: 20,
        paddingHorizontal: 15,
    },

    button: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#df4723',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        color: '#fafafa',
        fontWeight: 'bold',
        fontSize: 16,
    }
});