import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';

export default function List(){
	return(
		<View style={styles.lists}>

		<TouchableOpacity>
		<View style={styles.listcontent}>
		<View style={styles.left}>
		<Text style={styles.tableno}>Table 9:</Text>
		<Text style={styles.orderno}>Order:#100</Text>
		<Text style={styles.Orders}>Chowmin,Mo:Mo,Thukpa,Tanduri</Text>
		</View>
		<View style={styles.Right}>
		<Text style={styles.price}>RS 345</Text>
		</View>
		</View>
		</TouchableOpacity>

		</View>
		);
}
const styles=StyleSheet.create({
	lists:{
		width:'100%',
	},
	listcontent:{
		height:100,
		backgroundColor:'#fff',
		margin:4,
		marginBottom:0,
		display:'flex',
		flexDirection:'row',
		justifyContent:'space-between',
		alignItems:'center',
	},
	tableno:{
		fontWeight:'bold',
		fontSize:20,
		marginLeft:15,
	},
	orderno:{
		fontSize:15,
		marginLeft:15,
	},
	Orders:{
		fontWeight:'bold',
		fontSize:15,
		marginLeft:15,
	},
	price:{
		fontSize:25,
		color:'orange',
		marginRight:20,
	},
});