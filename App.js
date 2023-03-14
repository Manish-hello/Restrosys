import React from 'react';
import { StyleSheet, Text, View,Image,TextInput,FlatList} from 'react-native';
import Header from './components/header';
import List from './components/list';

export default function App() {
  return (
    <View style={styles.container}>
    <Header/>
    <View style={styles.list}>
    <List/>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'grey',
    height:'100%',
    width:'100%',
  },
});
