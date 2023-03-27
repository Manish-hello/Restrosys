import React,{useState} from 'react';
import { StyleSheet,Text, View,Image,TextInput,TouchableOpacity,ScrollView} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DropDown from './Components/dropdownemp';
import {Dimensions} from 'react-native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function SignupEmployee(){
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
		

		<TextInput placeholder='Your Full Name' style={styles.textinput} placeholderTextColor={'rgba(0,0,0,0.5)'} >

		</TextInput>

		<TextInput placeholder='Phone Number' style={styles.numberinput} placeholderTextColor={'rgba(0,0,0,0.5)'} keyboardType='numeric'>

		</TextInput>
		
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
	textinput:{
		height:50,
		width:'80%',
		borderRadius:7,
		borderWidth:1,
		padding:10,
		borderColor:'rgba(0,0,0,0.2)',
		marginTop:60,
	},
	numberinput:{
		height:50,
		width:'80%',
		borderRadius:7,
		borderWidth:1,
		padding:10,
		borderColor:'rgba(0,0,0,0.2)',
		marginTop:60,

	},
	drop:{
		marginTop:60,
	},
	btnn:{
		height:40,
		width:'100%',
		backgroundColor:'rgba(255, 165, 0,1)',
		justifyContent:'center',
		alignItems:'center',
		borderRadius:6,
		marginTop:60,
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
		marginTop:60,

	},
	right:{
		color:'rgba(255, 165, 0,1)',
		fontWeight:'bold',
	},
	left:{
		fontWeight:'bold',
	},
	
});