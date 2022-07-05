import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function Login() {
 return (
   <View style = { estilos.container }>
  <Image
    source={require('C:/Users/patri/ProjetosReactNative/TelaLogin/src/images/logo.png')}
    style={estilos.logo}
    />
   </View>

  );
}

const estilos = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#231F5C'
    },
    logo: {
      width: 200,
      height: 200
    }
  });