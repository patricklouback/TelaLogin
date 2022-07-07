import React from 'react';
import { View, Image, TextInput, TouchableOpacity, Text } from 'react-native';
import estilos from './styles';

import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object({
  email: yup.string().required('Informe seu email'),
  senha: yup.string().min(6, 'A senha deve conter pelo menos 6 dígitos').required('Informe sua senha')
})

export default function Cadastro({navigation}) {

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

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
            <Text style = {{ fontSize: 30, color: '#4B4668' }}>
                Preencha os campos abaixo:
            </Text>
        </View>
      <View style = { estilos.viewInput }>
        <Image style = { estilos.icon }
               source={require('C:/Users/patri/ProjetosReactNative/TelaLogin/src/images/user.png')}
        />
        <Controller
          control={control}
          name='email'
          render={( {field: { onChange, onBlur, value }} ) => (
            <TextInput 
              style = { estilos.textInput }
              placeholder = 'Email'
              underlineColorAndroid = 'transparent'
              onChangeText = {onChange}
              onBlur = {onBlur}
              value = {value}
              autoCapitalize = 'none'
              placeholderTextColor= {'#BEBADB'}
            />
          )}
        />
      </View>
      {errors.email && <Text style = { estilos.labelError }>{errors.email?.message}</Text>}

      <View style = { estilos.viewInput }>
        <Image style = { estilos.icon }
               source={require('C:/Users/patri/ProjetosReactNative/TelaLogin/src/images/password.png')}
        />
        <Controller
          control={control}
          name='senha'
          render={( {field: { onChange, onBlur, value }} ) => (
            <TextInput 
              style = { estilos.textInput }
              placeholder = 'Senha'
              underlineColorAndroid = 'transparent'
              onChangeText = {onChange}
              onBlur = {onBlur}
              value = {value}
              autoCapitalize = 'none'
              secureTextEntry = {true}
              placeholderTextColor= {'#BEBADB'}
            />
          )}
        />
      </View>
      {errors.senha && <Text style = { estilos.labelError }>{errors.senha?.message}</Text>}

    </View>

    <View style = { estilos.viewDivisao }>
      <TouchableOpacity style = { estilos.btnArea } onPress = { handleSubmit(abrirTelaHome) }>
        <Text style = { estilos.textBtn }>
          SALVAR
        </Text>
      </TouchableOpacity>
    </View>
   </View>
  );
}