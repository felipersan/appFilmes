import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';

import Descrição from '../Descrição';

export default function Filmes(props) {
  const [visibleModal, setVisibleModal] = useState(false);

  return (
    <View style={styles.princiapView}>
      <View style={styles.card}>
        <Image style={styles.image} source={{uri: props.data.foto}} />
        <Text style={styles.title}>{props.data.nome}</Text>
        <View style={styles.viewbtn}>
          <TouchableOpacity
            style={styles.areabtn}
            onPress={() => setVisibleModal(true)}>
            <Text style={styles.textbtn}>LEIA MAIS...</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal animationType="slide" visible={visibleModal} transparent={true}>
        <Descrição
          voltar={() => {
            setVisibleModal(false);
          }}
          filme={props.data}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 15,
    backgroundColor: '#121212',
    width: 350,
    height: 350,

    borderRadius: 25,
  },
  image: {
    width: 350,
    height: 300,
    borderRadius: 25,
  },
  title: {
    paddingTop: 7,
    fontSize: 25,
    color: '#fff',
    paddingLeft: 15,
  },
  viewbtn: {
    alignItems: 'flex-end',
  },
  areabtn: {
    backgroundColor: '#3325a0',
    alignItems: 'flex-end',
    marginTop: -100,
    padding: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  textbtn: {
    color: '#fff',
  },
  princiapView: {
    backgroundColor: '#000',
  },
});
