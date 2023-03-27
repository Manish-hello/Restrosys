import React,{useState} from 'react';
import { StyleSheet,Text, View,Image,TextInput,TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DropDown from './Components/dropdown';
import {Dimensions} from 'react-native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function SignupFirst(){
	return(
		<View style={styles.Container}>
		

		<View style={styles.upper}>
		<TouchableOpacity>
		<FontAwesome5 name={'chevron-left'} size={18} color={'darkblue'}/>
		</TouchableOpacity>
		</View>
		

		<View style={styles.content}>
		<Text style={styles.signup}>Sign Up</Text>
		</View>
		

		<View style={styles.drop}>
		<DropDown style={styles.dropp}/>
		</View>

		<View style={styles.btn}>
		<TouchableOpacity style={styles.btnn}>
		<Text style={styles.next}>Next</Text>
		</TouchableOpacity>
		</View>

		<View style={styles.bottom}>

		<Text style={styles.left}>Already have an account?</Text>
		<TouchableOpacity>
		<Text style={styles.right}>Sign in</Text>
		</TouchableOpacity>

		</View>


		</View>
		);
}


const styles=StyleSheet.create({
	Container:{
		flex:1,
		backgroundColor:'white',
		height:'100%',
		width:'100%',
		paddingTop:60,
		paddingLeft:30,
		paddingRight:30,
	},
	signup:{
		fontSize:30,
		fontWeight:'bold',
	},
	content:{
		marginTop:windowHeight/12,
	},
	drop:{
		marginTop:windowHeight/6,
		marginBottom:windowHeight/7,
	},
	btn:{
		marginTop:windowHeight/10,
	},
	btnn:{
		height:40,
		width:'100%',
		backgroundColor:'rgba(255, 165, 0,1)',
		justifyContent:'center',
		alignItems:'center',
		borderRadius:6,

	},
	next:{
		color:'rgba(0,0,0,1)',
		fontWeight:'bold',
	},
	bottom:{
		display:'flex',
		flexDirection:'row',
		justifyContent:'space-between',
		marginTop:windowHeight/8,
		paddingLeft:20,
		paddingRight:20,
	},
	right:{
		color:'rgba(255, 165, 0,1)',
		fontWeight:'bold',
	},
	left:{
		fontWeight:'bold',
	},
});