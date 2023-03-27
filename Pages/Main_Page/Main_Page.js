import React from 'react';
import { StyleSheet, Text, View,Image,TextInput,FlatList,ScrollView} from 'react-native';
import Header from './Components/header';
import List from './Components/list';

export default function MainPage(){
	return(
		<View style={styles.container}>
    <Header/>
    <ScrollView>
    <View style={styles.list}>
    <List/>
    </View>
    </ScrollView>
    </View>
		);
}

const styles=StyleSheet.create({
	container: {
    backgroundColor:'grey',
    height:'100%',
    width:'100%',
  },
});