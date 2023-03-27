import React,{useState} from 'react';
import { StyleSheet,Text, View,Image,TextInput,TouchableOpacity,ScrollView} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Dimensions} from 'react-native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function SignupAdmin(){
	return(
		<ScrollView>
		<View style={styles.Container}>
		

		<View style={styles.upper}>
		<TouchableOpacity>
		<FontAwesome5 name={'chevron-left'} size={18} color={'darkblue'}/>
		</TouchableOpacity>
		</View>
		
		<View style={styles.signupWithOthers}>
		<TouchableOpacity style={styles.google}>
		<View style={styles.whiteback}>
		<FontAwesome5 style={styles.ggl} name={'google'} size={30}/>
		</View>
		<View style={styles.googletextcontainer}>
		<Text style={styles.googlesign}>Signup with Google</Text>
		</View>
		</TouchableOpacity>

		<TouchableOpacity style={styles.facebook}>
		<View style={styles.blueback}>
		<FontAwesome5 style={styles.fbk} name={'facebook-f'} size={35} color={'rgba(255,255,255,1)'} />
		</View>
		<View style={styles.facebooktextcontainer}>
		<Text style={styles.facebooksign}>Signup with Facebook</Text>
		</View>
		</TouchableOpacity>

		</View>


		<View style={styles.content}>
		<Text style={styles.signup}>Sign Up</Text>
		</View>
		

		<TextInput placeholder='Your Full Name' style={styles.textinput} placeholderTextColor={'rgba(0,0,0,0.5)'} >

		</TextInput>

		<TextInput placeholder='Phone Number' style={styles.numberinput} placeholderTextColor={'rgba(0,0,0,0.5)'} keyboardType='numeric'>

		</TextInput>
		
		<TextInput placeholder='Name of Organization' style={styles.textinput} placeholderTextColor={'rgba(0,0,0,0.5)'} >

		</TextInput>

		<TextInput placeholder='Address' style={styles.textinput} placeholderTextColor={'rgba(0,0,0,0.5)'} >

		</TextInput>

		<TextInput placeholder='Phone Number' style={styles.numberinput} placeholderTextColor={'rgba(0,0,0,0.5)'} keyboardType='numeric'>

		</TextInput>

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
		</ScrollView>
		);
}

const styles=StyleSheet.create({
	Container:{
		flex:1,
		backgroundColor:'white',
		height:'105%',
		width:'100%',
		paddingTop:60,
		paddingLeft:30,
		paddingRight:30,
	},
	signupWithOthers:{
		width:'100%',
		height:85,
		display:'flex',
		flexDirection:'column',
		justifyContent:'space-between',
		alignItems:'center',
		marginTop:40,
	},
	google:{
		display:'flex',
		flexDirection:'row',
		width:'70%',
		height:40,
		borderRadius:5,
		backgroundColor:'rgba(56,156,249,1)',
		alignItems:'center',
		elevation:15,
		shadowColor: 'rgba(0,0,0,0.8)',
	},
	whiteback:{
		height:38,
		width:36,
		backgroundColor:'white',
		margin:1,
		borderRadius:5,
		justifyContent:'center',
		alignItems:'center',
	},
	googletextcontainer:{
		width:'80%',
		alignItems:'center',
	},
	googlesign:{
		color:'rgba(255,255,255,1)',
		fontWeight:400,
		fontSize:17,
	},
	facebook:{
		display:'flex',
		flexDirection:'row',
		width:'70%',
		height:40,
		borderRadius:5,
		backgroundColor:'rgba(	71	,89	,147,0.9)',
		alignItems:'center',
		elevation:15,
		shadowColor: 'rgba(0,0,0,0.8)',
		
	},
	blueback:{
		height:38,
		width:36,
		backgroundColor:'rgba(	71	,89	,147,0.9)',
		margin:1,
		borderRadius:5,
		justifyContent:'center',
		alignItems:'center',
	},
	facebooktextcontainer:{
		width:'80%',
		alignItems:'center',
	},
	facebooksign:{
		color:'white',
		fontWeight:400,
		fontSize:17,
	},
	signup:{
		fontSize:30,
		fontWeight:'bold',
		margin:0,

	},
	content:{
	     marginTop:windowHeight/12,
	},
	textinput:{
		height:50,
		width:'90%',
		borderRadius:7,
		borderWidth:1,
		padding:10,
		borderColor:'rgba(0,0,0,0.2)',
		marginTop:30,
	},
	numberinput:{
		height:50,
		width:'90%',
		borderRadius:7,
		borderWidth:1,
		padding:10,
		borderColor:'rgba(0,0,0,0.2)',
		marginTop:30,

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
		paddingLeft:10,
		paddingRight:20,
		marginTop:60,

	},
	right:{
		color:'rgba(255, 165, 0,1)',
		fontWeight:'bold',

	},
	left:{
		fontSize:15,
	},
	
});