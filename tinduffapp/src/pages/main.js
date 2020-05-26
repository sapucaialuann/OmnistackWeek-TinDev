import React from 'react';
import { ScrollView, View, StyleSheet, Image, TextInput, Text, TouchableOpacity, Button } from 'react-native';

export default function Main() {
     return (
          <ScrollView style={styles.mainContainer}>
               <TouchableOpacity
               style={styles.button}
               title="Me aperta aí">
                    <Text style={styles.buttonText}>
                         Me aperta aí
                    </Text>
               </TouchableOpacity>
               <Text>Colé rapaziada</Text>
          </ScrollView>
     )
}

const styles = StyleSheet.create({
     mainContainer: {
          flex: 1,
          padding: 46,
          backgroundColor: '#fafafa',
     },
     button: {
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#df4723',
          height: 42,
          padding: 30,
     },
     buttonText: {
          color: '#fafafa',
          fontWeight: 'bold',
     },
})