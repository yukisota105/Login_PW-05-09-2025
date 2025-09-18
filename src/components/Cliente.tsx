import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';
import React from 'react';

interface propCliente{
    id:number,
    nome:String,
    cpf:String
    saldo:number,
    onDelete:(id:number) => void;
}

export default function Cliente({id,nome,cpf,saldo,onDelete}:propCliente){
    return(
        <>
        <Text style={styles.texto}>Cod.:{id}</Text>
        <Text style={styles.texto}>Nome.:{nome}</Text>
        <Text style={styles.texto}>CPF.:{cpf}</Text>
        <Text style={styles.texto}>Saldo.:{saldo}</Text>

        <View style={styles.row}>
            <TouchableOpacity style={styles.btn} onPress={() => onDelete(id)}>
                <Text style={styles.txtBtn}>Excluir</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn2}>
                <Text style={styles.btn2}>Editar</Text>
            </TouchableOpacity>
        </View>
        </>
    )

}




const styles = StyleSheet.create({
    texto:{
        fontSize:25
    },
    row:{
        flexDirection:"row",
        justifyContent:'center',
        width:'80%'
    },
    btn:{
        flex:1,
        backgroundColor:'#E41B40FF',
        padding:15,
        borderRadius:8,
        margin:10,

    },
    btn2:{
        flex:1,
        backgroundColor:'E41B40FF'
    },
    txtBtn:{
        textAlign:'center'
    }
})