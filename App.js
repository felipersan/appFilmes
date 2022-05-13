import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';

import api from './src/Services/api';
import Filmes from './src/filmes';

export default function App() {
  const [filmes, setFilmes] = useState();
  const [gabi, setGabi] = useState('gabrielle');

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get('r-api/?api=filmes');
      setFilmes(response.data);
    }

    loadFilmes();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList data={filmes} renderItem={({item}) => <Filmes data={item} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
