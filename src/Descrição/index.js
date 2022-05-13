import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function Descrição(props) {
  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <TouchableOpacity onPress={props.voltar} style={styles.btn}>
          <Text style={styles.textbtn}>Voltar</Text>
        </TouchableOpacity>
        <View style={styles.description}>
          <Text style={styles.title}>{props.filme.nome}</Text>
        </View>
        <Text style={styles.textdescrição}>Descrição</Text>
        <Text style={styles.details}>{props.filme.sinopse}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    marginLeft: 5,
    marginRight: 5,
  },
  modal: {
    height: 400,
    backgroundColor: '#c5c5c5',

    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  btn: {
    width: '100%',
    backgroundColor: '#ff4c50',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  textbtn: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  },
  description: {
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: '#000',
    marginTop: 25,
    marginBottom: 5,
  },
  textdescrição: {
    fontSize: 20,
    color: '#000',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  details: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 15,
  },
});
