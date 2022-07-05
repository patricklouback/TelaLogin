import React from 'react';
import { View, Image, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';

export default function Login() {
 return (
   <View style = { estilos.container }>
    <View style = { estilos.viewDivisaoLogo }>
      <Image
      source={require('C:/Users/patri/ProjetosReactNative/TelaLogin/src/images/logo.png')}
      style={estilos.logo}
      />
    </View>

    <View style = { estilos.viewDivisao }>
      <View style = { estilos.viewInput }>
        <Image style = { estilos.icon }
               source={require('C:/Users/patri/ProjetosReactNative/TelaLogin/src/images/user.png')}
        />
        <TextInput style = { estilos.textInput }
                   placeholder = 'User or E-mail'
                   placeholderTextColor = "#636467"
                   underlineColorAndroid = 'transparent'
        />
      </View>
      <View style = { estilos.viewInput }>
        <Image style = { estilos.icon }
               source={require('C:/Users/patri/ProjetosReactNative/TelaLogin/src/images/password.png')}
        />
        <TextInput style = { estilos.textInput }
                   placeholder = 'Password'
                   placeholderTextColor = "#636467"
                   underlineColorAndroid = 'transparent'
        />
      </View>
      <View style = { estilos.viewEsqueceu }>
        <TouchableOpacity>
          <Text style = { estilos.textEsqueceu }>Esqueci a Senha</Text>
        </TouchableOpacity>
      </View>
    </View>

    <View style = { estilos.viewDivisao }>
      <TouchableOpacity style = { estilos.btnArea }>
        <Text style = { estilos.textBtn }>
          LOGIN
        </Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style = { estilos.textEsqueceu }>Cadastre-se</Text>
      </TouchableOpacity>
    
    </View>
   </View>

  );
}

const estilos = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#231F5C'
    },
    viewDivisaoLogo: {
      flex: 1.5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    viewDivisao: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    viewInput: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      margin: 10
    },
    viewEsqueceu: {
      flex: 2,
    },
    logo: {
      width: 200,
      height: 200
    },
    icon: {
      width: 40,
      height: 40
    },
    textInput:{
      height: 45,
      borderWidth:1,
      width: 300,
      borderColor: '#FFF',
      borderRadius: 10,
      marginLeft: 15,
      fontSize: 20,
      padding: 10,
    },
    btnArea:{
      justifyContent:'center',
      alignItems: 'center',
      backgroundColor: '#FFF',
      height: 50,
      width: 380,
      margin: 17,
      borderRadius: 9
    },
    textBtn:{
      fontSize: 25,
      fontWeight: 'bold',
      color: '#231F5C'
    },
    textEsqueceu:{
      fontSize: 25,
      color: '#FFF',
      margin: 20
    },
  });