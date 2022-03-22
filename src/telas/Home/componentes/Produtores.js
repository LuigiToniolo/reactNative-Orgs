import React, { useEffect, useState } from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';

import Produtor from './Produtor';
import { carregaProdutores } from '../../../services/carregaDados';

export default function Produtores({ topo: Topo }) {

    //o formato de função é o mais recomendado para fazer nos novos projetos, ficando um código mais
    // legível que no formato de classes.

    const [titulo, setTitulo] = useState('');
    const [lista, setLista] = useState([]);

    useEffect(() => {
        const retorno = carregaProdutores();
        setTitulo(retorno.titulo);
        setLista(retorno.lista);
    }, []); 
    // Quando temos um array vazio como segundo parâmetro, o que está dentro da arrow function 
    // vai executar assim que o nosso componente for carregado.

    const TopoLista = () => {
        return (
            <>
            <Topo/>
            <Text style={estilos.titulo}>{ titulo }</Text>
            </>
        );
    }

    return(
        <FlatList
        data={lista}
        renderItem={({ item }) => <Produtor {...item}/>} //Os tres pontos irá desconstruir os 4 valores de produtores.js
        keyExtractor={(nome) => nome}
        ListHeaderComponent={TopoLista}/>
    );
}

const estilos = StyleSheet.create({
    titulo: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold',
        color: '#464646',
    },
    lista: {
        
    }
})