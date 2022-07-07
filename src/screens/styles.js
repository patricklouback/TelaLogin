import React from "react";

import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E9E7FF'
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
      borderColor: '#4B4668',
      borderRadius: 10,
      marginLeft: 15,
      fontSize: 20,
      padding: 10,
      color: '#4B4668'
    },
    btnArea:{
      justifyContent:'center',
      alignItems: 'center',
      backgroundColor: '#4B4668',
      height: 50,
      width: 380,
      margin: 17,
      borderRadius: 9
    },
    textBtn:{
      fontSize: 25,
      fontWeight: 'bold',
      color: '#E9E7FF'
    },
    textEsqueceu:{
      fontSize: 25,
      color: '#4B4668',
      margin: 20
    },
  });

  export default estilos;