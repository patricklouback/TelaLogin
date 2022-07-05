import React, {useState, useEffect} from 'react';
import { View, Image, TextInput, TouchableOpacity, Text } from 'react-native';
import estilos from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Cadastro({navigation}) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [token, setToken] = useState(null);

    function abrirTelaHome(){
        navigation.navigate('home');
    }

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
            <Text style = {{ fontSize: 30, color: '#FFF' }}>
                Preencha os campos abaixo:
            </Text>
        </View>
      <View style = { estilos.viewInput }>
        <Image style = { estilos.icon }
               source={require('C:/Users/patri/ProjetosReactNative/TelaLogin/src/images/user.png')}
        />
        <TextInput style = { estilos.textInput }
                   placeholder = 'Insira seu Email'
                   placeholderTextColor = "#636467"
                   underlineColorAndroid = 'transparent'
                   onChangeText = {(texto => setEmail({'email': texto}))}
        />
      </View>
      <View style = { estilos.viewInput }>
        <Image style = { estilos.icon }
               source={require('C:/Users/patri/ProjetosReactNative/TelaLogin/src/images/password.png')}
        />
        <TextInput style = { estilos.textInput }
                   placeholder = 'Insira a Senha'
                   placeholderTextColor = "#636467"
                   underlineColorAndroid = 'transparent'
                   onChangeText = {(texto => setSenha({'senha': texto}))}
        />
      </View>
    </View>

    <View style = { estilos.viewDivisao }>
      <TouchableOpacity style = { estilos.btnArea } onPress = { abrirTelaHome }>
        <Text style = { estilos.textBtn }>
          SALVAR
        </Text>
      </TouchableOpacity>
    </View>
   </View>
  );
}