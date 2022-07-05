import React, {useState} from 'react';
import { View, Image, TextInput, TouchableOpacity, Text } from 'react-native';
import estilos from './styles';

export default function Cadastro() {
    const [email, setEmail] = useState(null);
    const [senha, setSenha] = useState(null);
    const [token, setToken] = useState(null);

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
                   placeholder = 'Insira seu Email'
                   placeholderTextColor = "#636467"
                   underlineColorAndroid = 'transparent'
                   onChangeText = {(texto => setUser({input: texto}))}
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
        />
      </View>
    </View>

    <View style = { estilos.viewDivisao }>
      <TouchableOpacity style = { estilos.btnArea }>
        <Text style = { estilos.textBtn }>
          SALVAR
        </Text>
      </TouchableOpacity>
    </View>
   </View>
  );
}