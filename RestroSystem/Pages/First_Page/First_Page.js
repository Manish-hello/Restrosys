import React from 'react';
import { StyleSheet, Text, View,Image,ScrollView,TouchableOpacity} from 'react-native';


export default function FirstPage(){
	return(
		<View style={styles.Container}>
		<View style={styles.logos}>
       <Image style={styles.logo} source={require('./assets/logo.png')} />
       <Text style={styles.text}>RestroSys</Text>
       </View>
       <View style={styles.middle}>
       <Text style={styles.welcom}>Welcome to your</Text>
       <Text style={styles.restro}>RestroSys</Text>
       </View>
		<View style={styles.Buttons}>
		<TouchableOpacity style={styles.Register}>
		<Text style={styles.reg}>Register</Text>
		</TouchableOpacity>

		<TouchableOpacity style={styles.Signin}>
		<Text style={styles.sig}>Sign in</Text>
		</TouchableOpacity>

		</View>
		</View>
		);
}
const styles=StyleSheet.create({
	Container:{
		flex:1,
		height:'100%',
		backgroundColor:'ghostwhite',
		padding:40,
		justifyContent:'space-between'
	},

	logos:{
		width:'100%',
		display:'flex',
		flexDirection:'row',
		marginTop:60,
	},
	text:{
		fontSize:50,
		fontWeight:'bold',
		marginLeft:10,
		letterSpacing:1.5,

	},
	logo:{
		height:60,
		width:60,
	},
	middle:{
		alignItems:'center',
	},
	welcom:{
		fontWeight:'bold',
		fontSize:30,
		letterSpacing:1.5,

	},
	restro:{
		fontWeight:'bold',
		fontSize:30,
		letterSpacing:1.5,

	},
	Buttons:{
		display:'flex',
		flexDirection:'row',
		justifyContent:'space-between',

	},
	Register:{
		height:50,
		width:'45%',
		backgroundColor:'orange',
		borderRadius:8,
		marginLeft:10,
		alignItems:'center',
		justifyContent:'center',
		elevation:15,
		shadowColor: 'rgba(0,0,0,0.4)',
	},
	reg:{
		color:'white',
		fontWeight:'bold',
		letterSpacing:1.5,
		},
	sig:{
		fontWeight:'bold',
		letterSpacing:1.5,
	},
	Signin:{
		height:50,
		width:'45%',
		backgroundColor:'rgba(255,255,255,1)',
		borderRadius:8,
		marginRight:10,
		alignItems:'center',
		justifyContent:'center',
		elevation:15,
		shadowColor: 'rgba(0,0,0,0.4)',
	},
});