import React from 'react';
import {View, KeyboarddAvoidingView, TextInput, TouchableOpacity, Text, StyleSheet} from 'react-native';

export default function App(){
  return(
    //Ao clicar no input subir as teclas
    <KeyboarddAvoidingView style={StyleSheet.background}>
      <View>
        <TextInput placeholder="Email" autoCorrect={false} onChangeText={() => {}} />
        <TextInput placeholder="Senha" autoCorrect={false} onChangeText={() => {}} />
        <TouchableOpacity>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboarddAvoidingView>
  )
}

const styles = StyleSheet.create({
  background:{
    flex:1,
    alingItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000'
  }
});