import React, {useState, useEffect} from 'react';
import { View, Image, TextInput, TouchableOpacity, Text } from 'react-native';
import estilos from './styles';
import GerarToken from '../services/gerarToken';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login() {
    const [token, setToken] = useState(null);

    function salvatoken() {
      
      setToken(GerarToken().toString());

      async function gravaToken(){
        await AsyncStorage.setItem('token', token);
      }
      gravaToken(); 
      alert(token);

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
        <Text style = { estilos.textEsqueceu } onPress = {salvatoken}>Cadastre-se</Text>
      </TouchableOpacity>
    
    </View>
   </View>

  );
}