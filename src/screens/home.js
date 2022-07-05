import React, {useState, useEffect} from 'react';
import { View, Image, Text } from 'react-native';
import estilos from './styles';
import GerarToken from '../services/gerarToken';

export default function Home() {
    const [resposta, setResposta] = useState(null);
    
    useEffect(() => {
        setResposta(GerarToken());
    }, [])
    
    return (
    <View style = { estilos.container }>
        <View style = { estilos.viewDivisaoLogo }>
      <Image
      source={require('C:/Users/patri/ProjetosReactNative/TelaLogin/src/images/logo.png')}
      style={estilos.logo}
      />
        </View>
        <View style = { estilos.viewDivisao }>
            <Text style = { estilos.textEsqueceu }>{resposta}</Text>
        </View>
        <View style = { estilos.viewDivisao }></View>
    </View>
  );
}