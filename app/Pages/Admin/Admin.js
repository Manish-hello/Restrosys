import React from 'react';
import { StyleSheet, Text, View,Image,TextInput,FlatList,ScrollView} from 'react-native';

import { AUTH_HANDELLER_FOR_LOGEDIN_USER } from '../../../prototype/AuthStateChange';
export default function MainPage(){
	AUTH_HANDELLER_FOR_LOGEDIN_USER();
  return(
		<View style={styles.container}>
            <Text >Hello Login page</Text>
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